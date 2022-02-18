<template>
  <div class="placeholder">
    <p class="placeholder__caption"><slot name="default">Page</slot></p>
    <p class="placeholder__message">It's not all here...</p>
  </div>
</template>

<style lang="scss">
.placeholder {
  @include container;

  padding-top: $space-xl;
  padding-bottom: $space-xl;
}

.placeholder__caption {
  @include caption-h2;

  margin-bottom: $space-m;

  color: $var-color-grey;
  text-align: center;
}

.placeholder__message {
  @include text-small;

  margin-bottom: $space-s;

  color: $var-color-grey;
  text-align: center;
}
</style>
