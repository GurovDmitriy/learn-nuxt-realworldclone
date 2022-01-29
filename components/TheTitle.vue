<template>
  <div class="title">
    <div class="title__container">
      <p class="title__caption">Real World Clone</p>
      <p class="title__text">Template for learn Nuxt 2</p>
    </div>
  </div>
</template>

<style lang="scss">
.title {
  background-color: $var-color-purple;
}

.title__container {
  @include container;

  padding-top: 20px;
  padding-bottom: 20px;
}

.title__caption {
  color: $var-color-white;
  text-align: center;
}

.title__text {
  color: $var-color-white;
  text-align: center;
}
</style>
