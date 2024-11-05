<template>
  <!-- navbar -->
  <HeaderLayout />

  <router-view v-slot="{ Component, route }">
    <transition name="fade">
      <component :is="Component" :key="route.path" />
    </transition>
  </router-view>

  <!-- footer -->
  <FooterLayout />
</template>

<style scoped>
.fade-enter-active {
  animation: fadeIn 1s forwards;
}
.fade-leave-active {
  animation: fadeIn 1s reverse forwards;
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
</style>
