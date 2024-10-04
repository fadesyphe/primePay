<template>
  <div class="max-w-[430px] text-center">
    <BaseIcon :name="nameIcon" :viewBox="viewBox" :class="classesIcon + ' fill-transparent mx-auto'"/>
    <h3 class="mt-8 mb-2 font-jost font-medium text-primary text-3xl">{{ title }}</h3>
    <p class="text-xl leading-8 text-content font-open capitalize">
      <slot></slot>
    </p>
  </div>
</template>

<script>
import BaseIcon from "./BaseIcon.vue"

export default {
  components: {
    BaseIcon
  },

  props: ['title', 'nameIcon', 'viewBox', 'classesIcon']
}
</script>
