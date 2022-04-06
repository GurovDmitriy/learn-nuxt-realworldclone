<template>
  <section class="column-wrapper-user">
    <h3 class="column-wrapper-user__caption visually-hidden">User Feed List</h3>
    <AppFilterBar
      :data-item="dataFilterBar"
      class="column-wrapper-user__filter-bar"
    />
    <AppFeedListPlaceholder
      v-if="getFeedListIsLoading"
      :data-item="configFeedListPlaceholder"
      class="column-wrapper-user__placeholder"
    />
    <AppRefresh
      v-if="getFeedListErrors"
      class="column-wrapper-user__refresh"
      @refreshData="fetchFeedList"
    />
    <AppFeedList
      v-if="getFeedList"
      :data-item="getFeedList"
      class="column-wrapper-user__feed-list"
    />
    <AppNoContent v-else class="column-wrapper-user__no-content" />
  </section>
</template>

<script>
import { mapState } from "vuex"
import { actionTypes as actionTypesFeedList } from "~/store/feedList"
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
      configFeedListPlaceholder: placeholder.feedListCount,
    }
  },

  computed: {
    ...mapState({
      getFeedList: ({ feedList }) => feedList.feedList,
      getFeedListIsLoading: ({ feedList }) => feedList.isLoading,
      getFeedListErrors: ({ feedList }) => feedList.errors,
    }),
  },

  methods: {
    async fetchFeedList() {
      await this.$store.dispatch(actionTypesFeedList.fetchFeedList)
    },
  },
}
</script>
