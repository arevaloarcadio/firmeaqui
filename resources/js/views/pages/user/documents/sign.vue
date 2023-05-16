<template>
  <div>
    <CCard>
      <CCardHeader class="pb-0">
        <h5>Firma de Documento</h5>
      </CCardHeader>
      <CCardBody>
        <CRow>
          <CCol sm="12" md="2"  style="margin-top: 5px;">
            <CButton color="primary" @click="getTemplateSign">Firmar</CButton>
          </CCol>
          <CCol sm="12" md="4"  style="margin-top: 5px;">
            <CButton color="secondary" @click="downloadDocument">Descargar Documento</CButton>
          </CCol>
          <CCol sm="12" md="6" style="margin-top: 5px;" >
            <CButton color="success" class="px-4 float-a-right" :disabled="disabled_sending"  @click="save">Subir Firma</CButton>
          </CCol>
        </CRow>
        <CRow>
          <CCol sm="12">
            <br>
            <div class="display-center">
              <div id="panel">
                <div v-for="(template_sign,key) in template_signs" style="position: relative;">
                  <div v-show="template_sign.num_page == current_page" v-if="template_sign.email == email" :id="'signature_area-'+key" class="div-draw div-signature" style="border: 1px solid #d3d3d3; background-color: rgb(88, 130, 184);" @click="getTemplateSign(template_sign.email)" :style="{'width' : template_sign.width+'px', 'height' : template_sign.height+'px','top' : template_sign.top+'px', 'left' : template_sign.left+'px','position': 'absolute'}">
                    <div :id="'signature_area-'+key+'header'">
                      {{template_sign.description}}
                    </div>
                  </div>
                </div>
                <img  id="img-pdf" class="img-pdf-convert"  :src="document_images[current_page].path">
              </div>
            </div>
            <br>
            <div class="display-center">
              <nav aria-label="page navigation example">
                <ul class="pagination justify-content-center">
                  <li  :class="{'page-item' : true , 'disabled' : (current_page+1) < request.document.document_images.length }">
                    <a class="page-link" @click="current_page--" tabindex="-1">Anterior</a>
                  </li>
                  <li class="page-item"><a class="page-link">{{current_page+1}}</a></li>
                  <li :class="{'page-item' : true , 'disabled' : (current_page+1) >= request.document.document_images.length }">
                    <a class="page-link" @click="current_page++">Siguiente</a>
                  </li>
                </ul>
              </nav>
            </div>
          </CCol>
        </CRow>
      </CCardBody>
    </CCard>
    <CModal title="Subir firma"  size="lg" :show.sync="signModal">
      <div style="border: 2px solid;">
         <VueSignaturePad
          id="signature"
          width="100%"
          height="200px"
          ref="signaturePad"
          :options="{ onBegin }"
        />
      </div>
      <template #footer>
        <CButton @click="signModal = false" color="danger">Cerrar</CButton>
        <CButton @click="clear" color="secondary">Limpiar</CButton>
        <CButton color="primary":disabled="sending_register" @click="save_sign">Firmar</CButton>
      </template>
    </CModal>
  </div>
</template>

<script>

import axios from 'axios'
import $ from 'jquery'
import VueNotifications from "vue-notifications"
import jwtToken from "@/helpers/jwt-token";
import {mapActions,mapGetters} from "vuex";
import user from "@/helpers/user";

