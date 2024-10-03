<template>
  <RouterLink to="/" class="flex gap-x-2 items-end">
    <BaseIcon name="logo" viewBox="0 0 45 55" class="w-[45px] h-[55px] fill-transparent" />
    <span class="font-jost text-primary text-3xl font-semibold">PrimePay.</span>
  </RouterLink>
</template>

<script>
import BaseIcon from "./BaseIcon.vue";

export default {
  components: {
    BaseIcon
  }
}
</script>
