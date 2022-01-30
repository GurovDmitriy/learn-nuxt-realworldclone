<template>
  <ul class="nav-list">
    <li v-for="item in dataItem" :key="item.content" class="nav-list__item">
      <NuxtLink :to="{ path: `${item.path}` }" class="nav-list__link">{{
        item.content
      }}</NuxtLink>
    </li>
  </ul>
</template>

<script>
export default {
  props: {
    dataItem: {
      type: Array,
      required: true,
    },
  },
}
</script>

<style lang="scss">
.nav-list {
  display: block;
  padding: 0;

  text-align: center;

  list-style: none;

  @media (min-width: $min-width-tablet) {
    display: flex;
    flex-wrap: wrap;
  }
}

.nav-list__link {
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
