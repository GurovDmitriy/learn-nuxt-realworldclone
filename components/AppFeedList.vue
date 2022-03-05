<template>
  <ul class="feed-list">
    <FeedListItem
      v-for="item in dataItem"
      :key="item.id"
      :data-item="item"
      class="feed-list__item"
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
.feed-list {
  display: block;
  margin: 0;
  padding: 0;

  list-style: none;
}
</style>
