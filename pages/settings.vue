<template>
  <main class="page-settings">
    <h2 class="page-settings__caption">Your Settings</h2>
    <TheFormSettings class="page-settings__form-settings" />
  </main>
</template>

<script>
export default {
  layout: "sign",
}
</script>

<style lang="scss">
.page-settings {
  @include container;
}

.page-settings__caption {
  @include caption-h3;

  margin-bottom: $space-l;

  text-align: center;
}
</style>
