<template>
  <ul class="feed-list">
    <template v-if="$fetchState.pending">
      <FeedListItemPlaceholder
        v-for="(item, index) in feedListPlaceholderCount"
        :key="index"
        class="feed-list__item"
      />
    </template>
    <li v-else-if="$fetchState.error" class="feed-list__item">Error</li>
    <template v-else>
      <FeedListItem
        v-for="item in dataFeedList"
        :key="item.id"
        :data-item="item"
        class="feed-list__item"
      />
    </template>
  </ul>
</template>

<script>
export default {
  data() {
    return {
      dataFeedList: [],
      feedListPlaceholderCount: 10,
    }
  },

  async fetch() {
    const slug = this.$route.params.slug
    if (slug) {
      this.dataFeedList = await this.$api.feed.getFeedListByTags(slug)
    } else {
      this.dataFeedList = await this.$api.feed.getFeedList()
    }
  },

  fetchDelay: 600,

  activated() {
    if (this.$fetchState.timestamp <= Date.now() - 30000) {
      this.$fetch()
    }
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
