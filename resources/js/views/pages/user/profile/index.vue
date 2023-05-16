<template>
  <div>
    <CRow class="py-4">
      <CCol sm="12" md="12">
        <CCard>
          <CCardBody>
            <CCardHeader class="pb-0">
              <h5>Mi Perfil</h5>
            </CCardHeader>
            <CRow class="form-group" style="margin-top: 18px;" >
              <CCol sm="12" md="3"></CCol>
              <CCol sm="12" md="6">
                <center>
                  <label for="file-input">
                      <img style="height:100px;width:100px;" id="profile" class="c-avatar-img" :src="axios.defaults.baseURL+'/'+getUser.photo">
                  </label>
                </center>
          
                <input type="file" style="display: none" @change="getPicture"  ref="picture"  id="file-input" name="file-input" accept="image/x-png,image/jpeg" />
                
                <label class="typo__label">Nombre</label>

                <input
                  class="form-control"
                  placeholder="Ingrese el nombre"
                  v-model="name">

                <br>
                
                <label class="typo__label">Email</label>

                <input
                  class="form-control"
                  placeholder="Ingrese el Email"
                  v-model="email">

                <br>
                
                <CButton color="primary" class="px-4" @click="save">
                  Guardar
                </CButton>

              </CCol>
            </CRow>
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>

    <CRow>
      <CCol sm="12" md="12">
        <CCard>
          <CCardBody>
            <CCardHeader class="pb-0">
              <h5>Cambio de contraseña</h5>
            </CCardHeader>
            <CRow class="form-group" style="margin-top: 18px;" >
              <CCol sm="12" md="3"></CCol>
              <CCol sm="12" md="6">
                
                <label class="typo__label">Contraseña</label>

                <input
                  class="form-control"
                  placeholder="Ingrese el nombre"
                  v-model="password">

                <br>
                
                <label class="typo__label">Confirmar Contraseña</label>

                <input
                  class="form-control"
                  placeholder="Ingrese el Email"
                  v-model="password_confirmation">

                <br>
                
                <CButton color="primary" class="px-4" @click="save_password">
                  Guardar
                </CButton>

              </CCol>
            </CRow>
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
  </div>
</template>

<script>
import axios from 'axios'
import { mapGetters,mapActions } from 'vuex'
import $ from 'jquery'
import user from "@/helpers/user";

export default {
  name: 'Profile',
  data () {
    return {
      axios,
      name : null,
      email : null,
    }
  },
  mounted(){
    this.name = this.getUser.name
    this.email = this.getUser.email
  },
  computed: {
    ...mapGetters([
      'getUser'
    ]),
  },
  methods:{
    ...mapActions([
      'setAuthUser'
    ]),
    getPicture : function () {
      const file = this.$refs.picture.files[0]
      this.file_picture = file;
      $('#profile').attr("src",window.webkitURL.createObjectURL(file))     
    },
    save(){
      
      var formData = new FormData;
      formData.append("name",this.name)
      formData.append("email",this.email)
      formData.append("picture",this.file_picture)
      
      axios
      .post('/api/users/'+this.getUser.id,formData)
      .then(res =>{
        console.log(res)
        user.setUser(res.data.data)
        this.setAuthUser(res.data.data)
        this.$toast.fire({
          icon: 'success',
          title: 'Modificación de perfil exitoso',
        })
      }).catch(err => {
        console.log(err)
      })
    },
    save_password(){
      
      axios
      .post('/api/users/password',{
        password : this.password, 
        password_confirmation : this.password_confirmation 
      })
      .then(res => {
        this.$toast.fire({
          icon: 'success',
          title: 'Cambio de contraseña exitoso',
        })
        console.log(res)
      }).catch(err =>{
        console.log(err)
      })
    }
  }
}
</script>