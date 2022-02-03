<template>
  <li class="tags-list-item">
    <NuxtLink :to="{ path: `/tags/${pathTag}` }" class="tags-list-item__link">{{
      dataItem
    }}</NuxtLink>
  </li>
</template>

<script>
export default {
  props: {
    dataItem: {
      type: String,
      required: true,
    },
  },

  computed: {
    pathTag() {
      return this.dataItem.split(" ").join("-")
    },
  },
}
</script>

<style lang="scss">
.tags-list-item {
  margin: $space-xxs;
  margin-top: 0;
}

.tags-list-item__link {
  @include text-small;

  display: block;
  padding: $space-xs $space-s;

  color: $var-color-white;
  line-height: 1;
  text-transform: lowercase;
  text-decoration: none;

  background-color: $var-color-grey;
  border-radius: 50px;

  &:hover {
    background-color: $var-color-purple;
  }
}
</style>
