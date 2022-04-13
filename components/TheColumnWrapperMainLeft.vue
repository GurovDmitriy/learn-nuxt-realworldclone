<template>
  <section class="column-wrapper-main-left">
    <h3 class="column-wrapper-main-left__caption visually-hidden">Feed List</h3>
    <AppFilterBar
      :data-item="getDataFilterBar"
      class="column-wrapper-main-left__filter-bar"
    />
    <AppFeedListPlaceholder
      v-if="getIsLoadingFeedList"
      :data-item="placeholderCount"
      class="column-wrapper-main-left__placeholder"
    />
    <AppRefresh
      v-if="getErrorsFeedList"
      class="column-wrapper-main-left__refresh"
      @clickBtn="fetchFeedList"
    />
    <AppFeedList
      v-if="getFeedList"
      :data-item="getDataFeedList"
      class="column-wrapper-main-left__feed-list"
      @toggleLike="toggleLike($event)"
    />
    <AppNoContent
      v-if="getIsVisibleNoContent"
      class="column-wrapper-main-left__no-content"
    />
    <AppPaginatorList
      v-if="getFeedCount"
      class="main__paginator-list"
      :data-item="getDataPaginator"
      :path-page="$route.path"
    />
  </section>
</template>

<script>
import { mapState, mapGetters } from "vuex"
import { actionTypes as actionTypesFeedList } from "~/store/feedList"
import { getterTypes as getterTypesAuth } from "~/store/auth"
import {
  getArrRange,
  getStrKebabCase,
  isNotEmptyArr,
  isNotEmptyObj,
} from "~/helpers/utils"
import { paginator, placeholder } from "~/helpers/vars"

export default {
  data() {
    return {
      filterBar: [{ content: "Global Feed", path: "/" }],
      placeholderCount: placeholder.feedList.main,

      config: {
        feedList: {
          imgAuthor: {
            width: 38,
            height: 38,
          },
          btnLike: {
            type: "button",
            iconName: "heart-fill",
            iconDesc: "heart",
          },
        },
      },
    }
  },

  computed: {
    ...mapState({
      getFeedList: ({ feedList }) => feedList.feedList,
      getIsLoadingFeedList: ({ feedList }) => feedList.isLoadingFeedList,
      getErrorsFeedList: ({ feedList }) => feedList.errorsFeedList,
      getIsLoadingToggleLike: ({ feedList }) => feedList.isLoadingToggleLike,
      getFeedCount: ({ feedCount }) => feedCount.feedCount,
      getIsLoadingFeedCount: ({ feedCount }) => feedCount.isLoading,
      getErrorsFeedCount: ({ feedCount }) => feedCount.errors,
    }),

    ...mapGetters({
      getCurrentUser: getterTypesAuth.getCurrentUser,
      getIsLoggedIn: getterTypesAuth.getIsLoggedIn,
    }),

    // filterBar start
    getDataFilterBar() {
      const bars = [...this.filterBar]

      setBars(this.getBarItemCurrentUser, this.getBarItemTag)

      function setBars(...args) {
        args.forEach((item) => {
          if (item) bars.push(item)
        })
      }

      const data = bars.map((item) => {
        item.isActive = this.$route.path === item.path
        return item
      })

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
    // filterBar end

    // feedList start
    getDataFeedList() {
      const currentUserId = this.getCurrentUser ? this.getCurrentUser.id : null
      const config = this.config

      const data = this.getFeedList.map((item) => {
        const author = getAuthor(item)
        const btnLike = getBtnLike(item)
        const content = getContent(item)
        const titleFeed = getStrKebabCase(item.title)
        const pathFeed = `/users/${titleFeed}`

        return {
          feedId: item.id,
          author,
          btnLike,
          content,
          tags: item.tags,
          pathFeed,
        }
      })

      function getAuthor(item) {
        const pathLink = `/users/${item.userName}`

        return {
          pathLink,
          userName: item.userName,
          image: item.image,
          width: config.feedList.imgAuthor.width,
          height: config.feedList.imgAuthor.height,
          alt: item.userName,
          placeholder: "placeholder-avatar.png",
          time: item.time,
        }
      }

      function getBtnLike(item) {
        const count = item.like.length
        const isActive =
          item.like.findIndex((item) => item === currentUserId) !== -1

        return {
          like: item.like,
          count,
          isActive,
          type: config.feedList.btnLike.type,
          iconName: config.feedList.btnLike.iconName,
          iconDesc: config.feedList.btnLike.iconDesc,
        }
      }

      function getContent(item) {
        return {
          title: item.title,
          preview: item.preview,
        }
      }

      return data
    },
    // feedList end

    // paginator start
    getDataPaginator() {
      const delim = paginator.feedList.main
      const countItem = this.getFeedCount[this.getFilter] || 1
      const countPages = getArrRange(1, Math.ceil(countItem / delim))

      const query = this.$route.query
      const queryPage = this.$route.query.page

      return countPages.map((item, index) => {
        let isActive = null

        if (index === 0 && !isNotEmptyObj(query)) {
          isActive = true
        } else {
          isActive = queryPage === item || queryPage === 1
        }

        return {
          page: item,
          pathPage: "/",
          isActive,
        }
      })
    },

    getFilter() {
      if (this.$route.path === "/your" && isNotEmptyObj(this.getCurrentUser)) {
        return this.getCurrentUser.userName
      } else {
        return this.$route.params.tag || "total"
      }
    },
    // paginator end

    getIsVisibleNoContent() {
      return (
        !isNotEmptyArr(this.getFeedList) &&
        !this.getIsLoadingFeedList &&
        !this.getIsLoadingFeedCount
      )
    },
  },

  methods: {
    async fetchFeedList() {
      await this.$store.dispatch(actionTypesFeedList.fetchFeedList)
    },

    async toggleLike(feedId) {
      if (!this.getIsLoggedIn) return this.$router.push({ path: "/login" })
      if (this.getIsLoadingToggleLike) return false

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

.column-wrapper-main-left__refresh {
  color: $var-color-default;
}
</style>
