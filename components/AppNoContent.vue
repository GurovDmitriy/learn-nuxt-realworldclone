<template>
  <div class="no-content">
    <p class="no-content__caption"><slot name="default">No сontent</slot></p>
    <p class="no-content__message">
      <slot name="message">nothing here yet...</slot>
    </p>
  </div>
</template>

<style lang="scss">
.no-content {
  padding-top: $space-xl;
  padding-bottom: $space-xl;
}

.no-content__caption {
  margin-bottom: $space-m;

  color: $var-color-default;
}

.no-content__message {
  @include text-small;

  margin-bottom: 0;

  color: $var-color-default;
}
</style>
