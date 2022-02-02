<template>
  <ul class="feed-list">
    <li v-if="$fetchState.pending">Loading...</li>
    <li v-else-if="$fetchState.error">Error</li>
    <template v-else>
      <li v-for="item in dataFeedList" :key="item.id" class="feed-list__item">
        <div class="feed-list__header">
          <AuthorBlock :data-item="item.author" class="feed-list__author" />
          <LikeBlock :data-item="item.like" class="feed-list__like" />
        </div>
        <FeedPreview :data-item="item.feed" class="feed-list__feed-preview" />
        <div class="feed-list__footer">
          <NuxtLink :to="{ path: '/' }" class="feed-list__read-more"
            >Read more...</NuxtLink
          >
          <TagsList :data-item="item.tags" class="feed-list__tags-list" />
        </div>
      </li>
    </template>
  </ul>
</template>

<script>
export default {
  data() {
    return {
      dataFeedList: [],
    }
  },

  async fetch() {
    const data = await this.$api.feed.getFeedList()
    this.dataFeedList = data
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

.feed-list__item {
  padding: $space-l 0;

  border-bottom: 2px solid $var-color-grey-light;
}

.feed-list__header {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;

  margin-bottom: $space-s;
}

.feed-list__author {
  margin-right: $space-m;
}

.feed-list__feed-preview {
  margin-bottom: $space-m;
}

.feed-list__footer {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
}

.feed-list__read-more {
  @include text-small;

  margin-right: $space-m;

  color: $var-color-grey;
  font-weight: $font-weight-light;
  text-decoration: none;
}

.feed-list__tags-list {
  justify-content: flex-end;
  max-width: 50%;
}
</style>
