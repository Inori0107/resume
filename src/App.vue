<template>
  <!-- navbar -->
  <HeaderLayout />

  <router-view v-slot="{ Component }">
    <transition>
      <component :is="Component" :key="$route.fullPath" />
    </transition>
  </router-view>

  <!-- footer -->
  <FooterLayout />
</template>

<style scoped>
.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>
