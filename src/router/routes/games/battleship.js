export default [
  {
    path: '/games/battleship',
    component: () => import('../../../views/Games.vue'),
    meta: {
      auth: true,
    },
  },
];