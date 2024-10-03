<template>
  <svg
  :viewBox="$attrs.viewBox || '0 0 20 20'"
  :class="$attrs.class || 'w-6 h-6'"
  v-html="path"
  >
  </svg>
</template>

<script>
import icons from '../icons.js'

export default {
  props: ['name'],

  data() {
    return {
      path: icons[this.name]
    }
  }
}
</script>

