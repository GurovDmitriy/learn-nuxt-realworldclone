<template>
  <div class="title-user">
    <div class="title-user__container">
      <p class="title-user__caption">User caption</p>
      <p class="title-user__text">User text</p>
    </div>
  </div>
</template>

<style lang="scss">
.title-user {
  background-color: $var-color-purple;
}

.title-user__container {
  @include container;

  padding-top: $space-l;
  padding-bottom: $space-l;
}

.title-user__caption {
  @include caption-h1;

  margin-bottom: $space-m;

  color: $var-color-white;
  text-align: center;
}

.title-user__text {
  color: $var-color-white;
  text-align: center;

  &:last-child {
    margin-bottom: 0;
  }
}
</style>
