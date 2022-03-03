<template>
  <section class="article-column-wrapper">
    <h3 class="article-column-wrapper__caption visually-hidden">Article</h3>
    <LoadingBlock
      v-if="feedIsLoading"
      class="article-column-wrapper__loading"
    />
    <RefreshBlock
      v-else-if="feedErrors"
      class="article-column-wrapper__refresh"
      @refreshData="refreshFeed"
    />
    <ArticleBlock
      v-else
      :data-item="feed"
      class="article-column-wrapper__feed-list"
    />
  </section>
</template>

<script>
import { mapState } from "vuex"
import { actionTypes as actionTypesFeed } from "~/store/feed"

export default {
  computed: {
    ...mapState({
      feed: ({ feed }) => feed.feed,
      feedIsLoading: ({ feed }) => feed.isLoading,
      feedErrors: ({ feed }) => feed.errors,
    }),
  },

  methods: {
    async refreshFeedList() {
      await this.$store.dispatch(actionTypesFeed.fetchFeed)
    },
  },
}
</script>
