<template>
  <ul class="filter-bar">
    <AppFilterBarItem
      v-for="(item, index) in dataItem"
      :key="item.content"
      :data-item="item"
      :is-active="isActiveBar[index]"
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
          content: "Unknown feed",
          path: "/",
        },
      ],
    },
  },

  computed: {
    isActiveBar() {
      const data = this.dataItem.map((item) => {
        const path = item.path
        const pathCurrent = this.$route.path

        const isActive = pathCurrent === path

        return isActive
      })

      return data
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
