
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Home.vue') }
    ]
  },

  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: 'home', component: () => import('pages/Home.vue') }
    ]
  },


  {
    path: '/profile',
    component: () => import('layouts/Profile.vue'),
    children: [
      { path: 'allemp', component: () => import('pages/AllEmp.vue') }
    ]
  },

  {
    path: '/profile',
    component: () => import('layouts/Profile.vue'),
    children: [
      { path: 'newemp', component: () => import('pages/NewEmp.vue') }
    ]
  },

  {
    path: '/profile',
    component: () => import('layouts/Profile.vue'),
    children: [
      { path: 'addemp', component: () => import('pages/AddEmp.vue') }
    ]
  }
]

// Always leave this as last one
if (process.env.MODE !== 'ssr') {
  routes.push({
    path: '*',
    component: () => import('pages/Error404.vue')
  })
}

export default routes
