<template>
  <li class="nav-list__item">
    <NuxtLink :to="{ path: `${dataItem.path}` }" class="nav-list__link">{{
      dataItem.content
    }}</NuxtLink>
  </li>
</template>

<script>
export default {
  props: {
    dataItem: {
      type: Object,
      require: true,
      default: () => {},
    },
  },
}
</script>

<style lang="scss">
.nav-list__link {
  display: block;
  padding: 8px;

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
