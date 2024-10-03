<template>
  <div class="max-w-[1400px] mx-auto py-10 flex items-center justify-between">
    <BaseLogo />
    <TheMenu />
  </div>

</template>

<script>
import BaseLogo from "./BaseLogo.vue";
import TheMenu from "./TheMenu.vue";

export default {
  components: {
    BaseLogo,
    TheMenu
  }
}
</script>
