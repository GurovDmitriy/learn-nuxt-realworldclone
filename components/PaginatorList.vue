<template>
  <ul class="paginator-list">
    <PaginatorListItem
      v-for="item in dataItemValid"
      :key="item.pageNum"
      :data-item="item"
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
        // pageCount - array rang page count
        // pagePath  - string path page
      }),
    },
  },

  computed: {
    dataItemValid() {
      const pageCount = this.dataItem.pageCount || [1]
      const pagePath = this.dataItem.pagePath || "/"

      const data = pageCount.map((item) => {
        const pageNum = item
        const isClassActive = !this.$route.query.page && item === 1

        return {
          pagePath,
          pageNum,
          isClassActive,
        }
      })

      return data
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
