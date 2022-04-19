<template>
  <main class="main-editor">
    <h2 class="main-editor__caption">New Feed</h2>
    <TheFormEditor class="main-editor__form-editor" />
  </main>
</template>

<script>
export default {
  middleware: ["auth"],

  head() {
    return {
      title: "Editor",
      meta: [
        {
          name: "description",
          content: "Template for learn Nuxt 2: Create new Feed",
          hid: "description",
        },
      ],
    }
  },
}
</script>

<style lang="scss">
.main-editor {
  @include container;
}

.main-editor__caption {
  @include caption-h3;

  margin-bottom: $space-l;

  text-align: center;
}
</style>
