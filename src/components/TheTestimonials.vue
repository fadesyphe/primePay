<template>
  <div class="w-full max-w-[1440px] px-5 py-40 mx-auto mt-[150px] bg-testimonials bg-no-repeat bg-center bg-contain">
    <div class="max-w-[1020px] mx-auto">
      <h2 class="font-jost font-semibold text-white text-6xl text-center mb-10">“Say goodbye to clutter and <span class="text-tertiary">bounce rates.</span></h2>
      <div class="flex gap-8 flex-wrap">
        <div class="rounded-[30px] bg-white py-[70px] px-[105px] w-full">
          <div class="flex items-center justify-between pb-10 mb-[30px] border-b border-solid border-[#CCCCCC]">
            <div class="flex items-center gap-5 w-full">
              <img src="../assets/images/testimonial-author1.jpg" alt="Nattasha, designer">
              <div>
                <h3 class="font-jost font-medium text-4xl text-tertiary mb-[5px]">Nattasha</h3>
                <span class="text-xl text-second text-[#625FFB]">Designer</span>
              </div>
              <div class="ml-auto flex">
                <div v-for="item in 5" :key="item" class="w-[49px] h-[49px] flex justify-center items-center">
                  <BaseIcon name="star" viewBox="0 0 39 38" class="w-[39px] h-[38px] fill-[#FFB545]" />
                </div>
              </div>
            </div>
          </div>
          <p class="text-[25px] text-content leading-10">“Our team was able to teach themselves primchat in a day.it's like using a shared email inboxust way more robust looking.” Primchat was the modern what we were looking.</p>
        </div>
        <div class="rounded-[30px] bg-white py-[70px] px-[105px] w-full">
          <div class="flex items-center justify-between pb-10 mb-[30px] border-b border-solid border-[#CCCCCC]">
            <div class="flex items-center gap-5 w-full">
              <img src="../assets/images/testimonial-author2.jpg" alt="Nattasha, designer">
              <div>
                <h3 class="font-jost font-medium text-4xl text-tertiary mb-[5px]">Joe Cook</h3>
                <span class="text-xl text-second text-[#625FFB]">Developer</span>
              </div>
              <div class="ml-auto flex">
                <div v-for="item in 5" :key="item" class="w-[49px] h-[49px] flex justify-center items-center">
                  <BaseIcon name="star" viewBox="0 0 39 38" class="w-[39px] h-[38px] fill-[#FFB545]" />
                </div>
              </div>
            </div>
          </div>
          <p class="text-[25px] text-content leading-10">“Our team was able to teach themselves primchat in a day.it's like using a shared email inboxust way more robust looking.” Primchat was the modern what we were looking.</p>
        </div>
        <div class="rounded-[30px] bg-white py-[70px] px-[105px] w-full">
          <div class="flex items-center justify-between pb-10 mb-[30px] border-b border-solid border-[#CCCCCC]">
            <div class="flex items-center gap-5 w-full">
              <img src="../assets/images/testimonial-author3.jpg" alt="Nattasha, designer">
              <div>
                <h3 class="font-jost font-medium text-4xl text-tertiary mb-[5px]">Jessica Jobs</h3>
                <span class="text-xl text-second text-[#625FFB]">Product Designer at Uber.INC</span>
              </div>
              <div class="ml-auto flex">
                <div v-for="item in 5" :key="item" class="w-[49px] h-[49px] flex justify-center items-center">
                  <BaseIcon name="star" viewBox="0 0 39 38" class="w-[39px] h-[38px] fill-[#FFB545]" />
                </div>
              </div>
            </div>
          </div>
          <p class="text-[25px] text-content leading-10">“Our team was able to teach themselves primchat in a day.it's like using a shared email inboxust way more robust looking.” Primchat was the modern what we were looking.</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BaseIcon from "./BaseIcon.vue";

export default {
  components: {
    BaseIcon
  }
}
</script>
