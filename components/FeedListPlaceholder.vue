<template>
  <ul class="feed-list-placeholder">
    <FeedListPlaceholderItem
      v-for="item in dataFeedListPlaceholder.itemCount"
      :key="item"
      class="feed-list-placeholder__item"
    />
  </ul>
</template>

<script>
export default {
  data() {
    return {
      dataFeedListPlaceholder: {
        itemCount: 10,
      },
    }
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
