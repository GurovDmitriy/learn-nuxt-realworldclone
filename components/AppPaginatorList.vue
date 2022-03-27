<template>
  <ul class="paginator-list">
    <AppPaginatorListItem
      v-for="(item, index) in dataItem.pageCount"
      :key="item"
      :data-item="item"
      :path-page="pathPage"
      :is-active="getIsActivePage[index]"
      class="paginator-list__item"
    />
  </ul>
</template>

<script>
import { isNotEmptyArr } from "~/helpers/utils"

export default {
  props: {
    dataItem: {
      type: Array,
      required: false,
      default: () => [1],
      validator: (value) => {
        return isNotEmptyArr(value)
      },
    },

    pathPage: {
      type: String,
      required: false,
      default: "/",
    },
  },

  computed: {
    getIsActivePage() {
      return this.dataItem.pageCount.map((item) => {
        return this.$route.query.page === item
      })
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
