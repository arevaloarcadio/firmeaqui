<template>
  <CHeader fixed with-subheader light>
    <CToggler
      in-header
      class="ml-3 d-lg-none"
      v-c-emit-root-event:toggle-sidebar-mobile
    />
    <CToggler
      in-header
      class="ml-3 d-md-down-none"
      v-c-emit-root-event:toggle-sidebar
    />
    
    <!--<CHeaderNav class="d-md-down-none mr-auto">
      <CHeaderNavItem class="px-3">
        <CHeaderNavLink to="/panel">
          Escritorio
        </CHeaderNavLink>
      </CHeaderNavItem>
      <CHeaderNavItem class="px-3">
        <CHeaderNavLink to="/users" exact>
          Usuarios
        </CHeaderNavLink>
      </CHeaderNavItem>
      <CHeaderNavItem class="px-3 text-success" style="width: 700px;">
        <marquee><strong><font color="blue">{{ msg }}</font></strong>
        </marquee>
      </CHeaderNavItem>
    </CHeaderNav>-->
    <CHeaderNav class="mr-16 ms-auto" style="margin-left: auto;">
      <CHeaderNavItem class="d-md-down-none mx-2">
       <!--<CDropdown inNav class="c-header-nav-items" placement="bottom-end" add-menu-classes="pt-0">
          <template #toggler>
            <CHeaderNavLink>
            <CIcon name="cil-bell"/>
            <CBadge color="danger" class="ml-auto">{{total}}</CBadge>
            </CHeaderNavLink>
          </template>
          <template v-for="(notification,key) in notifications">
            <CDropdownDivider v-if="key!=0"></CDropdownDivider>
            <CDropdownItem >
              <CIcon name="cil-task" />
                <router-link class="a_href"
                  :to="'/'+notification.link"
                  >{{notification.data}}
                </router-link>
             
            </CDropdownItem>
          </template>
        </CDropdown>-->
      </CHeaderNavItem>
      <TheHeaderDropdownAccnt/>
    </CHeaderNav>
    <CSubheader class=" px-3">
      <CBreadcrumbRouter class="border-0 py-1"/>
    </CSubheader>
  </CHeader>
</template>

<script>
import TheHeaderDropdownAccnt from './TheHeaderDropdownAccnt'

export default {
  name: 'TheHeader',
  components: {
    TheHeaderDropdownAccnt
  },
  data () {
    return {
      notifications :[],
      total : 0,
    }
  },
  mounted(){
  },
  props:['msg'],
   methods:{
 
   }
}
</script>

<style type="text/css">
  .a_href{
    color: inherit;
    text-decoration: none;
  }
</style>
