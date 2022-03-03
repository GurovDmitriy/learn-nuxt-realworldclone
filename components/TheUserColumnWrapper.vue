<template>
  <section class="user-column-wrapper">
    <h3 class="user-column-wrapper__caption visually-hidden">User Feed List</h3>
    <FilterBar
      :data-item="dataFilterBar"
      class="user-column-wrapper__filter-bar"
    />
    <FeedListPlaceholder
      v-if="feedListIsLoading"
      :data-item="dataFeedListPlaceholder"
      class="user-column-wrapper__placeholder"
    />
    <RefreshBlock
      v-else-if="feedListErrors"
      class="user-column-wrapper__refresh"
      @refreshData="refreshFeedList"
    />
    <FeedList
      v-else
      :data-item="feedList"
      class="user-column-wrapper__feed-list"
    />
  </section>
</template>

<script>
import { mapState } from "vuex"
import { actionTypes as actionTypesFeed } from "~/store/feed"
import { placeholder } from "~/helpers/vars"

export default {
  data() {
    return {
      dataFilterBar: [
        {
          content: "My Feed",
          path: `/users/${this.$route.params.user}`,
        },
        {
          content: "Favorites Feed",
          path: `/users/${this.$route.params.user}/favorites`,
        },
      ],
      dataFeedListPlaceholder: placeholder.feedListCount,
    }
  },

  computed: {
    ...mapState({
      feedList: ({ feed }) => feed.feedList,
      feedListIsLoading: ({ feed }) => feed.isLoading,
      feedListErrors: ({ feed }) => feed.errors,
    }),
  },

  methods: {
    async refreshFeedList() {
      await this.$store.dispatch(actionTypesFeed.fetchFeedList)
    },
  },
}
</script>
