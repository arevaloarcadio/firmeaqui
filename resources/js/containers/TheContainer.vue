<template>
  <div class="c-app">
    <TheSidebar :me="getUser" v-if="getUser" />
    <div class="c-wrapper">
      <TheHeader :msg="messages"/>
      <div class="c-body">
        <main class="c-main">
          <CContainer fluid>
            <transition name="fade">
              <router-view></router-view>
            </transition>
          </CContainer>
        </main>
      </div>
      <TheFooter/>
    </div>
  </div>
</template>

<script>
import TheSidebar from './TheSidebar'
import TheHeader from './TheHeader'
import TheFooter from './TheFooter'
import axios from 'axios'
import { mapGetters } from 'vuex'

export default {
  name: 'TheContainer',
  components: {
    TheSidebar,
    TheHeader,
    TheFooter
  },
  data(){
    return{
      notificationModal: false,
      alarmModal: false,
      notifications: [],
      events: [],
      messages: "",
      read: [],
      tasks: null,
    }
  },
  created(){
   
  },
  mounted(){
 
  },
  methods:{
   
  },
  computed: {
    ...mapGetters([
      'getUser'
    ]),
  }
}
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
