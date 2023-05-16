<template>
  <CSidebar 
    fixed 
    :minimize="minimize"
    :show.sync="show"
  >
    <CSidebarBrand 
      />
      <!--:imgFull="{ width: 170, height: 46, alt: 'Logo', src: '/storage/logo-nuevo.png'}"
      :imgMinimized="{ width: 170, height: 46, alt: 'Logo', src: '/storage/logo-nuevo.png'}"
      :wrappedInLink="{ href: 'http://grupo.test.com/', target: '_blank'}"
    -->
    <CRenderFunction flat :content-to-render="navItems"/>
    <CSidebarMinimizer
      class="d-md-down-none"
      @click.native="minimize = !minimize"
    />
  </CSidebar>
</template>

<script>
import nav from './_nav'
import axios from 'axios'
import { freeSet } from '@coreui/icons'

export default {
  name: 'TheSidebar',
  props: ['me'],
  data () {
    return {
      minimize: false,
      nav,
      show: 'responsive',
    }
  },
  mounted () {
    this.$root.$on('toggle-sidebar', () => {
      const sidebarOpened = this.show === true || this.show === 'responsive'
      this.show = sidebarOpened ? false : 'responsive'
    })
    this.$root.$on('toggle-sidebar-mobile', () => {
      const sidebarClosed = this.show === 'responsive' || this.show === false
      this.show = sidebarClosed ? true : 'responsive'
    })
  },
  computed: {
    navItems () {
      return [
        {
          _name: 'CSidebarNav',
          _children: this.sidebarNavChildren
        }
      ]
    },
    sidebarNavChildren () {
      console.log(nav)
      return nav.map((menuItem) => {
        if(menuItem.admin && this.me.is_admin){
          return {
            _name: menuItem._name,
            name: menuItem.name,
            to: menuItem.to ? menuItem.to : undefined,
            href : menuItem.href ? menuItem.href : undefined,
            icon: menuItem.icon || 'cil-spreadsheet',
            _class: menuItem._class ? menuItem._class : 'bg-dark text-white',
            target: menuItem.target || undefined
            
          }
        }else if( menuItem.admin){
          return false
        }else{
          return {
            _name: menuItem._name,
            name: menuItem.name,
            to: menuItem.to ? menuItem.to : undefined,
            href : menuItem.href ? menuItem.href : undefined,
            icon: menuItem.icon || 'cil-spreadsheet',
            _class: menuItem._class,
            target: menuItem.target || undefined,
            badge: menuItem.name == "Tareas" && this.tasks > 0 ? {
              color: 'danger',
              text: this.tasks
            } : undefined
          }
        }
      })
    }
  }
}
</script>
