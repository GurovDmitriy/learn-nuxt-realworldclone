<template>
  <ul class="filter-bar">
    <FilterBarItem
      v-for="item in dataItemValid"
      :key="item.content"
      :data-item="item"
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
      default: () => [{}],
    },
  },

  computed: {
    dataItemValid() {
      const data = this.dataItem.map((item) => {
        const content = item.content || "Unknown feed"
        const path = item.path || "/"
        let active = true

        if (this.$route.params.slug) {
          active = item.content.includes(this.$route.params.slug)
        }

        return {
          content,
          path,
          active,
        }
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

  border-bottom: 2px solid $var-color-grey-light;
}

.filter-bar__item--active {
  background-color: green;
}
</style>
