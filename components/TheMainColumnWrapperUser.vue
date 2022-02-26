<template>
  <section class="main-column-wrapper-user">
    <h3 class="main-column-wrapper-user__caption visually-hidden">
      User Feed List
    </h3>
    <FilterBar
      :data-item="dataFilterBar"
      class="main-column-wrapper-user__filter-bar"
    />
    <FeedListPlaceholder
      v-if="feedListIsLoading"
      :data-item="dataFeedListPlaceholder"
      class="main-column-wrapper-user__placeholder"
    />
    <RefreshBlock
      v-else-if="feedListErrors"
      class="main-column-wrapper-user__refresh"
      @refreshData="refreshFeedList"
    />
    <FeedList
      v-else
      :data-item="feedList"
      class="main-column-wrapper-user__feed-list"
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
        { content: "My Feed", path: this.$route.path },
        { content: "Favorites Articles" },
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
