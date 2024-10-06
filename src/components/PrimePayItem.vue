<template>
  <div class="w-full max-w-[438px] p-[43px]">
    <img :src="image" :alt="title" />
    <h3 class="font-jost font-medium text-4xl text-tertiary mt-7 mb-4">{{ title }}</h3>
    <p class="text-xl leading-8 text-content">
      Easily integrate with all your need favorite tools through and APIsing including automatic
    </p>
  </div>
</template>

<script>
export default {
  props: ['image', 'title']
}
</script>
