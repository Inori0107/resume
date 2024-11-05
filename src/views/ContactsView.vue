<template>
  <!-- content -->
  <div class="relative bg-turquoise pt-[76px] md:pt-24 pb-8">
    <h1 class="text-black text-center text-2xl md:text-3xl font-bold py-4 md:py-8">Let's Talk</h1>

    <section class="contentBox w-3/4 md:w-1/2 shadow-lg animate-pulse">
      <form>
        <label class="block py-4">
          <span class="text-lg md:text-xl">姓名 Name </span>
          <input type="text" class="inputContainer p-2" required />
        </label>

        <label class="block py-4">
          <span class="text-lg md:text-xl">電子信箱 Email</span>
          <input type="text" class="inputContainer p-2" required />
        </label>

        <label class="block py-4">
          <span class="text-lg md:text-xl">聯絡主題 Subject</span>
          <input type="text" class="inputContainer p-2" required />
        </label>

        <label class="block py-4">
          <span class="text-lg md:text-xl">訊息內容 Message</span>
          <textarea type="text" class="inputContainer p-2" required />
        </label>

        <button
          type="submit"
          class="w-full mt-4 py-2 bg-blue-500 text-white text-lg md:text-xl rounded-full hover:bg-blue-600"
        >
          送出訊息
        </button>
      </form>
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

.inputContainer {
  width: 100%;
  display: block;
  background: #fff;
  border-bottom: 2px solid #000;
}
input:focus {
  border-bottom: 2px solid rgba(37 99 235);
  outline: none;
}
</style>