export default {
  name: 'Sign',
  data () {
    return {
      uuid : null,
      email_ : null,
      request : {document :{document_images : [] }},
      signModal : false,
      template_signs : [],
      document_images : [],
      template_sign_ids : [],
      email : null,
      user_id : null,
      sign : null,
      key_sign : null,
      file_sign : null,
      document_id : null,
      disabled_sending : true,
      current_page : 0,
      sending_register : false
    }
  },
  mounted(){
    this.uuid = this.$route.params.uuid
    this.email_ = this.$route.params.email
    $('.close').attr("style","display : none !important;");
    this.validateRequest()
  }, 
  computed: {
    ...mapGetters([
      'getUser'
    ]),
  },
  methods: {
    ...mapActions([
        'setAuthUser'
    ]),
    validateRequest(){
      
      let template_signs;
      
      /*if (this.getUser.email != null) {
        if (this.getUser.email != this.email_) {
          this.$toast.fire({
            icon: 'error',
            title: 'No tiene autorización para firmar este documento',
          })
          this.$router.push('/receipts')
          return
        } 
      }*/

      axios
      .get('/api/requests/validate/'+this.uuid+'/'+this.email_)
      .then(res => {
        if (res.data.data.validate) {

          this.request = res.data.data.request
          this.document_images = this.request.document.document_images

          if (res.data.data.user == null) {
            this.email = this.email_ 
            //this.registerUserModal = true
          }else{
            this.user_id = res.data.data.user.id
          }
          console.log(this.request)

          //var user = this.request.request_users.find(user => user.user.email == this.email)
            
          //if (user ===  undefined) {
            var user = this.request.request_users.find(user => user.email == this.email)
          //} 
          
          if(user.is_signed){
            
            this.$toast.fire({
              icon: 'warning',
              title: 'Ya el documento fue firmado',
            })
            this.$router.push('/receipts')
          }

          this.document_id = this.request.document_id
          template_signs = this.request.document.template_signs
        }else{
          this.$toast.fire({
            icon: 'error',
            title: 'No tiene autorización para firmar este documento',
          })
          this.$router.push('/receipts')
        }
      }).catch(err => {
        console.log(err)
      }).finally(() => {

        var width = $('#img-pdf').width()
        var height = $('#img-pdf').height()

        template_signs.forEach((template_sign) => {
          template_sign.left = (template_sign.position_x * width) / 100
          template_sign.top = (template_sign.position_y * height) / 100
          template_sign.width = (template_sign.width * width) / 100
          template_sign.height = (template_sign.height * height) / 100
        })
        
        this.template_signs = template_signs
      })
    },
    save() {
     
      this.disabled_sending = true
      
      var formData = new FormData();
      
      var ip = $('#ip-host').val();

      formData.append('image_sign',this.file_sign)
      
      for (var i = 0; i < this.template_sign_ids.length; i++) {
        formData.append('template_sign_ids[]',this.template_sign_ids[i])
      }
      
      formData.append('user_id',this.user_id)
      formData.append('ip',ip)
      formData.append('email',this.email)
      formData.append('document_id',this.document_id)
      
      axios
      .post('/api/documents/sign',formData)
      .then(res => {
        this.disabled_sending = false
        if(res.data.data == 'OK'){
          this.$toast.fire({
            icon: 'success',
            title: 'Documento firmado exitosamente',
          })
          this.$router.push({
            name : 'Firmado Exitoso', 
            params :{ 
              uuid : this.uuid, 
              email : this.email 
            }
          })
        } 
      }).catch(err => {
        this.disabled_sending = false
        console.log(err)
      })
    },
    getTemplateSign(){
      this.template_sign_ids = []
      
      this.template_signs.forEach(template_sign => {
        if (template_sign.email == this.email) {
          this.template_sign_ids.push(template_sign.id)    
        }
      })
      
      this.signModal = true
    },
    downloadDocument(){
      window.open(axios.defaults.baseURL+'/'+this.request.document.path, "_blank");
    },
    clear() {
      this.$refs.signaturePad.clearSignature();
    },
    save_sign(){
         console.log("sfsfsdf")
      this.signModal = false
      
      const { isEmpty, data } = this.$refs.signaturePad.saveSignature();

      if (!isEmpty) {
        this.file_sign = this.dataURLtoFile(data,new Date().getTime()+'.png')
        
        this.template_signs.forEach((template_sign,key) => {

          if (template_sign.email == this.email) {
            document.querySelector('#signature_area-'+key).style.backgroundColor = null;
            document.querySelector('#signature_area-'+key).style.border = null;
          
            var width   = this.template_signs[key].width
            var height  = this.template_signs[key].height

            document.querySelector('#signature_area-'+key).style.backgroundSize   = width+"px "+height+"px";
            document.querySelector('#signature_area-'+key).style.backgroundRepeat = "no-repeat";
            document.querySelector('#signature_area-'+key).style.backgroundImage  = "url('"+URL.createObjectURL(this.file_sign)+"')";
          }
        })
      }
     
      this.disabled_sending = false
    },
    
    dataURLtoFile : function(dataurl, filename) {
      var arr = dataurl.split(','),
          mime = arr[0].match(/:(.*?);/)[1],
          bstr = atob(arr[1]), 
          n = bstr.length, 
          u8arr = new Uint8Array(n);
          
      while(n--){
          u8arr[n] = bstr.charCodeAt(n);
      }
      
      return new File([u8arr], filename, {type:mime});
    },
    onBegin() {
      this.$refs.signaturePad.resizeCanvas()
    },
    onEnd() {
    
    }
  }
}
</script>
<style scoped>

