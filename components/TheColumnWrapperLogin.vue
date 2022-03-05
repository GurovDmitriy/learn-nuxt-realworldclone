<template>
  <section class="column-wrapper-login">
    <h3 class="column-wrapper-login__caption">Sign in</h3>
    <FormLogin class="column-wrapper-login__form" />
  </section>
</template>

<style lang="scss">
.column-wrapper-login__caption {
  @include caption-h3;

  margin-bottom: $space-m;

  text-align: center;
}
</style>
