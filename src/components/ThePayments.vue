<template>
  <div class="w-full max-w-[1440px] mx-auto mt-[150px]">
    <div class="flex justify-between">
      <div class="w-full max-w-[570px]">
        <h2 class="font-jost leading-none text-[#B5B5B5] font-semibold mb-7 text-6xl">Send and receive <span class="text-primary">payments</span> easily</h2>
        <p class="text-xl text-content capitalize">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt<br><br>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <p class="text-xl text-content capitalize"></p>
        <span class="my-10 w-full max-w-[549px] h-px bg-[#D8D8D8] inline-block"></span>
        <div class="flex gap-5 items-center">
          <div class="flex items-center justify-center w-[100px] aspect-square rounded-full bg-[#FFC173]">
            <BaseIcon name="play" viewBox="0 0 21 27" class="w-[21px] h-[27px] fill-transparent"/>
          </div>
          <div class="font-open text-xl capitalize">
            <h3 class="text-primary font-bold">Lorem ipsum dolor sit</h3>
            <p class="text-content flex items-center gap-2 mt-2 text-[#7D5FFF]">
              Amet, consectetur
              <BaseIcon name="arrow" viewBox="0 0 25 16" class="w-[25px] h-4 fill-transparent" />
            </p>
        </div>
      </div>
      <TheCounters />
    </div>
      <img src="../assets/images/background-payments.png" alt="">
    </div>

  </div>
</template>

<script>
import BaseIcon from "./BaseIcon.vue";
import TheCounters from "./TheCounters.vue"

export default {
  components: {
    BaseIcon,
    TheCounters
  }
}
</script>

