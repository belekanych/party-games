<template>
  <div>
    <div class="p-6">
      <slot></slot>
    </div>
    <nav class="fixed bottom-0 w-full flex justify-around bg-black text-white text-bold">
      <router-link to="/" class="py-4 px-6">
        <font-awesome-icon icon="fa-solid fa-gamepad" />
      </router-link>
      <router-link to="/under-development" disabled class="py-4 px-6 opacity-75">
        <font-awesome-icon icon="fa-solid fa-trophy" />
      </router-link>
      <router-link to="/under-development" class="py-4 px-6 opacity-75">
        <font-awesome-icon icon="fa-solid fa-clock-rotate-left" />
      </router-link>
      <router-link to="/profile" class="py-4 px-6">
        <font-awesome-icon icon="fa-solid fa-user" />
      </router-link>
    </nav>
  </div>
</template>