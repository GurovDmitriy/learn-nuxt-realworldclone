<template>
  <ul class="tags-list">
    <AppTagsListItem
      v-for="item in dataItem"
      :key="item"
      :data-item="item"
      class="tags-list__tags-list-item"
    />
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
.tags-list {
  display: flex;
  flex-wrap: wrap;

  margin: 0 ($space-xxs * -1);
  padding: 0;

  list-style: none;
}
</style>
