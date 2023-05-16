<template>
  <div>
    <CRow class="py-4">
      <CCol sm="12" md="12">
        <Documents></Documents>
      </CCol>
    </CRow>

  </div>
</template>

<script>
import axios from 'axios'
import Documents from './documents'

export default {
  name: 'DocInx',
  components: { Documents },
  data () {
    return {
      category: 0,
      loaded : false,
    }
  },
  created(){
    
  },
  methods:{
    categoryChange($id){
      this.category = $id
    }
  }
}
</script>