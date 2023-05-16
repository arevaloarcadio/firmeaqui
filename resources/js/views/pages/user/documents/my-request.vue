<template>
  <div>
    <CCard>
      <CCardBody>
        <CRow>
          <CCol sm="12">
            <div style="margin-left: 24px;margin-right: 24px;">
              <div class="card">
                <CCardHeader class="pb-0">
                  <h5>Mis Envios</h5>
                </CCardHeader>
                <table class="table table-responsive-sm table-striped table-align-middle">
                  <thead>
                    <tr>
                      <th class="text-center">Asunto</th>
                      <th class="text-center">Enviado a</th>
                      <th class="text-center">¿Está firmado?</th>
                      <th class="text-center">Fecha de envio</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="request in requests.data">
                      <td class="text-center">{{request.subject}}</td>
                      <td class="text-center">
                        <small>
                          <template v-for="(user,key) in request.request_users">
                            {{user.email}}
                            <template v-if="request.request_users.length != (key+1)">,<br></template>
                          </template>
                        </small>
                      </td>
                      <td class="text-center" v-html="getSigned(request.request_users)">
                      </td>
                      <td class="text-center">{{new Date(request.created_at).toLocaleDateString() +' '+ new Date(request.created_at).toLocaleTimeString()}}</td>
                      <td class="text-center">
                        <CButton 
                        v-if="request.request_users.find(user => user.is_signed == 1) !== undefined"
                        size="sm"
                        color="primary"
                        @click="getDocumentPath(request.signed_document_path)"
                        >
                          <span>Ver documento firmado</span>
                        </CButton> 
                      </td>
                    </tr>
                    <template v-if="requests['data']">
                      <tr v-if="requests.data.length == 0">
                        <td class="text-center" colspan="4">No has enviado ningún documento</td>
                      </tr>
                    </template>  
                  </tbody>
                </table>
                <nav aria-label="page navigation example">
                  <ul class="pagination justify-content-center">
                    <li  :class="{'page-item' : true , 'disabled' : !requests.prev_page_url }">
                      <a class="page-link" @click="page(requests.prev_page_url)" tabindex="-1">Anterior</a>
                    </li>
                    <li class="page-item"><a class="page-link">{{requests.current_page}}</a></li>
                    <li :class="{'page-item' : true , 'disabled' : !requests.next_page_url }">
                      <a class="page-link" @click="page(requests.next_page_url)">Siguiente</a>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          </CCol>
        </CRow>
      </CCardBody>
    </CCard>
  </div>
</template>

<script>
import axios from 'axios'
import { mapGetters } from 'vuex'
import Pusher from 'pusher-js'

export default {
  name: 'Dashboard',
  data () {
    return {
      selected: 'Month',
      requests : [],
      tableFields: [
        { key: 'subject', label: '', _classes: 'text-center' },
        { key: 'user', label: 'Compañia' },
        { key: 'created_at', label: 'Estado', _classes: 'text-center' },
        //{ key: 'usage', label: 'Progresión' },
        //{ key: 'payment', label: 'Payment method', _classes: 'text-center' },
        //{ key: 'activity', label: 'Actualizado' },
      ]
    }
  },
  mounted(){
    this.getRequests()
    
    Pusher.logToConsole = true;

    var pusher = new Pusher('373665a92c46b54dfc70', {
      cluster: 'eu'
    });
    var self  = this 
    var channel = pusher.subscribe('channel-'+this.getUser.email);
    channel.bind('requests', function(data) {
      console.log(data)
      self.$toast.fire({
        icon: 'success',
        title: data.message,
      })
      self.getRequests()
    });
  },
  computed: {
    ...mapGetters([
      'getUser'
    ]),
  },
  methods: {
    getDocumentPath(path){
      window.open(axios.defaults.baseURL+'/'+path, "_blank"); 
    },
    getRequests(){
      axios
      .get('/api/requests/by-user-creator')
      .then(res =>{
        this.requests = res.data.data
        console.log(res)
      }).catch(err =>{
        console.log(err)
      })
    },
    getSigned(users){
      var i = 0;
      users.forEach(user => {
        if (user.is_signed) {
          i++
        }
      })
      return 'Firmado '+i+' de '+ users.length +' usuarios' 
    }
  }
}
</script>
