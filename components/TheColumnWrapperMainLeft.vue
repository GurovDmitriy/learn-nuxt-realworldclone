<template>
  <section class="column-wrapper-main-left">
    <h3 class="column-wrapper-main-left__caption visually-hidden">Feed List</h3>
    <AppFilterBar
      :data-item="dataFilterBarComp"
      class="column-wrapper-main-left__filter-bar"
    />
    <AppFeedListPlaceholder
      v-if="feedListIsLoading"
      :data-item="dataFeedListPlaceholder"
      class="column-wrapper-main-left__placeholder"
    />
    <AppRefresh
      v-else-if="feedListErrors"
      class="column-wrapper-main-left__refresh"
      @refreshData="refreshFeedList"
    />
    <AppFeedList
      v-else-if="feedList.length"
      :data-item="feedList"
      class="column-wrapper-main-left__feed-list"
    />
    <AppNoContent v-else class="column-wrapper-main-left__no-content" />
    <AppPaginatorList
      class="main__paginator-list"
      :data-item="dataPaginatorListComp"
    />
  </section>
</template>

<script>
import { mapState, mapGetters } from "vuex"
import { actionTypes as actionTypesFeed } from "~/store/feed"
import { getterTypes as getterTypesFeed } from "~/store/auth"
import { getArrRange, isNotEmptyObj } from "~/helpers/utils"
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

    ...mapGetters({
      currentUser: getterTypesFeed.currentUser,
    }),

    dataFilterBarComp() {
      const barItems = this.dataFilterBar.map((item) => item)

      if (isNotEmptyObj(this.currentUser)) {
        barItems.push({
          content: "Your Feed",
          path: "/your",
        })
      }

      if (this.$route.params.tag) {
        barItems.push({
          content: `# ${this.$route.params.tag}`,
          path: this.$route.path,
        })
      }

      return barItems
    },

    dataPaginatorListComp() {
      let filter = ""

      if (this.$route.path === "/your" && isNotEmptyObj(this.currentUser)) {
        filter = this.currentUser.username
      } else {
        filter = this.$route.params.tag || "total"
      }

      const delim = paginator.itemPerPage
      let count = null

      if (filter === this.currentUser?.username) {
        count = this.feedCount.byUser[filter] || 1
      } else if (filter === "total") {
        count = this.feedCount[filter]
      } else {
        count = this.feedCount.byTag[filter]
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
.column-wrapper-main-left__feed-list {
  margin-bottom: $space-l;
}
</style>
