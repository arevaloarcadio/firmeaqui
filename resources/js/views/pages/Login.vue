<template>
  <CContainer>
    <CRow>
      <CCol sm="12" md="3"></CCol>
      
      <CCol sm="12" md="6" style="margin-top: 110px">
        
          <CCard class="p-4" >
            <CCardBody>
              <CForm>
                <h1>Bienvenido a Firmeaqui</h1>
                <p class="text-muted">Accede a tu cuenta</p>
                <CInput
                  placeholder="Username"
                  autocomplete="username email"
                  v-model="user.email">
                  <template #prepend-content><CIcon name="cil-user"/></template>
                </CInput>
                <CInput
                  placeholder="Password"
                  type="password"
                  autocomplete="curent-password"
                  v-model="user.password">
                  <template #prepend-content><CIcon name="cil-lock-locked"/></template>
                </CInput>
                <CInputCheckbox
                    class="mt-4 mb-4"
                    :label="'Recordarme'"
                    :name="'remember'"
                    :checked="user.remember"
                    v-on:update:checked="user.remember=$event"/>
                <CRow>
                  <CCol col="3">
                    <CButton color="primary" class="px-4" @click="login">Login</CButton>
                  </CCol>
                  <CCol col="4">
                    <CButton color="success" class="px-4" @click="$router.push('/pages/register')">Registro</CButton>
                  </CCol>
                  <CCol col="3" class="text-right">
                    <CButton color="link" class="px-0 py-0">¿Olvidaste tu password?</CButton>
                  </CCol>
                </CRow>
              </CForm>
            </CCardBody>
          </CCard>
          <!--<CCard
            color="primary"
            text-color="white"
            class="text-center py-5 d-md-down-none"
            style="width:44%"
            body-wrapper
          >
            <div><img src="/storage/logo-nuevo.png" width="300px"></div><br>
            <p>Contacte con nuestro equipo si considera que debería tener acceso a la red interna<br></p>
            <CButton
              color="primary"
              class="active mt-3"
            >
              Gracias!
            </CButton>
          </CCard>-->
        </CCardGroup>
      </CCol>
    </CRow>
  </CContainer>
</template>

<script>
import axios from 'axios'
import jwtToken from "@/helpers/jwt-token";
import {mapActions} from "vuex";
import user from "@/helpers/user";
import VueNotifications from "vue-notifications"

export default {
  name: 'Login',
  data () {
    return {
      user: {
        email: '',
        password: '',
        remember: false
      },
    }
  },
  created() {
    this.setCredentials();
  },
  methods:{
    ...mapActions([
        'setAuthUser'
    ]),
    login(){

      let self = this
      axios({ url: '/api/auth/login', data: this.user, method: 'POST' })
        .then(response => {

          if(response.status == "200"){
            console.log(response.data)
            self.showSuccessMsg()
            user.setUser(response.data.user)
            jwtToken.setToken(response.data.token);
            self.setAuthUser(response.data.user)
            this.remember()

            self.$router.push({ name: 'Recibidos' });
          }
        })
        .catch(err => {
          //self.showErrorMsg()
          //commit('auth_error', err)
          localStorage.removeItem('token')
          //reject(err)
        });
    },
    remember() {

        // Si el usuario no desea ser recordado y están almacenadas sus credenciales
        if (!this.user.remember && localStorage.getItem('remember')) {
            localStorage.removeItem('remember');
            return;
        };

        const parsed = window.btoa(JSON.stringify(this.user));
        localStorage.setItem('remember', parsed);
    },
    setCredentials() {
        if (localStorage.getItem('remember')) {
            try {
                const parsed = JSON.parse(window.atob(localStorage.getItem('remember')))
                this.user = {...parsed};
            } catch(ex) {
                console.error(ex);
                localStorage.removeItem('remember');
            }
        }
    }
  },
  notifications: {
      showSuccessMsg: {
        type: VueNotifications.types.success,
        title: 'Acceso concedido',
        message: 'Bienvenido'
      },
      showErrorMsg: {
        type: VueNotifications.types.error,
        title: 'Acceso denegado',
        message: 'Revise sus credenciales'
      }
  },
}
</script>
