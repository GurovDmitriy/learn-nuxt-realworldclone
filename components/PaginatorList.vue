<template>
  <ul class="paginator-list">
    <PaginatorListItem
      v-for="(item, index) in dataItemValid.pageCount"
      :key="item"
      :data-item="{ pagePath: dataItemValid.pagePath, pageNum: index + 1 }"
      class="paginator-list__item"
    />
  </ul>
</template>

<script>
export default {
  props: {
    dataItem: {
      type: Object,
      required: true,
      default: () => ({
        // pageCount
        // pagePath
      }),
    },
  },

  computed: {
    dataItemValid() {
      const pageCount = this.dataItem.pageCount || 1
      const pagePath = this.dataItem.pagePath || "/"

      return {
        pageCount,
        pagePath,
      }
    },
  },
}
</script>

<style lang="scss">
.paginator-list {
  display: flex;
  flex-wrap: wrap;
  align-items: center;

  margin: 0 ($space-xs * -1);
  padding: 0;

  list-style: none;
}

.paginator-list__item {
  margin: 0 $space-xs;
}
</style>
