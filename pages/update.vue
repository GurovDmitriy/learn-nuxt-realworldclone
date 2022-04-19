<template>
  <main class="main-update">
    <h2 class="main-update__caption">New Feed</h2>
    <TheFormUpdate class="main-update__form-update" />
  </main>
</template>

<script>
export default {
  middleware: ["auth", "update"],

  head() {
    return {
      title: "Update",
      meta: [
        {
          name: "description",
          content: "Template for learn Nuxt 2: Update Feed",
          hid: "description",
        },
      ],
    }
  },
}
</script>

<style lang="scss">
.main-update {
  @include container;
}

.main-update__caption {
  @include caption-h3;

  margin-bottom: $space-l;

  text-align: center;
}
</style>
