<template>
  <div>
    <CCard>
      <CCardBody>
        <CRow>
          <CCol sm="12">
            <div style="margin-left: 24px;margin-right: 24px;">
              <div class="card">
                <CCardHeader class="pb-0">
                  <h5>Recibidos</h5>
                </CCardHeader>
                <table class="table table-responsive-sm table-striped table-align-middle">
                  <thead>
                    <tr>
                      <th class="text-center">Enviado por</th>
                      <th class="text-center">Asunto</th>
                      <th class="text-center">¿Esta firmado?</th>
                      <th class="text-center">Recibido el </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="receipt in receipts.data" :key="receipt">
                      <td class="text-center">{{receipt.user_creator.name}}</td>
                      <td class="text-center">{{receipt.subject}}</td>
                      <td class="text-center">{{receipt.users.find(user => user.id == getUser.id && user.pivot.is_signed == 1) !== undefined ? 'Si' : 'No' }} </td>
                      <td class="text-center">{{new Date(receipt.created_at).toLocaleDateString() +' '+ new Date(receipt.created_at).toLocaleTimeString()}}</td>
                      <td class="text-center">
                        <CButton 
                        v-if="receipt.users.find(user => user.id == getUser.id && user.pivot.is_signed == 1) === undefined"
                        size="sm"
                        color="primary"
                        @click="$router.push({ name : 'Firmar' , params :{ uuid : receipt.uuid , email : getUser.email }})"
                        >
                          <span>Firmar</span>
                        </CButton>
                        <CButton 
                        v-else
                        size="sm"
                        color="primary"
                        @click="getDocumentPath(receipt.signed_document_path)"
                        >
                          <span>Ver documento firmado</span>
                        </CButton> 
                      </td>
                    </tr>
                    <template v-if="receipts['data']">
                      <tr v-if="receipts.data.length == 0"><td class="text-center" colspan="4">No has recibido ningún documento</td></tr>
                    </template>
                  </tbody>
                </table>
                <nav aria-label="page navigation example">
                  <ul class="pagination justify-content-center">
                    <li  :class="{'page-item' : true , 'disabled' : !receipts.prev_page_url }">
                      <a class="page-link" @click="page(receipts.prev_page_url)" tabindex="-1">Anterior</a>
                    </li>
                    <li class="page-item"><a class="page-link">{{receipts.current_page}}</a></li>
                    <li :class="{'page-item' : true , 'disabled' : !receipts.next_page_url }">
                      <a class="page-link" @click="page(receipts.next_page_url)">Siguiente</a>
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
      tableItems: [
        {
          avatar: { url: 'img/avatars/1.jpg', status: 'success' },
          user: { name: 'Yiorgos Avraamu', new: true, registered: 'Jan 1, 2015' },
          country: { name: 'USA', flag: 'cif-us' },
          usage: { value: 50, period: 'Jun 11, 2015 - Jul 10, 2015' },
          payment: { name: 'Mastercard', icon: 'cib-cc-mastercard' },
          activity: '10 sec ago'
        },
        {
          avatar: { url: 'img/avatars/2.jpg', status: 'danger' },
          user: { name: 'Avram Tarasios', new: false, registered: 'Jan 1, 2015' },
          country: { name: 'Brazil', flag: 'cif-br' },
          usage: { value: 22, period: 'Jun 11, 2015 - Jul 10, 2015' },
          payment: { name: 'Visa', icon: 'cib-cc-visa' },
          activity: '5 minutes ago'
        },
        {
          avatar: { url: 'img/avatars/3.jpg', status: 'warning' },
          user: { name: 'Quintin Ed', new: true, registered: 'Jan 1, 2015' },
          country: { name: 'India', flag: 'cif-in' },
          usage: { value: 74, period: 'Jun 11, 2015 - Jul 10, 2015' },
          payment: { name: 'Stripe', icon: 'cib-stripe' },
          activity: '1 hour ago'
        },
        {
          avatar: { url: 'img/avatars/4.jpg', status: '' },
          user: { name: 'Enéas Kwadwo', new: true, registered: 'Jan 1, 2015' },
          country: { name: 'France', flag: 'cif-fr' },
          usage: { value: 98, period: 'Jun 11, 2015 - Jul 10, 2015' },
          payment: { name: 'PayPal', icon: 'cib-paypal' },
          activity: 'Last month'
        },
        {
          avatar: { url: 'img/avatars/5.jpg', status: 'success' },
          user: { name: 'Agapetus Tadeáš', new: true, registered: 'Jan 1, 2015' },
          country: { name: 'Spain', flag: 'cif-es' },
          usage: { value: 22, period: 'Jun 11, 2015 - Jul 10, 2015' },
          payment: { name: 'Google Wallet', icon: 'cib-google-pay' },
          activity: 'Last week'
        },
        {
          avatar: { url: 'img/avatars/6.jpg', status: 'danger' },
          user: { name: 'Friderik Dávid', new: true, registered: 'Jan 1, 2015' },
          country: { name: 'Poland', flag: 'cif-pl' },
          usage: { value: 43, period: 'Jun 11, 2015 - Jul 10, 2015' },
          payment: { name: 'Amex', icon: 'cib-cc-amex' },
          activity: 'Last week'
        }
      ],
      receipts : [],
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
    channel.bind('receipts', function(data) {
      console.log(data)
      self.getRequests()
    });
  },
  computed: {
    ...mapGetters([
      'getUser'
    ]),
  },
  methods: {
    getDocumentPath(users){
      var user = users.find(user => user.id == this.getUser.id)
      window.open(axios.defaults.baseURL+'/'+user.pivot.signed_document_path, "_blank");
    },
    getRequests(){
      axios
      .get('/api/requests/by-user')
      .then(res =>{
        this.receipts = res.data.data
        console.log(res)
      }).catch(err =>{
        console.log(err)
      })
    },
    getDocumentPath(path){
      window.open(axios.defaults.baseURL+'/'+path, "_blank"); 
    },
  }
}
</script>
