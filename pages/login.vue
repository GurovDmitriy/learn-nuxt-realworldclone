<template>
  <main class="main-login">
    <h2 class="main-login__caption visually-hidden">Main Content</h2>
    <TheColumnWrapperLogin class="main-login__column-wrapper" />
  </main>
</template>

<script>
export default {
  middleware: ["guest"],

  head() {
    return {
      title: "Login",
      meta: [
        {
          name: "description",
          content: "Template for learn Nuxt 2: Login",
          hid: "description",
        },
      ],
    }
  },
}
</script>

<style lang="scss">
.main-login {
  @include container;

  padding-bottom: $space-l;
}
</style>
