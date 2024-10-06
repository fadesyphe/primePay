<template>
  <div :class="classes">
    <div
    v-for="item in list"
    :key="item.text">
      <h3 class="font-jost font-semibold text-[40px] text-primary">{{ item.title }}</h3>
      <span class="text-content text-xl">{{ item.text }}</span>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      list: [
        { title: '12.000 +', text: 'Downloaded' },
        { title: '$10 M', text: 'Transactions' },
        { title: '1.000 +', text: 'Feedback' }
      ]
    }
  },

  computed: {
    classes() {
      return [
        'flex',
        'items-center',
        'gap-[120px]',
        'mt-16',
        'w-[100vw]',
        'max-w-[1440px]',
        'bg-base',
        'py-24',
        'rounded-[32px]',
        'px-[66px]'
      ]
    }
  }
}
</script>
