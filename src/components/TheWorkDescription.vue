<template>
  <div class="w-full max-w-[1440px] mx-auto px-5 flex wrap justify-between">
    <div class="max-w-[430px] text-center">
      <BaseIcon name="account" viewBox="0 0 130 90" class="w-[130px] h-[90px] fill-transparent mx-auto"/>
      <h3 class="mt-8 mb-2 font-jost font-medium text-primary text-3xl">Creat an account</h3>
      <p class="text-xl leading-8 text-content font-open capitalize">
        Aspernatur sit adipisci quaerat unde Redug Lagre dolor sit amets consectetus. Agencies define their new business
      </p>
    </div>
    <div class="max-w-[430px] text-center">
      <BaseIcon name="bank" viewBox="0 0 177 132" class="w-[177px] h-[132px] fill-transparent mx-auto"/>
      <h3 class="mt-8 mb-2 font-jost font-medium text-primary text-3xl">Attach bank accounts</h3>
      <p class="text-xl leading-8 text-content font-open capitalize">
        Aspernatur sit adipisci quaerat unde Redug Lagre dolor sit amets consectetus. Agencies define their new business
      </p>
    </div>
    <div class="max-w-[430px] text-center">
      <BaseIcon name="money" viewBox="0 0 180 140" class="w-[180px] h-[140px] fill-transparent mx-auto"/>
      <h3 class="mt-8 mb-2 font-jost font-medium text-primary text-3xl">Send money</h3>
      <p class="text-xl leading-8 text-content font-open capitalize">
        Aspernatur sit adipisci quaerat unde Redug Lagre dolor sit amets consectetus. Agencies define their new business
      </p>
    </div>
  </div>
</template>

<script>
import BaseIcon from "./BaseIcon.vue"
export default {
  components: {
    BaseIcon
  }
}
</script>
