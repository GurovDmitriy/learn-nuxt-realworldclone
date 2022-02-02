<template>
  <ul class="filter-bar">
    <li v-for="item in dataItem" :key="item.content" class="filter-bar__item">
      <NuxtLink :to="{ path: item.path }" class="filter-bar__link">{{
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
.filter-bar {
  display: flex;
  flex-wrap: wrap;
  align-content: center;
  align-items: center;
  justify-content: flex-start;

  margin: 0;
  padding: 0;

  list-style: none;

  border-bottom: 2px solid $var-color-grey-light;
}

.filter-bar__item {
  margin-bottom: -2px;
}

.filter-bar__link {
  display: block;
  padding: $space-s;

  color: $var-color-grey;
  text-decoration: none;

  border-bottom: 2px solid transparent;

  &.nuxt-link-exact-active {
    color: $var-color-purple;

    border-bottom: 2px solid $var-color-purple;
  }

  &:hover {
    color: $var-color-black;
  }
}
</style>
