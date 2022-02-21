<template>
  <li class="nav-list-item">
    <NuxtLink :to="{ path: dataItemValid.path }" class="nav-list-item__link">{{
      dataItemValid.content
    }}</NuxtLink>
  </li>
</template>

<script>
export default {
  props: {
    dataItem: {
      type: Object,
      required: false,
      default: () => ({}),
    },
  },

  computed: {
    dataItemValid() {
      const content = this.dataItem.content || "Home"
      const path = this.dataItem.path || "/"

      return {
        content,
        path,
      }
    },
  },
}
</script>

<style lang="scss">
.nav-list-item__link {
  display: block;
  padding: $space-s;

  color: $var-color-grey;
  text-decoration: none;

  &.nuxt-link-exact-active {
    color: $var-color-black;
  }

  &:hover {
    color: $var-color-black;
  }
}
</style>
