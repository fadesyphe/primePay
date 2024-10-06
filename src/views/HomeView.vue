<template>
  <TheMainHome />
  <TheWorkDescription />
  <ThePayments />
  <ThePrimePay />
</template>

<script>
import TheMainHome from '../components/TheMainHome.vue'
import TheWorkDescription from '../components/TheWorkDescription.vue'
import ThePayments from "../components/ThePayments.vue"
import ThePrimePay from "../components/ThePrimePay.vue"

export default {
  components: {
    TheMainHome,
    TheWorkDescription,
    ThePayments,
    ThePrimePay
  }
}
</script>
