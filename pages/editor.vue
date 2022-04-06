<template>
  <main class="page-editor">
    <h2 class="page-editor__caption">New Feed</h2>
    <TheFormEditor class="page-editor__form-editor" />
  </main>
</template>

<script>
export default {
  layout: "sign",
  middleware: ["auth"],
}
</script>

<style lang="scss">
.page-editor {
  @include container;
}

.page-editor__caption {
  @include caption-h3;

  margin-bottom: $space-l;

  text-align: center;
}
</style>
