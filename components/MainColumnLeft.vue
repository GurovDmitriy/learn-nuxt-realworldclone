<template>
  <section class="main-column-left">
    <h3 class="main-column-left__caption visually-hidden">Feed List</h3>
    <FilterBar
      :data-item="dataFilterBarResult"
      class="main-column-left__filter-bar"
    />
    <FeedList class="main-column-left__feed-list" />
  </section>
</template>

<script>
export default {
  data() {
    return {
      dataFilterBar: [{ content: "Global Feed", path: "/" }],
    }
  },

  computed: {
    dataFilterBarResult({ $route }) {
      const barItems = this.dataFilterBar.map((item) => item)

      if ($route.params.slug) {
        barItems.push({
          content: `# ${$route.params.slug}`,
          path: `${$route.fullPath}`,
        })
      }

      return barItems
    },
  },
}
</script>
