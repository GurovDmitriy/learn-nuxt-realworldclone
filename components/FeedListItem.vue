<template>
  <li class="feed-list-item">
    <FeedListItemHeader
      :data-item="dataFeedListItemHeader"
      class="feed-list-item__header"
    />
    <FeedPreview :data-item="dataItem.feed" class="feed-list-item__preview" />
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

  data() {
    return {
      dataFeedListItemHeader: {
        author: this.dataItem.author,
        like: this.dataItem.like,
      },
    }
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
