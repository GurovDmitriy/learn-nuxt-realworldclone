<template>
  <main class="main">
    <h2 class="main__caption visually-hidden">Main Content</h2>
    <section class="main__section main__section--left">
      <h3 class="main__section-caption visually-hidden">Feed List</h3>
      <FilterBar :data-item="dataFilterBarResult" class="main__filter-bar" />
      <FeedList class="main__feed-list" />
    </section>
    <aside class="main__section main__section--right">
      <TagsList :data-item="dataTagsList" class="main__tags-list">
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
      dataFilterBar: [{ content: "Global Feed", path: "/" }],
      dataTagsList: [],
    }
  },

  async fetch() {
    const data = await this.$api.tag.getTags()
    this.dataTagsList = data
  },

  computed: {
    dataFilterBarResult({ $route }) {
      const barItems = [...this.dataFilterBar]

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
  @include text-default;

  margin-bottom: $space-s;
}

.main__tags-list {
  padding: $space-m;

  background-color: $var-color-grey-light;
  border-radius: 5px;
}
</style>
