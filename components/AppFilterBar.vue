<template>
  <ul class="filter-bar">
    <AppFilterBarItem
      v-for="(item, index) in dataItem"
      :key="item.content"
      :data-item="item"
      :is-active="getIsActiveBar[index]"
      class="filter-bar__item"
    />
  </ul>
</template>

<script>
export default {
  props: {
    dataItem: {
      type: Array,
      required: false,
      default: () => [
        {
          content: "Global Feed",
          path: "/",
        },
      ],
    },
  },

  computed: {
    getIsActiveBar() {
      return this.dataItem.map((item) => {
        return this.$route.path === item.path
      })
    },
  },
}
</script>

<style lang="scss">
.filter-bar {
  display: flex;
  flex-wrap: wrap;
  align-content: center;
  align-items: center;
  justify-content: flex-start;

  margin: 0;
  padding: 0;

  list-style: none;

  border-bottom: 2px solid $var-color-amethyst-smoke;
}

.filter-bar__item--active {
  background-color: green;
}
</style>
