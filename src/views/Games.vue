<template>
  <h1 class="font-bold text-5xl mb-4">Games</h1>
  <div class="flex flex-col">
    <router-link
      v-for="i in new Array(5)"
      :key="i"
      to="/games/battleship"
      class="bg-white pt-2 pb-20 px-2 border-2 border-black rounded-md shadow-brutal mb-4"
    >
      Battleship
    </router-link>
  </div>
</template>