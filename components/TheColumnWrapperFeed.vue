<template>
  <section class="column-wrapper-feed">
    <h3 class="column-wrapper-feed__caption visually-hidden">Article</h3>
    <AppLoading v-if="getFeedIsLoading" class="column-wrapper-feed__loading" />
    <AppRefresh
      v-if="getFeedErrors"
      class="column-wrapper-feed__refresh"
      @refreshData="refreshFeed"
    />
    <AppFeed
      v-if="getFeed"
      :data-item="getFeed"
      class="column-wrapper-feed__feed"
    />
  </section>
</template>

<script>
import { mapState } from "vuex"
import { actionTypes as actionTypesFeed } from "~/store/feed"

export default {
  computed: {
    ...mapState({
      getFeed: ({ feed }) => feed.feed,
      getFeedIsLoading: ({ feed }) => feed.isLoading,
      getFeedErrors: ({ feed }) => feed.errors,
    }),
  },

  methods: {
    async refreshFeedList() {
      await this.$store.dispatch(actionTypesFeed.fetchFeed)
    },
  },
}
</script>
