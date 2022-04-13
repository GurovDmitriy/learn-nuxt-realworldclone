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
  // transition: "page",
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

// .page-enter-active,
// .page-leave-active {
//   transition: opacity 0.5s;
// }

// .page-enter,
// .page-leave-active {
//   opacity: 0%;
// }
</style>
