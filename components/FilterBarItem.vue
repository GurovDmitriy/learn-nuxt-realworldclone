<template>
  <li class="filter-bar-item">
    <NuxtLink :to="{ path: dataItem.path }" class="filter-bar-item__link">{{
      dataItem.content
    }}</NuxtLink>
  </li>
</template>

<script>
export default {
  props: {
    dataItem: {
      type: Object,
      required: false,
      default: () => {},
    },
  },

  computed: {
    dataItemValid() {
      const content = this.dataItem.content || "Unknown feed"
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
.filter-bar-item {
  margin-bottom: -2px;
}

.filter-bar-item__link {
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
