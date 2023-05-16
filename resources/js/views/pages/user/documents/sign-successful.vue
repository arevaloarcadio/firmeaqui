<template>
  <div>
    <CRow>
      <CCol sm="12" md="3"></CCol>
      <CCol sm="12" md="6" style="margin-top: 90px">
        <CCard>
          <CCardHeader class="pb-0">
            <h5>Documento firmado exitosamente</h5>
          </CCardHeader>
          <CCardBody>
            <div style="text-align: center;">
              <CButton :disabled="disabled_download" color="success" @click="downloadDocument">Ver Documento firmado</CButton>
            </div>
            <br>
            <div style="text-align: center;">
              <p class="text-muted">
                Gracias por usar firmeaqui,<br> 
                <div v-if="getUser.id == null">
                  Si actualmente no tiene cuenta
                  <br>
                  <br>
                  <CButton color="primary" @click="$router.push('/pages/register')">
                    Registrese aqui
                  </CButton>
                </div>
                <div v-else>
                  <CButton color="primary" @click="$router.push('/receipts')">
                    Ir al Dashboard
                  </CButton>
                </div>
              </p>
            </div>               
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
  </div>
</template>

<script>

import axios from 'axios'
import {mapGetters} from "vuex";

export default {
  name: 'Sign',
  data () {
    return {
      uuid : null,
      email : null,
      request : null,
      disabled_download : true
    }
  },
  created(){
    this.uuid = this.$route.params.uuid
    this.email = this.$route.params.email
    this.validateRequest()
  }, 
  computed: {
    ...mapGetters([
      'getUser'
    ]),
  },
  methods: {
    validateRequest(){
      axios
      .get('/api/requests/validate/'+this.uuid+'/'+this.email)
      .then(res => {
        console.log(res)
        this.disabled_download = false
        this.request = res.data.data
        console.log(this.request)
      }).catch(err => {
        console.log(err)
      }).finally(() => {

      })
    },
    downloadDocument(){
      window.open(axios.defaults.baseURL+'/'+this.request.request.signed_document_path, "_blank");
    },
  }
}
</script>

<style scoped>

</style>
