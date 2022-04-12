<template>
  <ul class="feed-list-placeholder">
    <AppFeedListPlaceholderItem
      v-for="item in dataItem"
      :key="item"
      class="feed-list-placeholder__item"
    />
  </ul>
</template>

<script>
export default {
  props: {
    dataItem: {
      type: Number,
      required: false,
      default: 10,
    },
  },
}
</script>

<style lang="scss">
.feed-list-placeholder {
  display: block;
  margin: 0;
  padding: 0;

  list-style: none;
}
</style>
