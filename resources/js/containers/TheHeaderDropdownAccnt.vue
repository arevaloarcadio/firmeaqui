<template>
  <CDropdown
    inNav
    class="c-header-nav-items"
    placement="bottom-end"
    add-menu-classes="pt-0"
  >
    <template #toggler>
      <CHeaderNavLink>
        <div class="c-avatar">
          <img
            :src="axios.defaults.baseURL+'/'+getUser.photo"
            class="c-avatar-img"
          />
        </div>
      </CHeaderNavLink>
    </template>
    <CDropdownHeader tag="div" class="text-center" color="light">
      <strong>Cuenta</strong>
      <br>
      {{getUser.email}}
    </CDropdownHeader>
    <!--
    <CDropdownItem>
      <CIcon name="cil-envelope-open" /> Mensajes
      <CBadge color="success" class="ml-auto">{{ itemsCount }}</CBadge>
    </CDropdownItem>
    <CDropdownItem>
      <CIcon name="cil-task" /> Tareas
      <CBadge color="danger" class="ml-auto">{{ tasks }}</CBadge>
    </CDropdownItem>
    <CDropdownHeader
      tag="div"
      class="text-center"
      color="light"
    >
      <strong>Administración</strong>
    </CDropdownHeader>
    <CDropdownItem>
      <CIcon name="cil-user" /> Perfil
    </CDropdownItem>
    <CDropdownItem>
      <CIcon name="cil-settings" /> Configuración
    </CDropdownItem>
    <CDropdownItem>
      <CIcon name="cil-file" /> Oficinas
      <CBadge color="primary" class="ml-auto">{{ itemsCount }}</CBadge>
    </CDropdownItem>
    <CDropdownDivider/>
    !-->
    <CDropdownItem @click="$router.push('/profile')">
      <CIcon name="cil-user"/><span  >Mi perfil</span>
    </CDropdownItem>
    <CDropdownItem>
      <CIcon name="cil-lock-locked"/><span  @click="logout">Cerrar Sesión</span>
    </CDropdownItem>
  </CDropdown>
</template>

<script>
import axios from 'axios'
import { mapGetters } from 'vuex'

export default {
  name: 'TheHeaderDropdownAccnt',
  data () {
    return { 
      axios,
      itemsCount: 42,
      tasks: 0,
    }
  },
  created(){
  },
  methods:{
    logout(){
      
      this.$store.dispatch('unsetAuthUser')
      .then(() => {
        this.$router.push({path: '/pages/login'});
      }).finally(()=> {
        this.$router.push({path: '/pages/login'});
      });

     /* axios({url: 'logout',  method: 'POST' })
        .then(resp => {
          const t = this
          t.$router.push({path: '/pages/login'});
          //resolve(resp)
          resolve(resp)
        })
        .catch(err => {
          //commit('auth_error', err)
          //reject(err)
        });*/
    },
  },
  computed: {
    ...mapGetters([
        'getUser'
    ]),
  }
}
</script>

<style scoped>
  .c-icon {
    margin-right: 0.3rem;
  }
</style>