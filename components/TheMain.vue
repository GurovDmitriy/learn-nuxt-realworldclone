<template>
  <main class="main">
    <h2 class="visually-hidden">Main Content</h2>
    <section class="main__section main__section--left">
      <h3 class="visually-hidden">Feed List</h3>
      <FilterBar :data-item="filterBarItem" class="main__filter-bar" />
    </section>
    <section class="main__section main__section--right">
      <h3 class="visually-hidden">Popular Tags</h3>
      <p>popular tags</p>
    </section>
  </main>
</template>

<script>
export default {
  data() {
    return {
      filterBarItem: [{ content: "Global Feed", path: "/" }],
    }
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
  @media (min-width: $min-width-tablet) {
    width: 70%;
    margin-right: $space-xl;
  }
}

.main__section--right {
  @media (min-width: $min-width-tablet) {
    flex-grow: 1;
  }
}
</style>
