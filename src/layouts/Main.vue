<template>
  <div>
    <slot></slot>
    <nav class="fixed bottom-0 w-full flex justify-around bg-teal-600 text-white text-bold">
      <a href="/games" class="py-4 px-6">
        <font-awesome-icon icon="fa-solid fa-gamepad" />
      </a>
      <a href="/under-development" disabled class="py-4 px-6 opacity-75">
        <font-awesome-icon icon="fa-solid fa-trophy" />
      </a>
      <a href="/under-development" class="py-4 px-6 opacity-75">
        <font-awesome-icon icon="fa-solid fa-clock-rotate-left" />
      </a>
      <a href="/sign-in" class="py-4 px-6">
        <font-awesome-icon icon="fa-solid fa-user" />
      </a>
    </nav>
  </div>
</template>