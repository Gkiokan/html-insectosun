
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      // { path: '', redirect: 'home', component: () => import('pages/IndexPage.vue') },
      { path: '', name: 'home', component: () => import('pages/Home.vue') },
      { path: 'Impressum', name: 'imprint', component: () => import('pages/Imprint.vue') },
      { path: 'Sonnenschutz', name: 'sun', component: () => import('pages/Sun.vue') },
      { path: 'Kontakt', name: 'contact', component: () => import('pages/Contact.vue') },
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  }
]

export default routes
