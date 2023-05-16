import Vue from 'vue';
import router from '@/router';
import jwtToken from '@/helpers/jwt-token';
import store from '@/store/index.js';
import axios from 'axios';

const UNAUTHORIZED = 401;
const ERRORS = [
  'token_invalid',
  'Token is Invalid',
  'token_expired',
  'token_not_provided',
  'Expired JWT Token',
  'JWT Token not found',
  'Token is Expired'
];

//axios.defaults.baseURL = 'https://firmeaqui.infutura.es';
axios.defaults.baseURL = 'http://localhost:8000';

Vue.prototype.$http = axios;

axios.interceptors.request.use(
  config => {
    config.headers['X-Requested-With'] = 'XMLHttpRequest';

    if (jwtToken.getToken()) {
      config.headers['Authorization'] = `Bearer ${jwtToken.getToken()}`;
    }

    return config;
  },
  error => {
    return Promise.reject(error);
  }
);

axios.interceptors.response.use(
  response => response,
  error => {
    console.log(error)
    const statusCode = error.response.status;
    const statusText = error.response.data.status;

    console.log(statusCode, statusText);

    if (statusCode === UNAUTHORIZED || ERRORS.includes(statusText)) {
      store.dispatch('unsetAuthUser').then(() => {
        jwtToken.removeToken();

        const route = '/pages/login';
        const { name, path } = router.currentRoute;
        if (name !== 'Login' || path !== route) {
          router.push({ path: route });
        }
      });
    }

    if(error['response'] == undefined){
      Vue.prototype.$toast.fire({
        icon: 'error',
        title: 'Error de conexión,intente nuevamente',
      })
      return Promise.reject(error);
    }
    if(error['response']['status'] == 404){
      //toast.openToast(error['response']['data']['data'],"error",2000)
    }
    if(error['response']['status'] == 422){
      
      let html = "";
      
      console.log(error['response']['data']['error']['message'])
      
      for(let m in error['response']['data']['error']['message']){
        html +=  error['response']['data']['error']['message'][m]+'<br>'
      }

      /*
      for(let key in error['response']['data']['errors']){
        console.log( error['response']['data']['errors']['response'])
        for(let message in error['response']['data']['errors'][key]){
          html += error['response']['data']['errors'][key][message]+'<br>'
      }
      }*/
      
      Vue.prototype.$toast.fire({
        icon: 'error',
        title: 'Error en el formulario',
        html: html
      })

    }else if(error['response']['status'] == 500){
      
      Vue.prototype.$toast.fire({
        icon: 'error',
        title: 'Ha ocurrido un error',
        html:  error['response']['data']['error']['message']+' Line '+error['response']['data']['error']['line']
      })

    }else if(error['response']['status'] == 401){
      
      Vue.prototype.$toast.fire({
        icon: 'error',
        title: 'Autenticación fallida, por favor inicie sesión nuevamente',
      })
    
    }else{
      Vue.prototype.$toast.fire({
        icon: 'error',
        title: 'Error de conexión,intente nuevamente',
      })
    }
    return Promise.reject(error);
  }
);
