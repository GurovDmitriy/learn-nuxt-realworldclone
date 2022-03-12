<template>
  <section class="column-wrapper-user">
    <h3 class="column-wrapper-user__caption visually-hidden">User Feed List</h3>
    <AppFilterBar
      :data-item="dataFilterBar"
      class="column-wrapper-user__filter-bar"
    />
    <AppFeedListPlaceholder
      v-if="feedListIsLoading"
      :data-item="dataFeedListPlaceholder"
      class="column-wrapper-user__placeholder"
    />
    <AppRefresh
      v-if="feedListErrors"
      class="column-wrapper-user__refresh"
      @refreshData="refreshFeedList"
    />
    <AppFeedList
      v-if="feedList"
      :data-item="feedList"
      class="column-wrapper-user__feed-list"
    />
    <AppNoContent v-else class="column-wrapper-user__no-content" />
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
