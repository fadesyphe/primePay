<template>
  <TheMainHome />
  <TheWorkDescription />
  <ThePayments />
</template>

<script>
import TheMainHome from '../components/TheMainHome.vue'
import TheWorkDescription from '../components/TheWorkDescription.vue'
import ThePayments from "../components/ThePayments.vue"

export default {
  components: {
    TheMainHome,
    TheWorkDescription,
    ThePayments
  }
}
</script>
