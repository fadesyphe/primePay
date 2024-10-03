<template>
  <ul class="flex font-inter text-primary gap-10 text-lg font-bold">
    <li v-for="item in list" :key="item.name">
      <RouterLink :to="item.link">{{item.name}}</RouterLink>
    </li>
  </ul>
</template>

<script>

export default {
  data() {
    return {
      list: [
        {link: '/about', name: 'About Us'},
        {link: '/features', name: 'Features'},
        {link: '/pricing', name: 'Pricing'},
        {link: '/blog', name: 'Blog'},
      ]
    }
  }
}
</script>

