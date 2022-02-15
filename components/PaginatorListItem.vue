<template>
  <li class="paginator-list-item">
    <NuxtLink
      class="paginator-list-item__link"
      :to="{ path: dataItemValid.pageSlug }"
      >{{ dataItemValid.pageNum }}</NuxtLink
    >
  </li>
</template>

<script>
export default {
  props: {
    dataItem: {
      type: Object,
      required: false,
      default: () => ({}),
    },
  },

  computed: {
    dataItemValid() {
      const pageSlug = this.dataItem.pageSlug || null
      const pageTotal = this.dataItem.pageTotal || 1
      const pageNum = this.dataItem.pageNum || 1

      return {
        pageSlug,
        pageTotal,
        pageNum,
      }
    },
  },
}
</script>
