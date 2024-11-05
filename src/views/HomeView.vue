<template>
  <!-- content -->
  <div>
    <!-- 小螢幕 -->
    <div class="h-[900px] relative md:hidden">
      <!-- info -->
      <div class="bg-lightGray h-[250px] w-screen">
        <div
          class="bg-turquoise h-[450px] w-3/4 z-10 absolute left-1/2 -translate-x-1/2 translate-y-[100px]"
        >
          <div class="h-full flex flex-col justify-around">
            <div class="h-3/4 text-center flex flex-col justify-between">
              <Image :src="headShot" alt="Image" width="200" class="flex justify-center" />
              <p class="text-xl lg:text-2xl font-bold text-black">蔡駿燿</p>
              <p class="text-xl lg:text-2xl font-bold text-black">JIMMY TSAI</p>
              <i class="pi pi-minus text-center text-blue-500"></i>
              <div class="flex justify-center space-x-4">
                <Button label="RESUME" severity="info" rounded class="w-32 lg:w-40" />
                <Button label="PROJECTS" severity="info" rounded class="w-32 lg:w-40" />
              </div>
            </div>
            <!-- links -->
            <div class="bg-lightGray h-12 flex justify-around items-center">
              <a
                v-for="logo in linkLogos"
                :key="logo.name"
                :href="logo.url"
                target="_blank"
                class="flex items-center justify-center"
              >
                <i :class="logo.icon" :style="{ color: logo.color, fontSize: logo.size }"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
      <!-- intro -->
      <div class="bg-darkBlue h-[650px] w-screen relative">
        <div class="w-3/4 h-2/5 mb-8 absolute left-1/2 bottom-0 -translate-x-1/2">
          <div class="flex flex-col text-white h-full justify-between">
            <p class="text-4xl lg:text-6xl font-extrabold">HELLO</p>
            <p class="text-xl lg:text-2xl font-bold">#熱愛學習 ＃自律自省 ＃突破框架</p>
            <p class="text-lg md:text-xl text-center">
              熱衷探索與創新，<br />
              期望成為獨當一面的前端工程師
            </p>
            <div class="text-xl md:text-2xl flex justify-between">
              <div v-for="skill in skills" :key="skill" class="font-bold">
                {{ skill }}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- 大螢幕 -->
    <div
      class="hidden md:block h-[1000px] relative bg-gradient-to-r from-darkBlue from-40% to-40% to-lightGray"
    >
      <div
        class="h-3/5 w-3/5 hidden md:flex bg-black absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 shadow-lg"
      >
        <div class="w-2/5">
          <div class="h-5/6 flex flex-col justify-center space-y-4" style="background: #40e0d0">
            <Image :src="headShot" alt="Image" width="200" class="flex justify-center" />
            <p class="text-center text-xl lg:text-2xl font-bold text-black">JIMMY TSAI</p>
            <i class="pi pi-minus text-center text-blue-500"></i>
            <p class="text-center text-lg lg:text-xl font-light text-black">FRONTEND DEVELOPER</p>
          </div>
          <div class="h-1/6 flex justify-around items-center" style="background: #f5f5f5">
            <a
              v-for="logo in linkLogos"
              :key="logo.name"
              :href="logo.url"
              target="_blank"
              rel="noopener noreferrer"
              class="flex items-center justify-center"
            >
              <i :class="logo.icon" :style="{ color: logo.color, fontSize: logo.size }"></i>
            </a>
          </div>
        </div>
        <div class="w-3/5 text-black flex justify-center items-center" style="background: #f5f5f5">
          <div class="h-3/4 space-y-8">
            <p class="text-4xl lg:text-6xl font-extrabold">HELLO</p>
            <p class="text-xl lg:text-2xl font-bold">#熱愛學習 ＃自律自省 ＃突破框架</p>
            <div class="flex justify-around">
              <Button label="RESUME" severity="info" rounded />
              <Button label="PROJECTS" severity="info" rounded />
            </div>
            <p class="text-lg md:text-xl text-center">
              熱衷探索與創新，<br />
              期望成為獨當一面的前端工程師
            </p>
            <div class="text-xl md:text-2xl flex justify-between">
              <div class="font-bold">HTML</div>
              <div class="font-bold">JavaScript</div>
              <div class="font-bold">Vue.js</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import headShot from '../assets/headshot.png'

const linkLogos = [
  {
    name: 'Instagram',
    icon: 'pi pi-instagram',
    url: 'https://www.instagram.com/yourprofile',
    color: '#4a90e2',
    size: '1.5rem'
  },
  {
    name: 'GitHub',
    icon: 'pi pi-github',
    url: 'https://github.com/yourprofile',
    color: '#4a90e2',
    size: '1.5rem'
  },
  {
    name: 'Discord',
    icon: 'pi pi-discord',
    url: 'https://discord.com/yourprofile',
    color: '#4a90e2',
    size: '1.5rem'
  }
]
const skills = ['HTML', 'JavaScript', 'Vue.js']
</script>
