<template>
  <main class="main">
    <h2 class="main__caption visually-hidden">Main Content</h2>
    <MainColumnWrapper class="main__column-wrapper" />
    <PaginatorList class="main__paginator-list" />
  </main>
</template>

<script>
import PageMainMixin from "~/mixins/PageMainMixin"

export default {
  mixins: [PageMainMixin],
}
</script>

<style lang="scss">
.main {
  @include container;

  padding-top: $space-l;
  padding-bottom: $space-l;
}
</style>
