<template>
  <main class="main">
    <h2 class="main__caption visually-hidden">Main Content</h2>
    <MainColumnWrapper class="main__column-wrapper" />
    <PaginatorList
      class="main__paginator-list"
      :data-item="dataPaginatorListComp"
    />
  </main>
</template>

<script>
import PageTagsMixin from "~/mixins/PageTagsMixin"

export default {
  mixins: [PageTagsMixin],
}
</script>
