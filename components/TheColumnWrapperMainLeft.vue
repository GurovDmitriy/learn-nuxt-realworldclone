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
      v-if="feedListErrors"
      class="column-wrapper-main-left__refresh"
      @refreshData="refreshFeedList"
    />
    <AppFeedList
      v-if="feedList"
      :data-item="feedList"
      class="column-wrapper-main-left__feed-list"
    />
    <AppPaginatorList
      v-if="feedCount && dataPaginatorCount"
      class="main__paginator-list"
      :data-item="dataPaginatorListComp"
    />
    <AppNoContent v-else class="column-wrapper-main-left__no-content" />
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
      const barItemCurrentUser = getBarItemCurrentUser(this.currentUser)
      const barItemTag = getBarItemTag(this.$route.params.tag, this.$route.path)

      const barItems = getBarItems(
        ...this.dataFilterBar,
        barItemCurrentUser,
        barItemTag
      )

      // functions start

      function getBarItemCurrentUser(user) {
        const userCopy = { ...user }

        if (isNotEmptyObj(userCopy)) {
          return {
            content: "Your Feed",
            path: "/your",
          }
        }
        return null
      }

      function getBarItemTag(tag, path) {
        if (tag) {
          return {
            content: `# ${tag}`,
            path,
          }
        }
        return null
      }

      function getBarItems(...objs) {
        const data = []

        objs.forEach((item) => {
          if (item) {
            data.push(item)
          }
        })

        return data
      }

      // functions end

      return barItems
    },

    dataPaginatorListComp() {
      const delim = paginator.itemPerPage
      const count = this.dataPaginatorCount
      const pagePath = this.$route.path
      const pageCount = getArrRange(1, Math.ceil(count / delim))

      // functions start

      // funcitons end

      return {
        pagePath,
        pageCount,
      }
    },

    dataPaginatorCount() {
      let filter = ""

      if (this.$route.path === "/your" && isNotEmptyObj(this.currentUser)) {
        filter = this.currentUser.username
      } else {
        filter = this.$route.params.tag || "total"
      }

      let count = null

      if (filter === this.currentUser?.username) {
        count = this.feedCount.byUser[filter]
      } else if (filter === "total") {
        count = this.feedCount[filter]
      } else {
        count = this.feedCount.byTag[filter]
      }

      return count
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
