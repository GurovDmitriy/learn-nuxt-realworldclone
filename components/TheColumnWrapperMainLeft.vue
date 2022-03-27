<template>
  <section class="column-wrapper-main-left">
    <h3 class="column-wrapper-main-left__caption visually-hidden">Feed List</h3>
    <AppFilterBar
      :data-item="getDataFilterBar"
      class="column-wrapper-main-left__filter-bar"
    />
    <AppFeedListPlaceholder
      v-if="getFeedListIsLoading"
      :data-item="configFeedListPlaceholder"
      class="column-wrapper-main-left__placeholder"
    />
    <AppRefresh
      v-if="getFeedListErrors"
      class="column-wrapper-main-left__refresh"
      @refreshData="fetchFeedList"
    />
    <AppFeedList
      v-if="getFeedList"
      :data-item="getFeedList"
      class="column-wrapper-main-left__feed-list"
    />
    <AppPaginatorList
      v-if="getFeedCount"
      class="main__paginator-list"
      :data-item="getCountPage"
      :path-page="$route.path"
    />
    <AppNoContent v-else class="column-wrapper-main-left__no-content" />
  </section>
</template>

<script>
import { mapState, mapGetters } from "vuex"
import { actionTypes as actionTypesFeed } from "~/store/feed"
import { getterTypes as getterTypesFeed } from "~/store/auth"
import { getArrRange, isNotEmptyObj } from "~/helpers/utils"
import { paginator, placeholder } from "~/helpers/vars"

export default {
  data() {
    return {
      dataFilterBar: [{ content: "Global Feed", path: "/" }],
      configFeedListPlaceholder: placeholder.index,
    }
  },

  computed: {
    ...mapState({
      getFeedList: ({ feed }) => feed.feedList,
      getFeedListIsLoading: ({ feed }) => feed.isLoading,
      getFeedListErrors: ({ feed }) => feed.errors,
      getFeedCount: ({ feedCount }) => feedCount.feedCount,
    }),

    ...mapGetters({
      getCurrentUser: getterTypesFeed.currentUser,
    }),

    getDataFilterBar() {
      const data = [...this.dataFilterBar]
      setBars(this.getBarItemCurrentUser, this.getBarItemTag)

      function setBars(...args) {
        args.forEach((item) => {
          if (item) data.push(item)
        })
      }

      return data
    },

    getBarItemCurrentUser() {
      if (isNotEmptyObj(this.getCurrentUser)) {
        return {
          content: "Your Feed",
          path: "/your",
        }
      }
      return null
    },

    getBarItemTag() {
      if (this.$route.params.tag) {
        return {
          content: `# ${this.$route.params.tag}`,
          path: this.$route.path,
        }
      }
      return null
    },

    getCountPage() {
      const delim = paginator.index
      const countItem = this.getFeedCount[this.getFilter] || 1
      return getArrRange(1, Math.ceil(countItem / delim))
    },

    getFilter() {
      if (this.$route.path === "/your" && isNotEmptyObj(this.getCurrentUser)) {
        return this.getCurrentUser.username
      } else {
        return this.$route.params.tag || "total"
      }
    },
  },

  methods: {
    async fetchFeedList() {
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
