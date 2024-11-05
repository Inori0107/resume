<template>
  <nav
    class="bg-lightGray fixed text-black w-screen px-8 py-6 flex md:items-center md:px-16 md:py-8 z-50"
  >
    <!-- LOGO區域 -->
    <div class="flex items-center md:items-end">
      <div class="bg-blue-500 w-[24px] h-[24px] md:w-[32px] md:h-[32px]"></div>
      <div class="font-bold text-xl lg:text-2xl ml-4">CHUN-YAO TSAI</div>
      <span class="text-md lg:text-xl ml-4">FRONTEND DEVELOPER</span>
    </div>

    <!-- 大螢幕導覽列 -->
    <ul class="hidden md:flex gap-12 ml-auto">
      <li v-for="link in links" :key="link.text">
        <router-link :to="link.to" active-class="text-blue-500">{{ link.text }}</router-link>
      </li>
    </ul>

    <!-- 小螢幕漢堡選單 -->
    <div class="ml-auto md:hidden">
      <button @click="toggleMenu" class="text-black">
        <i class="pi pi-bars" style="font-size: 1.5rem"></i>
      </button>
    </div>

    <!-- 小螢幕選單內容 -->
    <div
      v-if="isMenuOpen"
      class="fixed inset-0 bg-opacity-90 flex flex-col items-center justify-center z-50"
      style="background: #40e0d0"
    >
      <button @click="toggleMenu" class="absolute top-5 right-8 text-white text-3xl">
        <i class="pi pi-times" style="font-size: 1.5rem"></i>
      </button>
      <ul class="space-y-6 text-center">
        <li v-for="link in links" :key="link.text">
          <router-link
            @click="toggleMenu"
            :to="link.to"
            class="text-white text-2xl hover:text-blue-500"
            >{{ link.text }}</router-link
          >
        </li>
      </ul>
    </div>
  </nav>
</template>

<script setup>
import { ref } from 'vue'

const links = [
  { text: 'ABOUT ME', to: '/' },
  { text: 'RESUME', to: '/resume' },
  { text: 'PROJECTS', to: '/projects' },
  { text: 'CONTACTS', to: '/contacts' }
]

// 控制漢堡選單的開關
const isMenuOpen = ref(false)

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
}
</script>
