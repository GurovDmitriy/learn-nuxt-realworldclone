<template>
  <li class="paginator-list-item">
    <NuxtLink
      class="paginator-list-item__link"
      :to="{ path: `${dataItemValid.pagePath}/${dataItemValid.pageNum}` }"
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
      default: () => ({
        // pagePath
        // pageNum
      }),
    },
  },

  computed: {
    dataItemValid() {
      const pagePath = this.dataItem.pagePath || "/"
      const pageNum = this.dataItem.pageNum || 1

      return {
        pagePath,
        pageNum,
      }
    },
  },
}
</script>
