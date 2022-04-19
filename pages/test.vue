<template>
  <main class="main">
    <AppHero class="main__hero">
      <TheTitle class="main__title" />
    </AppHero>
  </main>
</template>

<script>
export default {
  layout: "test",

  fetch(context) {
    if (process.server) {
      const { req, res, beforeNuxtRender } = context

      console.log(req, res, beforeNuxtRender)
    }

    if (process.client) {
      const { from, nuxtState } = context

      console.log(from, nuxtState)
    }
  },
}
</script>

<style lang="scss">
.main {
  @include container;

  padding-bottom: $space-l;
}
</style>
