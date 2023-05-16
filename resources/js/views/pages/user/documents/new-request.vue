<template>
  <div>
    <CCard>
      <CCardBody>
        <CRow>
          <CCol sm="12">

            <div v-if="!isSuccess">
              
              <div class="display-center" >
                <CIcon
                    name="cil-file"
                    height="75"
                  />
                </CButton>
              </div>
              
              <div class="display-center" >
                <h5>Sube el documento a firmar</h5>
              </div>

              <div class="display-center" >
                
                <CButton
                  size="sm"
                  color="primary"
                  @click="chooseFile"
                >
                  <span>Subir documento</span>
                </CButton>
                <input :multiple="false" @change="getFile($event)" accept="application/pdf,.doc,.docx,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document" style="display: none;" ref="file" id="file" name="file" type="file" />
              </div>
              <br>
               <div  class="dropbox">
                <input type="file" :multiple="false" accept="application/pdf,.doc,.docx,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document" :disabled="isSaving" @change="getFile($event); fileCount = $event.target.files.length" name="file" class="input-file">
                  <p v-if="isInitial">
                   Puedes soltar el documento aquí 
                  </p>
                  <p v-if="isSaving">
                    Subiendo archivo...
                  </p>
              </div>
            </div>

            <div v-if="isSuccess">
              <div v-show="step == 1">
                <h4>Archivo subido exitosamente.</h4>
                <CRow>
                  <CCol xs="12" lg="2">
                    <p>
                      <a href="javascript:void(0)" @click="reset()">Subir de nuevo</a>
                    </p>
                  </CCol>
                  <CCol xs="12" lg="4">
                    <CButton color="primary" class="px-4" @click="add_new_signature = true">Agregar nueva firma</CButton>
                  </CCol>
                  <CCol xs="12" lg="6">
                    <CButton color="success" class="px-4" style="float: right;" :disabled="signature_areas.length == 0" @click="next()">Continuar</CButton>
                  </CCol>
                </CRow>
                
                <br>
                
                <div class="display-center">
                  <div id="panel">
                    <div style="position: relative;" v-for="(signature_area,key) in signature_areas" >
                      <div v-show="signature_area.num_page == current_page" :id="'signature_area-'+key" class="div-draw" @click="move('signature_area-'+key,key)">
                        <div class="pencilProfile" @click="delete_sign(key,signature_area.email)">
                          x
                        </div>
                        <div :id="'signature_area-'+key+'header'" contenteditable="true" class="div-draw-header" @blur="get_name_sign($event,key)" v-on:dblclick="edit_name_sign('signature_area-'+key)">
                          Firma <br> {{signature_area.email}} 
                        </div>
                      </div>
                      
                    </div>
                    <img id="img-pdf" class="img-pdf-convert"  :src="document_images[current_page]">
                  </div>
                </div>
                <br>
                <div class="display-center">
                  <nav aria-label="page navigation example">
                    <ul class="pagination justify-content-center">
                      <li  :class="{'page-item' : true , 'disabled' : (current_page+1) <document_images.length }">
                        <a class="page-link" @click="current_page--" tabindex="-1">Anterior</a>
                      </li>
                      <li class="page-item"><a class="page-link">{{current_page+1}}</a></li>
                      <li :class="{'page-item' : true , 'disabled' : (current_page+1) >= document_images.length }">
                        <a class="page-link" @click="current_page++">Siguiente</a>
                      </li>
                    </ul>
                  </nav>
                </div>
                  
              </div>
              <div v-show="step == 2">
                <CCardHeader class="pb-0">
                  <h5>Destinatario</h5>
                </CCardHeader>
                <CRow class="form-group" style="margin-top: 18px;" >
                  <br>
                  <CCol sm="12" md="2"></CCol>
                  <CCol sm="12" md="6" >
                    <label for="subject" class="typo__label">Asunto</label>
                    
                    <input
                      id="subject"
                      class="form-control"
                      name="subject"
                      placeholder="Ingrese el asunto"
                      v-model="subject">

                    <br>
                    
                    <label for="description" class="typo__label">Descripción</label>
                   
                    <textarea 
                    id="description"
                    class="form-control"
                    name="description"
                    placeholder="Opcional"
                    v-model="message">
                    </textarea>
                    
                  </CCol>
                   
                    
                 
                  <CCol  sm="12" md="4"></CCol>
               
                  <CCol sm="12" md="2"></CCol>
                  
                  <CCol sm="12" md="6">

                    <!--<div class="card" style="margin-top: 18px;">
                      <div class="card-header">
                        <i class="fa fa-align-justify"></i>
                        Añadir Destinatario
                      </div>
                      <div class="card-body">
                        <div class="col-12 col-lg-12">
                          <label for="basiurl">Busqueda de usuario:</label>
                          <div class="input-group mb-3">
                            <div class="input-group-prepend">
                              <span class="input-group-text" id="basiaddon3">Email</span>
                            </div>
                            <input type="text" v-model="user_filter" @input="input_search" class="form-control" id="basiurl" aria-describedby="basiaddon3">
                          </div>
                        </div>
                        <div class="col-12 col-lg-12">
                          <label>
                            Resultados:
                          </label>
                          <ul class="list-group">
                            <li v-if="!users.length" class="list-group-item list-group-item-secondary text-center">
                              <span class="text-muted" v-html="users_response">
                                
                              </span>
                            </li>
                            
                            <li  v-if="users_response == 'No se encontro este correo en nuestra base de datos'" class="list-group-item py-1">
                              <div v-if="user_filter != getUser.email" class="d-flex flex-column flex-lg-row flex-grow-1 flex-lg-grow-0 align-items-lg-center justify-content-lg-between">
                                <div>
                                  <span class="text-muted" >
                                    {{ user_filter }}
                                  </span>
                                </div>
                                <div>
                                  <button class="btn btn-block btn-sm btn-success float-right" @click="add_addressee(user_filter)" type="button">Añadir destinatario</button>
                                </div>
                              </div>
                            </li>

                            <li v-for="user in users" class="list-group-item py-1">
                              <div class="d-flex flex-column flex-lg-row flex-grow-1 flex-lg-grow-0 align-items-lg-center justify-content-lg-between">
                                <div>
                                  <h4 class="mb-0">{{ user.name}}</h4>
                                  <span class="text-muted" >
                                    {{ user.email }}
                                  </span>
                                </div>
                                <div>
                                  <button class="btn btn-block btn-sm btn-success float-right" @click="add_addressee(user.email)" type="button">Añadir destinatario</button>
                                </div>
                              </div>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>-->
                    <label for="subject" class="typo__label">Destinatario</label>
                    <div class="form-control">
                      <CRow>
                        <div class="email-request" v-for="user in selected_users">
                          <div class="container-email-request">
                            {{user.email}}
                            <!--<img src="assets/svg/delete_user.svg" @click="delete_addressee(user.email)" style="margin-top: -3px;">-->
                          </div>
                        </div>
                      </CRow>
                    </div>
                  </CCol>
                </CRow>
              </div>
            </div>
          </CCol>

          <CCol sm="12" md="2"></CCol>
          <CCol sm="12" md="6">
            <button v-if="step == 2" :disabled="sending" class="btn btn-secondary mt-2" @click="step = 1">Atras</button>
            <button v-if="step == 2" :disabled="sending" class="btn btn-primary mt-2" @click="save_request">Enviar</button>
          </CCol>
        </CRow>
      </CCardBody>

      <CModal title="Asignación de Firma"  :show.sync="add_new_signature">
        <CInput
          type="email"
          placeholder="Correo Electrónico"
          v-model="email"
          @input="validateEmail">
          <template #prepend-content><CIcon name="cil-user"/></template>
        </CInput>
        <template #footer>
          <CButton @click="add_new_signature = false" color="danger">Cerrar</CButton>
          <CButton @click="add_signature()" :disabled="!validate_email" color="primary">Agregar</CButton>
        </template>
      </CModal>
    
    </CCard>
  </div>
