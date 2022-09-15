
const routes = [
  {
    path: '/',
    component: () => import('layouts/MyLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Login.vue') },
      { path: '/index', component: () => import('pages/Index.vue') },
      { path: '/menu', component: () => import('pages/Menu.vue') },
      { path: '/menu-product', component: () => import('pages/MenuProduct.vue') }
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
