<template>
  <main class="main-register">
    <h2 class="main-register__caption visually-hidden">Main Content</h2>
    <TheColumnWrapperRegister class="main-register__column-wrapper" />
  </main>
</template>

<script>
export default {
  middleware: ["guest"],

  head() {
    return {
      title: "Register",
      meta: [
        {
          name: "description",
          content: "Template for learn Nuxt 2: Register",
          hid: "description",
        },
      ],
    }
  },
}
</script>

<style lang="scss">
.main-register {
  @include container;

  padding-bottom: $space-l;
}
</style>
