<template>
  <section class="column-wrapper-feed">
    <h3 class="column-wrapper-feed__caption visually-hidden">Article</h3>
    <AppLoading v-if="feedIsLoading" class="column-wrapper-feed__loading" />
    <AppRefresh
      v-if="feedErrors"
      class="column-wrapper-feed__refresh"
      @refreshData="refreshFeed"
    />
    <AppFeed v-if="feed" :data-item="feed" class="column-wrapper-feed__feed" />
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
