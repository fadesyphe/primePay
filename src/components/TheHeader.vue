<template>
  <header class="max-w-[1440px] w-full px-4 mx-auto py-10 flex items-center justify-between">
    <BaseLogo />
    <TheMenu />
    <BaseButton class="text-white bg-primary" @click="login">login</BaseButton>
  </header>

</template>

<script>
import BaseButton from "./BaseButton.vue";
import BaseLogo from "./BaseLogo.vue";
import TheMenu from "./TheMenu.vue";

export default {
  components: {
    BaseButton,
    BaseLogo,
    TheMenu
  },

  methods: {

  }
}
</script>
