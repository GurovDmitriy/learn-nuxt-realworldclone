<template>
  <ul class="paginator-list">
    <AppPaginatorListItem
      v-for="(item, index) in dataItem.pageCount"
      :key="item"
      :data-item="item"
      :path-page="pathPage"
      :is-active="getActivePage[index]"
      class="paginator-list__item"
    />
  </ul>
</template>

<script>
export default {
  props: {
    dataItem: {
      type: Array,
      required: false,
      default: () => [1],
      validator: (value) => {
        return Array.isArray(value)
      },
    },

    pathPage: {
      type: String,
      required: false,
      default: "/",
    },
  },

  computed: {
    getActivePage() {
      const data = this.dataItem.pageCount.map((item) => {
        const isActive = item === this.$route.query.page

        return isActive
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
