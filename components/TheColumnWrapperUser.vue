<template>
  <section class="column-wrapper-user">
    <h3 class="column-wrapper-user__caption visually-hidden">User Feed List</h3>
    <AppFilterBar
      :data-item="filterBar"
      class="column-wrapper-user__filter-bar"
    />
    <AppFeedListPlaceholder
      v-if="getIsLoadingFeedList"
      :data-item="config.feedListPlaceholder"
      class="column-wrapper-user__placeholder"
    />
    <AppRefresh
      v-if="getErrorsFeedList"
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
      filterBar: [
        {
          content: "My Feed",
          path: `/users/${this.$route.params.user}`,
        },
        {
          content: "Favorites Feed",
          path: `/users/${this.$route.params.user}/favorites`,
        },
      ],

      config: {
        feedListPlaceholder: placeholder.index,
      },
    }
  },

  computed: {
    ...mapState({
      getFeedList: ({ feedList }) => feedList.feedList,
      getIsLoadingFeedList: ({ feedList }) => feedList.isLoading,
      getErrorsFeedList: ({ feedList }) => feedList.errors,
    }),
  },

  methods: {
    async fetchFeedList() {
      await this.$store.dispatch(actionTypesFeedList.fetchFeedList)
    },
  },
}
</script>
