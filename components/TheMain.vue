<template>
  <main class="main">
    <h2 class="main__caption visually-hidden">Main Content</h2>
    <section class="main__section main__section--left">
      <h3 class="main__section-caption visually-hidden">Feed List</h3>
      <FilterBar :data-items="filterBarItemsResult" class="main__filter-bar" />
    </section>
    <aside class="main__section main__section--right">
      <TagsList :data-items="dataTags" class="main__tags-list">
        <template #default
          ><h3 class="main__section-caption">Popular Tags</h3></template
        >
      </TagsList>
    </aside>
  </main>
</template>

<script>
export default {
  data() {
    return {
      filterBarItems: [{ content: "Global Feed", path: "/" }],
      dataTags: [
        { content: "welcome", path: "/welcome" },
        { content: "introduction", path: "/introduction" },
      ],
    }
  },

  computed: {
    filterBarItemsResult({ $route }) {
      const barItems = [...this.filterBarItems]

      if ($route.params.slug) {
        barItems.push({
          content: `# ${$route.params.slug}`,
          path: `/tags/${$route.params.slug}`,
        })
      }
      return barItems
    },
  },
}
</script>

<style lang="scss">
.main {
  @include container;

  padding-top: $space-l;
  padding-bottom: $space-l;

  @media (min-width: $min-width-tablet) {
    display: flex;
    justify-content: space-between;
  }
}

.main__section--left {
  margin-bottom: $space-l;

  @media (min-width: $min-width-tablet) {
    width: 70%;
    margin-right: $space-xl;
    margin-bottom: 0;
  }
}

.main__section--right {
  @media (min-width: $min-width-tablet) {
    flex-grow: 1;
  }
}

.main__section-caption {
  margin-bottom: $space-s;
  @include text-default;
}
</style>
