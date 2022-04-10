<template>
  <ul class="paginator-list">
    <AppPaginatorListItem
      v-for="(item, index) in dataItem"
      :key="item"
      :data-item="item"
      :path-page="pathPage"
      :is-active="getIsActivePage[index]"
      class="paginator-list__item"
    />
  </ul>
</template>

<script>
import { isNotEmptyArr, isNotEmptyObj } from "~/helpers/utils"

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
      const query = this.$route.query
      const queryPage = this.$route.query.page

      return this.dataItem.map((item, index) => {
        if (index === 0 && !isNotEmptyObj(query)) return true
        return queryPage === item || queryPage === 1
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
