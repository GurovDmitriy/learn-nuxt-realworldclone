<template>
  <li class="nav-list-item">
    <NuxtLink :to="{ path: dataItem.path }" class="nav-list-item__link">{{
      dataItem.content
    }}</NuxtLink>
  </li>
</template>

<script>
export default {
  props: {
    dataItem: {
      type: Object,
      required: true,
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
