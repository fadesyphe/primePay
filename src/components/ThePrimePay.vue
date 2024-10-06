<template>
  <div class="w-full max-w-[1440px] px-5 mx-auto">
    <h2 class="font-jost font-semibold text-[#B5B5B5] text-[55px] leading-none text-center">
      Why it is <br>Worth Choosing <span class="text-tertiary">PrimePay.</span>
    </h2>
    <div class="mt-10 flex flex-wrap justify-between items-center gap-y-9">
      <div
      class="w-full max-w-[919px] pl-[69px] flex flex-wrap justify-between items-center bg-gray-bg"
       v-for="(item, idx) in list.slice(0, 1)"
       :key="idx"
       >
        <div class="max-w-[388px]">
          <h3 class="font-jost font-medium text-4xl text-tertiary mb-4">{{item.title}}</h3>
          <p class="text-xl leading-8 text-content">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt Laoreet non curabitur gravida sagittis aliquam bibendum.</p>
        </div>
        <img :src="item.image" :alt="item.title">
      </div>
      <div
      v-for="(item, idx) in list.slice(1)"
      :key="idx"
      class="w-full max-w-[438px] p-[43px]"
      >
        <img :src="item.image" :alt="item.title">
        <h3 class="font-jost font-medium text-4xl text-tertiary mt-7 mb-4">{{item.title}}</h3>
        <p class="text-xl leading-8 text-content">Easily integrate with all your need favorite tools through and APIsing including automatic</p>
      </div>
    </div>
  </div>
</template>

<script >
import integration from '@/assets/images/integration image.png'
import security from '@/assets/images/security.jpg'
import account from '@/assets/images/account.jpg'
import account2 from '@/assets/images/account2.jpg'
import payment from '@/assets/images/payment.jpg'

export default {
  data() {
    return {
      list: [
        { image: integration, title: 'Integration other' },
        { image: security, title: 'Safe & Security' },
        { image: account, title: 'Merchant account' },
        { image: account2, title: 'Merchant account' },
        { image: payment, title: 'Fast get paid', }
      ]
    }
  }
}
</script>

<script setup>
  const imageUrl = new URL(`@/assets/images/${name}`, import.meta.url).href
</script>
