<template>
  <CContainer class="min-vh-100 d-flex align-items-center">
    <CRow class="w-100 justify-content-center">
      <CCol md="6" sm="8">
        <CCard class="mx-4 mb-0">
          <CCardBody class="p-4">
            <CForm>
              <h1>Registro</h1>
              <p class="text-muted">Crea tu cuenta</p>
              <CInput
                placeholder="Nombre"
                autocomplete="name"
                v-model="name"
              >
                <template #prepend-content><CIcon name="cil-user"/></template>
              </CInput>
              <CInput
                placeholder="Correo electrónico"
                autocomplete="email"
                prepend="@"
                v-model="email"
              />
              <CInput
                placeholder="Contraseña"
                type="password"
                autocomplete="new-password"
                v-model="password"
              >
                <template #prepend-content><CIcon name="cil-lock-locked"/></template>
              </CInput>
              <CInput
                placeholder="Repite la contraseña"
                type="password"
                autocomplete="new-password"
                class="mb-4"
                v-model="password_confirmation"
              >
                <template #prepend-content><CIcon name="cil-lock-locked"/></template>
              </CInput>
              <CButton color="success" @click="register" :disabled="sending" block>Crear cuenta</CButton>
              <CButton color="primary" @click="$router.push('/pages/login')" block>Iniciar Sesión</CButton>
            </CForm>
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
  </CContainer>
</template>

<script>

import axios from 'axios'

export default {
  name: 'Register',
  data() {
    return {
      name: null,
      email : null,
      password : null,
      password_confirmation : null,
      sending : false
    }
  },
  methods : {
    register(){

      this.sending = true

      axios.post('/api/auth/register',{
        name : this.name,
        email : this.email,
        password : this.password,
        password_confirmation : this.password_confirmation,
      })
      .then(res => {
        this.sending = false
        
        this.$toast.fire({
          icon: 'success',
          title: 'Registro exitoso',
        })

        this.$router.push('/pages/login')

      }).catch(err => {
        this.sending = false
        console.log()
        if (err.response.status != 422) {
          this.$toast.fire({
            icon: 'error',
            title: 'Registro fallido',
          }) 
        }
        
        console.log(err)
      })
    }
  }
}
</script>
