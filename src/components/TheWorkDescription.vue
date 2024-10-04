<template>
  <div class="w-full max-w-[1440px] mx-auto px-5 pb-40 flex wrap justify-between items-end">
    <WorkDescriptionItem
    v-for="item in list"
    :key="item.title"
    :title="item.title"
    :nameIcon="item.nameIcon"
    :classesIcon="item.classesIcon"
    :viewBox="item.viewBox"
    >
      Aspernatur sit adipisci quaerat unde Redug Lagre dolor sit amets consectetus. Agencies define their new business
    </WorkDescriptionItem>

  </div>
</template>

<script>
import WorkDescriptionItem from "./WorkDescriptionItem.vue"

export default {
  components: {
    WorkDescriptionItem
  },

  data() {
    return {
      list: [
        {title: "Creat an account", nameIcon: "account", viewBox: "0 0 234 90", classesIcon: "w-[234px] h-[90px]"},
        {title: "Attach bank accounts", nameIcon: "bank", viewBox: "0 0 234 96", classesIcon: "w-[234px] h-[96px]"},
        {title: "Send money", nameIcon: "money", viewBox: "0 0 210 92", classesIcon: "w-[210px] h-[92px]"}
      ]
    }
  }
}
</script>
