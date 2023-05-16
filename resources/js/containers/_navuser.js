export default [
  {
    _name: 'CSidebarNav',
    _children: [
    /*
      {
        _name: 'CSidebarNavItem',
        name: 'Dashboard',
        to: '/dashboard',
        icon: 'cil-speedometer',
        badge: {
          color: 'primary',
          text: 'NEW'
        }
      },*/
      {
        _name: 'CSidebarNavItem',
        name: 'Escritorio',
        to: '/panel',
        icon: 'cil-pencil',
      },
      {
        _name: 'CSidebarNavItem',
        name: 'Tareas',
        to: '/tasks',
        icon: 'cil-calendar',
      },
      {
        _name: 'CSidebarNavItem',
        name: 'Mi Oficina',
        to: '/offices',
        icon: 'cil-puzzle',
      },
      {
        _name: 'CSidebarNavDropdown',
        name: 'Administración',
        route: '/pages',
        icon: 'cil-list',
      },
      /*
      {
        _name: 'CSidebarNavItem',
        name: 'Download CoreUI',
        href: 'http://coreui.io/vue/',
        icon: { name: 'cil-cloud-download', class: 'text-white' },
        _class: 'bg-success text-white',
        target: '_blank'
      },
      {
        _name: 'CSidebarNavItem',
        name: 'Try CoreUI PRO',
        href: 'http://coreui.io/pro/vue/',
        icon: { name: 'cil-layers', class: 'text-white' },
        _class: 'bg-danger text-white',
        target: '_blank'
      }
      */
    ]
  }
]