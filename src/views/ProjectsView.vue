<template>
  <!-- content -->
  <div class="relative bg-turquoise pt-24 pb-8">
    <h1 class="text-black text-center text-2xl md:text-3xl font-bold py-4 md:py-8">PROJECTS</h1>

    <h2 class="text-black w-3/4 m-auto text-xl md:text-2xl font-bold py-4 md:py-8">Experience</h2>
    <!-- Section: LINE BOT -->
    <section class="contentBox w-3/4 relative">
      <div class="bg-blue-500 w-2 h-12 absolute top-2 left-0"></div>
      <div class="flex flex-col md:flex-row gap-8">
        <!-- 文字 -->
        <div class="md:w-2/3 space-y-4">
          <h2 class="text-lg md:text-2xl font-bold mx-4 pt-4 md:px-12">LINE BOT</h2>
          <p class="mx-4 md:p-4 md:text-lg">
            在 Node.js 環境開發一個實用的 LINE Bot，運用 Axios 抓取 opentix（兩廳院票務系統） 的
            API，提供用戶篩選想要的演出節目，並顯示近期的節目資訊。
          </p>
        </div>
        <!-- 圖片 -->
        <div class="flex justify-center md:justify-end md:w-1/3">
          <div class="shadow-md w-full md:max-w-[250px] md:max-h-[250px]">
            <img class="object-cover w-full h-full" src="../assets/line_bot.png" alt="line bot" />
          </div>
        </div>
      </div>
    </section>
    <div class="h-12"></div>

    <!-- Section: Vue 番茄鐘 -->
    <section class="contentBox w-3/4">
      <div class="bg-blue-500 w-2 h-12 absolute top-2 left-0"></div>
      <div class="flex flex-col md:flex-row gap-8">
        <!-- 文字 -->
        <div class="md:w-2/3 space-y-4">
          <h2 class="text-lg md:text-2xl font-bold mx-4 pt-4 md:px-12">Vue 番茄鐘</h2>
          <p class="mx-4 md:p-4 md:text-lg">
            使用Vuetify 製作 SPA（單頁面應用）網站，
            並透過簡單的元件與狀態管理，來制作一個直觀且方便的番茄鐘
          </p>
        </div>
        <!-- 圖片 -->
        <div class="flex justify-center md:justify-end md:w-1/3">
          <div class="shadow-md w-full md:max-w-[250px] md:max-h-[250px]">
            <img class="w-full h-full" src="../assets/tomato_clock.png" alt="tomato clock" />
          </div>
        </div>
      </div>
    </section>
    <div class="h-12"></div>

    <!-- Section: 形象網站 Redesign -->
    <section class="contentBox w-3/4">
      <div class="bg-blue-500 w-2 h-12 absolute top-2 left-0"></div>
      <div class="flex flex-col md:flex-row gap-8">
        <!-- 文字 -->
        <div class="md:w-2/3 space-y-4">
          <h2 class="text-lg md:text-2xl font-bold mx-4 pt-4 md:px-12">形象網站 Redesign</h2>
          <p class="mx-4 md:p-4 md:text-lg">
            首先，對比觀察原先網站的優劣處， 設定目標為打造成一個兼具視覺及實用的形象網站。
            整個開發過程中，從功能規劃、前端介面設計、
            資料庫結構設定、後台管理系統，到最終的上線測試，
            都是由我獨立完成，展現出我在專案開發上的完整能力與掌握力。
          </p>
        </div>
        <!-- 圖片 -->
        <div class="flex justify-center md:justify-end md:w-1/3">
          <div class="shadow-md w-full md:max-w-[250px] md:max-h-[250px]">
            <img
              class="object-cover w-full h-full"
              src="../assets/muller_redesign.png"
              alt="muller redesign"
            />
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup></script>

<style scoped>
.contentBox {
  color: black;
  margin: auto;
  background: #fff;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  position: relative;
}
@media (min-width: 768px) {
  .container {
    padding: 48px;
  }
}
</style>
