<template>
  <ul class="paginator-list">
    <PaginatorListItem
      v-for="(item, index) in dataItemValid.pageTotal"
      :key="item"
      :data-item="{ dataItemValid, pageNum: index + 1 }"
      class="paginator-list__item"
    />
  </ul>
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

      return {
        pageSlug,
        pageTotal,
      }
    },
  },
}
</script>
