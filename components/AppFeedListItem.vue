<template>
  <li class="feed-list-item">
    <AppFeedListItemHeader
      :data-item="feedListItemHeader"
      class="feed-list-item__header"
    />
    <AppFeedListItemPreview
      :data-item="dataItem.feed"
      class="feed-list-item__preview"
    />
    <AppFeedListItemFooter
      :data-item="feedListItemFooter"
      class="feed-list-item__footer"
    />
  </li>
</template>

<script>
import { getKebabStr } from "~/helpers/utils"

export default {
  props: {
    dataItem: {
      type: Object,
      required: true,
    },
  },

  computed: {
    feedListItemHeader() {
      const author = this.dataItem.author
      const like = this.dataItem.like.length

      return {
        author,
        like,
      }
    },

    feedListItemFooter() {
      const id = this.dataItem.id
      const tags = this.dataItem.tags
      const feedDetailPath = `/feed/${getKebabStr(this.dataItem.feed.title)}`

      return {
        id,
        tags,
        feedDetailPath,
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
