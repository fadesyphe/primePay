<template>
  <main class="w-full bg-home-main bg-no-repeat bg-contain bg-center pt-32 relative mb-6">
    <div class="w-full max-w-[1440px] px-4 mx-auto pb-[528px]">
      <div class="w-full max-w-[840px] text-center text-primary font-semibold capitalize mx-auto">
        <h1 class="text-[80px] leading-[1.15] font-just">Ready to launch your online <span class="text-white">payment</span> app</h1>
        <h2 class="font-open py-8">A simple yet modern solution to showcase your app</h2>
        <BaseButton class="text-white bg-primary">Get started</BaseButton>
      </div>
      <img src="../assets/images/home-main-image.png" alt="" class="mx-auto absolute left-1/2 z-10 -translate-x-1/2">
    </div>
  </main>
</template>

<script>
import BaseButton from "./BaseButton.vue"
export default {
  components: {
    BaseButton
  }
}
</script>

