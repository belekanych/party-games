import games from './games';

export default [
  {
    path: '/',
    component: () => import('../../views/Games.vue'),
  },
  {
    path: '/register',
    component: () => import('../../views/Register.vue'),
    meta: {
      guest: true,
    },
  },
  {
    path: '/sign-in',
    component: () => import('../../views/SignIn.vue'),
    meta: {
      guest: true,
    },
  },
  { path: '/under-development', component: () => import('../../views/UnderDevelopment.vue') },
  {
    path: '/profile',
    component: () => import('../../views/Profile.vue'),
    meta: {
      auth: true,
    },
  },
  ...games,
];