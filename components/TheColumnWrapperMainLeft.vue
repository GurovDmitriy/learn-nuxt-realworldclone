<template>
  <section class="column-wrapper-main-left">
    <h3 class="column-wrapper-main-left__caption visually-hidden">Feed List</h3>
    <AppFilterBar
      :data-item="getDataFilterBar"
      class="column-wrapper-main-left__filter-bar"
    />
    <AppFeedListPlaceholder
      v-if="getIsLoadingFeedList"
      :data-item="config.feedListPlaceholder"
      class="column-wrapper-main-left__placeholder"
    />
    <AppRefresh
      v-if="getErrorsFeedList"
      class="column-wrapper-main-left__refresh"
      @refreshData="fetchFeedList"
    />
    <AppFeedList
      v-if="getFeedList"
      :data-item="getFeedList"
      class="column-wrapper-main-left__feed-list"
      @toggleLike="toggleLike($event)"
    />
    <AppPaginatorList
      v-if="getFeedCount"
      class="main__paginator-list"
      :data-item="getCountPage"
      :path-page="$route.path"
    />
    <!-- <AppNoContent v-else class="column-wrapper-main-left__no-content" /> -->
  </section>
</template>

<script>
import { mapState, mapGetters } from "vuex"
import { actionTypes as actionTypesFeedList } from "~/store/feedList"
import { getterTypes as getterTypesAuth } from "~/store/auth"
import { getArrRange, isNotEmptyObj } from "~/helpers/utils"
import { paginator, placeholder } from "~/helpers/vars"

export default {
  data() {
    return {
      filterBar: [{ content: "Global Feed", path: "/" }],

      config: {
        feedListPlaceholder: placeholder.index,
      },
    }
  },

  computed: {
    ...mapState({
      getFeedList: ({ feedList }) => feedList.feedList,
      getErrorsFeedList: ({ feedList }) => feedList.errors,
      getIsLoadingFeedList: ({ feedList }) => feedList.isLoading,

      getFeedCount: ({ feedCount }) => feedCount.feedCount,
      getIsLoadingFeedCount: ({ feedCount }) => feedCount.isLoading,
      getErrorsFeedCount: ({ feedCount }) => feedCount.errors,
    }),

    ...mapGetters({
      getCurrentUser: getterTypesAuth.getCurrentUser,
      getIsLoggedIn: getterTypesAuth.getIsLoggedIn,
    }),

    getDataFilterBar() {
      const data = [...this.filterBar]
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
        return this.getCurrentUser.userName
      } else {
        return this.$route.params.tag || "total"
      }
    },
  },

  methods: {
    async fetchFeedList() {
      await this.$store.dispatch(actionTypesFeedList.fetchFeedList)
    },

    async toggleLike(feedId) {
      if (!this.getIsLoggedIn) return this.$router.push({ path: "/login" })

      const userId = this.getCurrentUser.id
      const index = this.getFeedList.findIndex((item) => item.id === feedId)
      const like = this.getFeedList[index].like

      const likeNew = getNewLike()

      function getNewLike() {
        if (like.findIndex((item) => item === userId) === -1) {
          return [...like, userId]
        } else {
          return like.filter((item) => item !== userId)
        }
      }

      await this.$store.dispatch(actionTypesFeedList.toggleLikeFeed, {
        id: feedId,
        indexFeed: index,
        data: { like: likeNew },
      })
    },
  },
}
</script>

<style lang="scss">
.column-wrapper-main-left__feed-list {
  margin-bottom: $space-l;
}
</style>
