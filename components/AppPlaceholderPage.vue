<template>
  <div class="placeholder">
    <p class="placeholder__caption"><slot name="default">Page</slot></p>
    <p class="placeholder__message">
      <slot name="message">It's not all here...</slot>
    </p>
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

  color: $var-color-default;
  text-align: center;
}

.placeholder__message {
  @include text-small;

  margin-bottom: $space-s;

  color: $var-color-default;
  text-align: center;
}
</style>
