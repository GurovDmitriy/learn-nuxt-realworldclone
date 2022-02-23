<template>
  <li class="feed-list-item">
    <FeedListItemHeader
      :data-item="feedListItemHeader"
      class="feed-list-item__header"
    />
    <FeedListItemPreview
      :data-item="dataItem.feed"
      class="feed-list-item__preview"
    />
    <FeedListItemFooter
      :data-item="dataItem.tags"
      class="feed-list-item__footer"
    />
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

  computed: {
    feedListItemHeader() {
      return {
        author: this.dataItem.author,
        like: this.dataItem.like,
      }
    },
  },
}
</script>

<style lang="scss">
.feed-list-item {
  padding: $space-l 0;

  border-bottom: 2px solid $var-color-grey-light;
}

.feed-list-item__preview {
  margin-bottom: $space-m;
}
</style>