</template>


<script>

import axios from 'axios'
import $ from 'jquery'
import { mapGetters } from 'vuex'
import VueNotifications from "vue-notifications"
const STATUS_INITIAL = 0, STATUS_SAVING = 1, STATUS_SUCCESS = 2, STATUS_FAILED = 3;

export default {
  name: 'Dashboard',
  data () {
    return {
      requestModal : false,
      selected: 'Month',
      documents :[],
      step : 1,
      document_images : [],
      current_page : 0,
      uploadedFiles: [],
      uploadError: null,
      fileCount : 0,
      currentStatus: null,
      uploadFieldName: 'photos',
      signature_areas : [],
      current_div : null,
      current_key : null,
      hoverDrawDiv : false,
      user_filter : null,
      users_response : 'Ingresa un dato para la busqueda',
      users: [],
      selected_users: [],
      awaitingSearch :false,
      subject : null,
      message : null,
      document_id : null,
      toasts : [],
      sending : false,
      add_new_signature : false,
      email : null,
      validate_email : false
    }
  },
  computed: {
    isInitial() {
      return this.currentStatus === STATUS_INITIAL;
    },
    isSaving() {
      return this.currentStatus === STATUS_SAVING;
    },
    isSuccess() {
      return this.currentStatus === STATUS_SUCCESS;
    },
    isFailed() {
      return this.currentStatus === STATUS_FAILED;
    },
    ...mapGetters([
      'getUser'
    ]),
  },
  mounted(){
    this.reset()
  },
  methods: {
    chooseFile(){
      document.querySelector('#file').click()
    },
    getFile($event){

      var formData = new FormData;
      
      formData.append("document", $event.target.files[0])
      
      this.save(formData)
    },
    reset() {
        // reset form to initial state
        this.currentStatus = STATUS_INITIAL;
        this.uploadedFiles = [];
        this.uploadError = null;
    },
    next(){
      var self = this
      
      var width = $('#img-pdf').width()
      var height = $('#img-pdf').height()
      
      Promise.all([
        self.signature_areas.forEach((signature_area,key) =>{
          var div_width = $('#signature_area-'+key).width()
          var div_height = $('#signature_area-'+key).height()
          signature_area['height'] = (div_height * 100) / height;
          signature_area['width'] = (div_width * 100) / width;
        })
      ])
      .catch(err => console.log(err))
      .finally(() =>{
        self.step = 2 
      });    
    },
    save(formData) {
      // upload data to the server
      this.currentStatus = STATUS_SAVING;

      axios
      .post('/api/documents/convert-pdf',formData)
      .then(res =>{
        console.log(res)
        this.document_images = res.data.data.images;
        console.log(this.document_images)
        this.document_id = res.data.data.document.id
        this.currentStatus = STATUS_SUCCESS;
      }).catch(err =>{
        console.log(err)
        this.uploadError = err.response;
        this.currentStatus = STATUS_FAILED;
      })
    },
    save_request() {

      this.sending = true;

      const data = {
        subject : this.subject,
        message : this.message,
        users : this.selected_users,
        document_id : this.document_id,
        sign_documents : this.signature_areas
      }

      axios
      .post('/api/requests',data)
      .then(res =>{
        console.log(res)
        this.sending = false;
        this.$toast.fire({
          icon: 'success',
          title: 'Envio registrado exitosamente',
        })
        this.$router.go(0)
      }).catch(err =>{
        console.log(err)
        this.sending = false;
      })
    
    },
    edit_name_sign(id){
      document.getElementById(id + "header").onmousedown = null;
      document.getElementById(id).addEventListener("input", inputEvt => {
        console.log("input event fired");
      }, false);
    },
    get_name_sign($event,key){
      this.signature_areas[key].name = $event.target.textContent
    },
    delete_sign(key,email){
      this.signature_areas.splice(key)
      this.delete_addressee(email)
    },
    add_signature(){
      
      this.signature_areas.push({
        name : 'Firma <br>'+this.email, 
        percentage_top : '1%',
        percentage_left : '1%',
        height : '104px',
        width: '50px',
        num_page : this.current_page,
        email : this.email
      })

      let validate = this.selected_users.find(user => user.email == this.email)
      
      console.log(validate)

      if (validate === undefined)  {
        this.selected_users.push({email :this.email}) 
      }
      
      this.add_new_signature = false;
      this.email = null;
      var self = this
      
      setTimeout(
        self.move('signature_area-'+(self.signature_areas.length-1),self.signature_areas.length-1), 
      500);
    },
    move(id,key){
      this.current_div = id
      this.current_key = key
      this.dragElement(document.getElementById(id));
    },
    
    dragElement(elmnt) {
      var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
      var self  = this
      if (document.getElementById(elmnt.id + "header")) {
        /* if present, the header is where you move the DIV from:*/
        document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown;
        document.getElementById(elmnt.id).onresize = resize();
      } else {
        /* otherwise, move the DIV from anywhere inside the DIV:*/
        elmnt.onmousedown = dragMouseDown;
      }
      
      function resize(e){
        e = e || window.event;
        e.preventDefault();
        console.log(e)

        var div_width = $('#'+e.target.id).width()
        var div_height = $('#'+e.target.id).height()

        var width = $('#img-pdf').width()
        var height = $('#img-pdf').height()

        self.signature_areas[self.current_key]['height'] = (div_height * 100) / height;
        self.signature_areas[self.current_key]['width'] = (div_width * 100) / width;
      }

      function dragMouseDown(e) {
        e = e || window.event;
        e.preventDefault();
        // get the mouse cursor position at startup:
        pos3 = e.clientX;
        pos4 = e.clientY;
        document.onmouseup = closeDragElement;
        // call a function whenever the cursor moves:
        document.onmousemove = elementDrag;
      }

      function elementDrag(e) {
        e = e || window.event;
        e.preventDefault();
        // calculate the new cursor position:
        pos1 = pos3 - e.clientX;
        pos2 = pos4 - e.clientY;
        pos3 = e.clientX;
        pos4 = e.clientY;
        // set the element's new position:
        elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
        elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
      }

      function closeDragElement(ev) {
        var div = document.getElementById(self.current_div);

        var width = $('#img-pdf').width()
        var height = $('#img-pdf').height()


        var div_width = $('#signature_area-'+self.current_key).width()
        var div_height = $('#signature_area-'+self.current_key).height()

        let percentage_top = (parseInt(div.style.top) * 100) / height;
        let percentage_left = (parseInt(div.style.left) * 100) / width;
        
        self.signature_areas[self.current_key]['percentage_top'] = percentage_top;
        self.signature_areas[self.current_key]['percentage_left'] = percentage_left
        self.signature_areas[self.current_key]['height'] = (div_height * 100) / height;
        self.signature_areas[self.current_key]['width'] = (div_width * 100) / width;
        
        console.log(div.style.left+ '*'+ 100 +'/'+width)

        if (parseInt(div.style.top) < 0) {
          div.style.top = '0px'
        }

        if (parseInt(div.style.left) < 0) {
          div.style.left = '0px'
        }

        if ((parseInt(div.style.left) + div_width) > width) {
          div.style.left = (width-div_width)+'px'
        }

        if ((parseInt(div.style.top) + div_height) > height) {
          div.style.top = (height-div_height)+'px'
        }

        console.log(self.signature_areas)
        //$('#'+self.current_div).attr('style','top:'+percentage_top+'%;left:'+percentage_left+'%');

        /* stop moving when mouse button is released:*/
        document.onmouseup = null;
        document.onmousemove = null;
      }
    },
    handlerTouchMove(ev){
      //e.targetTouches[0];
      console.log(ev)
    },
    handlerTouchEnd(ev){
      console.log(ev)
    },
    color (value) {
      let $color
      if (value <= 25) {
        $color = 'info'
      } else if (value > 25 && value <= 50) {
        $color = 'success'
      } else if (value > 50 && value <= 75) {
        $color = 'warning'
      } else if (value > 75 && value <= 100) {
        $color = 'danger'
      }
      return $color
    },
    add_addressee(email){
      var add = true
      
      this.selected_users.forEach((user) =>{
        if(email == user.email){
          add = false
        }
      })

      if (add) {
        this.selected_users.push({email : email})
      }
    },
    delete_addressee(email){
      this.selected_users.forEach((user,key) =>{
        console.log(user)
        if(user.email == email){
          this.selected_users.splice(key, 1);
        }
      })
    },
    input_search : function () {
      if (!this.awaitingSearch) {
        setTimeout(() => {
          
          this.users_response = 'Buscando...';
          this.search_user();

          this.awaitingSearch = false;
        
        }, 1100); // 1 sec delay
      }
      this.awaitingSearch = true;
    },
    search_user() {
      
      axios
      .post('/api/users/search',{user_like : this.user_filter})
      .then(res =>{
        console.log(res)
        this.users = res.data.data.data;

        if (this.users.length == 0) {
          this.users_response = "No se encontro este correo en nuestra base de datos"
        }
      }).catch(err =>{
        console.log(err)
      })
    },
    validateEmail(){
      var validEmail =  /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;
      this.validate_email =  validEmail.test(this.email)
    } 
  },
  notifications: {
      showSuccessMsg: {
        type: VueNotifications.types.success,
        title: 'Exito',
        message: 'Se ha registrado exitosamente el envio'
      },
      showErrorMsg: {
        type: VueNotifications.types.error,
        title: 'Error',
        message: 'Ha ocurrido un error'
      }
  },
}
</script>

<style lang="scss" scoped>
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

<style scoped>
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
    resize: both;
    overflow: auto;
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
  border-radius: 10px;
  border: 1px solid #d3d3d3;
  background-color: rgb(88, 130, 184);
  resize: both;
  overflow: auto;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
}

.div-draw-header {
  padding: 10px;
  cursor: move;
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
  
  .img-pdf-convert{
     height: 500px;
     width: 300px;
      border: 2px solid;
  }
} 

@media (min-width: 10px) {
  
  .img-pdf-convert{
     height: 400px;

     width: 200px;
    border: 2px solid;
  }
} 

@media (min-width: 768px) {
 .img-pdf-convert{
     height: 600px;

     width: 480px;
    border: 2px solid;
  }
}

@media (min-width: 992px) {
  .img-pdf-convert{
     height: 1000px;

     width: 780px;
    border: 2px solid;
  }
}

@media (min-width: 1200px) {
  .img-pdf-convert{
     height: 1000px;

     width: 780px;
    border: 2px solid;
  }
}

@media (min-width: 1400px) {
  .img-pdf-convert{
     height: 1400px;

     width: 1200px;
    border: 2px solid;
  }
}
</style>