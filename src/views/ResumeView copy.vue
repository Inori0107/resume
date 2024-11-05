<template>
  <!-- content -->
  <div class="relative bg-turquoise pt-24 pb-8">
    <!-- title -->
    <h1 class="text-black text-center text-2xl md:text-3xl font-bold py-4 md:py-8">RESUME</h1>

    <!-- Experience -->
    <h2 class="text-black w-3/4 m-auto text-xl md:text-2xl font-bold py-4 md:py-8">Experience</h2>
    <!-- Section: 我為什麼開始研究程式？ -->
    <section class="contentBox w-3/4">
      <h2 class="text-lg md:text-xl font-bold mb-4">我為什麼開始研究程式？</h2>
      <p>
        我一直對世界充滿好奇，渴望從不同角度去探索與理解問題，原先的社工背景使我學會以多元視角看待每一個議題，
        培養了我接納並尊重各種想法的能力。在與程式設計邂逅後，我被其將邏輯與創新結合的特質深深吸引，
        因此決心轉換跑道，並帶入解決問題的熱情與獨特視角，希望能創造出更貼近人性的科技解決方案。
      </p>
    </section>
    <div class="h-12"></div>

    <!-- Section: 增進軟實力的方法？ -->
    <section class="contentBox w-3/4">
      <h2 class="text-lg md:text-xl font-bold mb-4">增進軟實力的方法？</h2>
      <p>
        參與合唱團的經驗豐富了我的生活。與團員一起演唱的過程中，我學會了如何與不同性格的人溝通協作，
        在追求共同目標時，努力習得新技能來彌補差異。這份經驗讓我深刻理解，無論是在舞台上還是面對工作挑戰，
        團結與成長才是達成目標的關鍵。
      </p>
    </section>
    <div class="h-12"></div>

    <!-- Section: 職訓局引導了什麼？ -->
    <section class="contentBox w-3/4">
      <h2 class="text-lg md:text-xl font-bold mb-4">職訓局引導了什麼？</h2>
      <ul class="list-decimal pl-5 space-y-3">
        <li>
          <strong>LINE Bot：</strong> 在 Node.js 環境開發的 LINE Bot，利用 Axios 抓取 opentix
          API，篩選和顯示演出資訊。
        </li>
        <li>
          <strong>商城後臺管理系統：</strong> 使用 Vuetify 開發 SPA
          商城，包含商品一覽、購物車及會員登入功能， 並結合 MongoDB
          儲存商品資訊，用於商品上架與更新。
        </li>
        <li>
          <strong>形象網站 Redesign：</strong> 對現有網站進行
          Redesign，完成了從功能規劃、前端設計、資料庫設定、 到上線測試的整體開發過程。
        </li>
      </ul>
    </section>

    <!-- Section: Professional skills -->
    <h2 class="text-black w-3/4 m-auto text-xl md:text-2xl font-bold py-8 md:py-12">
      Professional skills
    </h2>
    <section class="flex flex-col lg:flex-row w-3/4 m-auto gap-8 items-start">
      <!-- 前端技術 -->
      <div class="contentBox w-full lg:w-[300px] min-h-[350px]">
        <h2 class="text-lg md:text-xl font-bold mb-4 text-center">前端技術</h2>
        <div class="flex justify-center space-x-4">
          <ul class="list-disc pl-5 space-y-3">
            <li>HTML</li>
            <li>JavaScript</li>
            <li>jQuery</li>
            <li>Vue.js</li>
          </ul>
          <ul class="list-disc pl-5 space-y-3">
            <li>CSS</li>
            <li>Bootstrap</li>
            <li>Tailwind</li>
            <li>Sass</li>
            <li>Vuetify</li>
            <li>PrimeVue</li>
          </ul>
        </div>
      </div>

      <!-- 後端技術 -->
      <div class="contentBox w-full lg:w-[300px] min-h-[350px]">
        <h2 class="text-lg md:text-xl font-bold mb-4 text-center">後端技術</h2>
        <ul class="list-disc pl-5 space-y-3">
          <li>Node.js</li>
          <li>MongoDB</li>
        </ul>
      </div>

      <!-- 設計技術 -->
      <div class="contentBox w-full lg:w-[300px] min-h-[350px]">
        <h2 class="text-lg md:text-xl font-bold mb-4 text-center">設計技術</h2>
        <ul class="list-disc pl-5 space-y-3">
          <li>Photoshop</li>
          <li>Illustrator</li>
          <li>Figma</li>
        </ul>
      </div>
    </section>
    <div class="h-12"></div>
  </div>
</template>

<script setup></script>

<style scoped>
.contentBox {
  color: black;
  margin: auto;
  background: #fff;
  padding: 32px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}
@media (min-width: 768px) {
  .container {
    padding: 48px;
  }
}
</style>
