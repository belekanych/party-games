export default [
  { path: '/', component: () => import('../../views/Home.vue') },
  { path: '/register', component: () => import('../../views/Register.vue') },
  { path: '/sign-in', component: () => import('../../views/SignIn.vue') },
  {
    path: '/feed',
    component: () => import('../../views/Feed.vue'),
    meta: {
       requiresAuth: true,
    },
  },
];