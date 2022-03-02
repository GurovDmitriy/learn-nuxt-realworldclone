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
    <PaginatorList
      class="main__paginator-list"
      :data-item="dataPaginatorListComp"
    />
  </section>
</template>

<script>
import { mapState } from "vuex"
import { actionTypes as actionTypesFeed } from "~/store/feed"
import { getArrRange } from "~/helpers/utils"
import { paginator } from "~/helpers/vars"

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
      feedCount: ({ feedCount }) => feedCount.feedCount,
    }),

    dataFilterBarComp() {
      const barItems = this.dataFilterBar.map((item) => item)

      if (this.$route.params.tag) {
        barItems.push({
          content: `# ${this.$route.params.tag}`,
          path: this.$route.path,
        })
      }

      return barItems
    },

    dataPaginatorListComp() {
      const tag = this.$route.params.tag || "total"
      const delim = paginator.itemPerPage
      let count = null

      if(tag === "total") {
        count = this.feedCount[tag]
      } else {
        count = this.feedCount.byTag[tag]
      }

      const pagePath = this.$route.path
      const pageCount = getArrRange(1, Math.ceil(count / delim))

      return {
        pagePath,
        pageCount,
      }
    },
  },

  methods: {
    async refreshFeedList() {
      await this.$store.dispatch(actionTypesFeed.fetchFeedList)
    },
  },
}
</script>

<style lang="scss">
.main-column-wrapper-left__feed-list {
  margin-bottom: $space-l;
}
</style>
