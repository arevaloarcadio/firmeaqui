import Vue from 'vue'
import App from './App'
import router from './router'
import axios from './config/axios.js'
import store from './store/index'
import jwtToken from './helpers/jwt-token'
import CoreuiVue from '@coreui/vue'
import { iconsSet as icons } from './assets/icons/icons.js'
import Multiselect from 'vue-multiselect'
import es from 'vee-validate/dist/locale/es'
import VeeValidate, { Validator } from "vee-validate";
import $ from 'jquery'
import PortalVue from "portal-vue";
// NOTIFICACIONES TOSTR
import VueNotifications from 'vue-notifications';
import miniToastr from 'mini-toastr';
import Swal from 'sweetalert2'
import VueSignature from "vue-signature-pad";

Vue.use(VueSignature);

const toastTypes = {
    success: 'success',
    error: 'error',
    info: 'info',
    warn: 'warn'
};

const Toast = Swal.mixin({
  toast: true,
  position: 'top',
  showConfirmButton: false,
  timer: 4000,
  timerProgressBar: true,
  onOpen: (toast) => {
    toast.addEventListener('mouseenter', Swal.stopTimer)
    toast.addEventListener('mouseleave', Swal.resumeTimer)
  }
});

Vue.prototype.$toast = Toast;

miniToastr.init({types: toastTypes});

function toast ({title, message, type, timeout, cb}) {
    return miniToastr[type](message, title, timeout, cb)
}

const options = {
    success: toast,
    error: toast,
    info: toast,
    warn: toast
};

Vue.use(VueNotifications, options);
Vue.use(PortalVue);

//////////////


Vue.use(VeeValidate, { fieldsBagName: 'veeFields' });
Validator.localize("es", es);

Vue.component('multiselect', Multiselect)
Vue.config.performance = true
Vue.use(CoreuiVue)

var app = new Vue({
  el: '#app',
  router    : router,
  store     : store,
  icons,
  template: '<App/>',
  components: {
    App
  },
})
