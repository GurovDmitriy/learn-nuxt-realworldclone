<template>
  <main class="page-update">
    <h2 class="page-update__caption">New Feed</h2>
    <TheFormUpdate class="page-update__form-update" />
  </main>
</template>

<script>
export default {
  layout: "sign",
  middleware: ["auth"],
}
</script>

<style lang="scss">
.page-update {
  @include container;
}

.page-update__caption {
  @include caption-h3;

  margin-bottom: $space-l;

  text-align: center;
}
</style>
