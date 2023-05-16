import Vue from 'vue'
import Router from 'vue-router'

// Containers
const TheContainer = () => import('@/containers/TheContainer')
const TheContainerNoSidebar = () => import('@/containers/TheContainerNoSidebar')

// Views
const Dashboard = () => import('@/views/Dashboard')
// Views - Pages
const Page404 = () => import('@/views/pages/Page404')
const Panel = () => import('@/views/pages/Panel')
const Page500 = () => import('@/views/pages/Page500')
const Login = () => import('@/views/pages/Login')
const Register = () => import('@/views/pages/Register')


const NewRequests = () => import('@/views/pages/user/documents/new-request')
const Receipts = () => import('@/views/pages/user/documents/receipts')
const Requests = () => import('@/views/pages/user/documents/my-request')
const Sign = () => import('@/views/pages/user/documents/sign')
const SignSuccessful = () => import('@/views/pages/user/documents/sign-successful')

const Profile = () => import('@/views/pages/user/profile')

Vue.use(Router)

export default new Router({
  mode: 'hash', // https://router.vuejs.org/api/#mode
  linkActiveClass: 'active',
  scrollBehavior: () => ({ y: 0 }),
  routes: configRoutes()
})

function configRoutes () {
  return [
    {
      path: '/',
      redirect: 'receipts',
      name: 'Home',
      component: TheContainer,
      children: [
        {
          path: 'dashboard',
          name: 'Dashboard',
          component: Dashboard
        },
        {
          path: 'requests',
          name: 'Envios',
          component: NewRequests
        },
        {
          path: 'receipts',
          name: 'Recibidos',
          component: Receipts
        },
        {
          path: 'my-requests',
          name: 'Mis Envios',
          component: Requests
        },
        /*{
          path: 'sign/:uuid/:email',
          name: 'Firmar',
          component: Sign
        },*/
        {
          path: 'received',
          name: 'Recibidos',
          component: Panel
        },
        {
          path: 'profile',
          name: 'Perfil',
          component: Profile
        },
      ],
    },
    {
      path: '/sign',
      //redirect: 'receipts',
      name: 'Firmar',
      component: TheContainerNoSidebar,
      children: [
        {
          path: ':uuid/:email/successful',
          name: 'Firmado Exitoso',
          component: SignSuccessful
        },
        {
          path: ':uuid/:email',
          name: 'Firmar',
          component: Sign
        }
      ],
    },
    {
      path: '/pages',
      redirect: '/pages/404',
      name: 'Pages',
      component: {
        render (c) { return c('router-view') }
      },
      children: [
        {
          path: '404',
          name: 'Page404',
          component: Page404
        },
        {
          path: '500',
          name: 'Page500',
          component: Page500
        },
        {
          path: 'login',
          name: 'Login',
          component: Login
        },
        {
          path: 'register',
          name: 'Register',
          component: Register
        }
      ]
    }
  ]
}

