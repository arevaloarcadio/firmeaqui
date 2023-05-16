<template>
  <div>
    <CRow v-if="loaded">
      <CCol sm="12" md="12">
          <template v-for="link in links">
            <div class="float-left p-2">
              <a :href="link.url" target="_blank">
                <div style="overflow:hidden; height:120px; width:120px; border-radius:50%; background-color: white;">
                  <img class="img-fluid" :src="link.image" alt='Agent picture' style="position: relative;top: 50%;transform: translateY(-50%);" />
                </div>
              </a>
            </div>
          </template>
      </CCol>
    </CRow>
    <CRow class="py-4">
      <CCol sm="12">
        <h3>Herramientas</h3>
      </CCol>
      <CCol sm="12" md="4">
        <CCard>
          <CCardHeader>
            <b>Consultar Matrícula</b>
          </CCardHeader>
          <CCardBody>
            <div class="input-group mb-2 mr-sm-2" >
              <div class="input-group-prepend">
                <div class="input-group-text">Matrícula</div>
              </div>
              <input type="text" class="form-control" name="matricula" v-model="matricula" placeholder="Introduzca la matrícula">

              <div class="input-group-append">
                <button class="btn btn-primary" type="button" @click="sendMatricula">Consultar</button>
              </div>
            </div>
            <ul v-if="vehicles" class="list-group">
              <li v-for="vehicle in vehicles"  class="list-group-item list-group-item-primary">{{ vehicle.labels['full-label'].es }}</li>
            </ul>
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>

  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'Insurances',
  data () {
    return {
      matricula: "",
      vehicles: null,
      users: [],
      links: [],
      loaded : false,
    }
  },
  created(){
    this.getLinks();
  },
  mounted(){
    
  },
  methods:{
    getLinks(){
      axios({url: 'links',  method: 'GET' })
        .then(resp => {
          const t = this
          t.links = resp.data.links
          t.loaded = true
          //resolve(resp)
          resolve(resp)
        })
        .catch(err => {
          //commit('auth_error', err)
          //reject(err)
        });
    },
    sendMatricula(){
      axios({url: 'https://www.oscaro.es/xhr/dionysos-search/es/es?plate='+this.matricula,  method: 'GET'})
        .then(resp => {
          const t = this
          t.vehicles = resp.data.vehicles
          //resolve(resp)
          resolve(resp)
        })
        .catch(err => {
          //commit('auth_error', err)
          //reject(err)
        });
    },
  }
}
</script>
<style src="vue-multiselect/dist/vue-multiselect.min.css"></style>