</style>
<style lang="scss">
  .dropbox {
    outline: 2px dashed grey; /* the dash box */
    outline-offset: -10px;
    background: lightcyan;
    color: dimgray;
    padding: 10px 10px;
    min-height: 150px; /* minimum height */
    position: relative;
    cursor: pointer;
  }
  
  .input-file {
    opacity: 0; /* invisible but it's there! */
    width: 100%;
    height: 200px;
    position: absolute;
    cursor: pointer;
  }
  
  .dropbox:hover {
    background: lightblue; /* when mouse over to the drop zone, change color */
  }
  
  .dropbox p {
    font-size: 1.2em;
    text-align: center;
    padding: 50px 0;
  }
</style>

<style type="text/css">

 .close-register{
    display: none; 
  }
  .active-div{
    background-color: blue;
  }
  .display-center{
    display: flex;
    justify-content: center;
  }

  .draw {
    border: 2px solid;
    border-color: #3c4b64;
    border-radius: 10px;
    padding: 20px; 
    position: absolute;
    width:  104px;
    height: 50px;
    /*transform: translate(-284px, -175px);*/
}

.email-request{
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0px 9px;
}

.container-email-request{
  background: #EAEAEA;
  border-radius: 4px;
  padding: 3px 8px;
  line-height: 17px;
}

.div-draw {
  position: absolute;
  z-index: 9;
  text-align: center;
  color: #fff;
  border-radius: 10px;
 

  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
}

.div-draw-header {
  padding: 10px;
  z-index: 10;
  background-color: rgb(88, 130, 184);
  color: #fff;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
}
.div-draw-header:focus-visible {
  outline: none;
}
.pencilProfile{
    color: white;
    display: flex;
    width: 20px;
    height: 20px;
    border-radius: 100%;
    background-color: transparent;
    position: absolute;
    text-align: center;
    margin-left: 6px;
    margin-top: -3px;
  }





@media (min-width: 1000px) {
  
  .float-a-right{
    float: right;
  }

  .img-pdf-convert{
     height: 500px;
     width: 300px;
      border: 2px solid;
  }
  .div-signature{
    display: block;
  }
} 

@media (min-width: 10px) {
  
  .float-a-right{
    float: none;
  }

  .img-pdf-convert{
     height: 400px;

     width: 200px;
    border: 2px solid;
  }

  .div-signature{
    display: none;
  }
} 

@media (min-width: 768px) {
  .float-a-right{
    float: right;
  }
 .img-pdf-convert{
     height: 1200px;

     width: 780px;
    border: 2px solid;
  }

  .div-signature{
    display: block;
  }
}

@media (min-width: 992px) {
   .float-a-right{
    float: right;
  }
  .img-pdf-convert{
     height: 1000px;

     width: 780px;
    border: 2px solid;
  }
  .div-signature{
    display: block;
  }
}

@media (min-width: 1200px) {
   .float-a-right{
    float: right;
  }
  .img-pdf-convert{
     height: 1000px;

     width: 780px;
    border: 2px solid;
  }
  .div-signature{
    display: block;
  }
}

/*@media (min-width: 1400px) {
  .img-pdf-convert{
     height: 1400px;

     width: 1200px;
    border: 2px solid;
  }
}*/
</style>