import { createRouter, createWebHistory } from 'vue-router';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('@/views/HomePage.vue') // Lazy-loading
  },
  {
    path: '/Sobre',
    name: 'QuemSomos',
    component: () => import('@/views/QuemSomosPage.vue') // Lazy-loading
  },
  {
    path: '/Doacao',
    name: 'DoacaoPage',
    component: () => import('@/views/DoacaoPage.vue') // Lazy-loading
  },
  {
    path: '/Projetos',
    name: 'ProjetoPage',
    component: () => import('@/views/ProjetoPage.vue') // Lazy-loading
  },
  {
    path: '/Voluntario',
    name: 'VoluntarioPage',
    component: () => import('@/views/VoluntarioPage.vue') // Lazy-loading
  },
  {
    path: '/QuemSomos',
    name: 'QuemSomosPage',
    component: () => import('@/views/QuemSomosPage.vue') // Lazy-loading
  },
  {
    path: '/Parceiro',
    name: 'ParceiroPage',
    component: () => import('@/views/ParceiroPage.vue') // Lazy-loading
  },
  {
    path: '/Contato',
    name: 'ContatoPage',
    component: () => import('@/views/ContatoPage.vue') // Lazy-loading
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    component: () => import('@/views/NotFoundPage.vue') // Página 404
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
