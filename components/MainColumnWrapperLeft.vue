<template>
  <section class="main-column-wrapper-left">
    <h3 class="main-column-wrapper-left__caption visually-hidden">Feed List</h3>
    <FilterBar
      :data-item="dataFilterBarComp"
      class="main-column-wrapper-left__filter-bar"
    />
    <FeedListPlaceholder
      v-if="feedListIsLoading"
      :data-item="dataFeedListPlaceholder"
      class="main-column-wrapper-left__placeholder"
    />
    <RefreshBlock
      v-else-if="feedListErrors"
      class="main-column-wrapper-left__refresh"
      @refreshData="refreshFeedList"
    />
    <FeedList
      v-else
      :data-item="feedList"
      class="main-column-wrapper-left__feed-list"
    />
  </section>
</template>

<script>
import { mapState } from "vuex"
import { actionTypes as actionTypesFeed } from "~/store/feed"

export default {
  data() {
    return {
      dataFilterBar: [{ content: "Global Feed", path: "/" }],
      dataFeedListPlaceholder: 10,
    }
  },

  computed: {
    ...mapState({
      feedList: ({ feed }) => feed.feedList,
      feedListIsLoading: ({ feed }) => feed.isLoading,
      feedListErrors: ({ feed }) => feed.errors,
    }),

    dataFilterBarComp({ $route }) {
      const barItems = this.dataFilterBar.map((item) => item)

      if ($route.params.slug) {
        barItems.push({
          content: `# ${$route.params.slug}`,
          path: `${$route.fullPath}`,
        })
      }

      return barItems
    },
  },

  methods: {
    async refreshFeedList() {
      await this.$store.dispatch(actionTypesFeed.fetchFeedList)
    },
  },
}
</script>
