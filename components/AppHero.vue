<template>
  <div class="hero">
    <slot name="default">Title</slot>
  </div>
</template>

<style lang="scss">
.hero {
  padding-top: $space-l;
  padding-bottom: $space-l;

  background-color: $var-color-east-side;
}
</style>
