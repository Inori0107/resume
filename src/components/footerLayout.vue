<template>
  <div class="h-[250px] md:h-[150px] bg-lightGray">
    <div class="w-3/4 h-full m-auto py-4 text-gray-600 md:flex md:items-center md:space-x-4">
      <!-- contact -->
      <div
        v-for="(value, key) in contact"
        :key="key"
        class="w-1/2 md:w-1/3 float-left md:text-center mb-4"
      >
        <p class="text-lg md:text-xl font-bold capitalize">{{ key }}</p>
        <p v-if="key !== 'follow'" class="text-sm md:text-lg">{{ value }}</p>
        <div v-else class="flex justify-start md:justify-center space-x-4">
          <a v-for="item in value" :key="item.name" :href="item.url" target="_blank">
            <i :class="item.icon + ' text-sm md:text-lg'"></i>
          </a>
        </div>
      </div>
      <!-- clear float -->
      <div class="clear-both"></div>

      <!-- copyright -->
      <div class="w-2/3 mb-4 float-left text-lg md:text-xl md:order-first">
        <p>&copy; 2024 by Jimmy Tsai</p>
        <p>Design inspired by Wix.</p>
      </div>
    </div>
  </div>
</template>

<script setup>
const contact = {
  call: '0958-255-908',
  email: 'inorilin0107@gmail.com',
  follow: [
    { name: 'Facebook', icon: 'pi pi-facebook', url: 'https://www.facebook.com' },
    { name: 'Twitter', icon: 'pi pi-twitter', url: 'https://www.twitter.com' },
    { name: 'Instagram', icon: 'pi pi-instagram', url: 'https://www.instagram.com' }
  ]
}
</script>
