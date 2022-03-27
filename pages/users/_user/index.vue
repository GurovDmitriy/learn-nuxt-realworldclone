<template>
  <main class="main">
    <h2 class="main__caption visually-hidden">Main Content</h2>
    <TheColumnWrapperUser class="main__column-wrapper" />
    <AppPaginatorList
      v-if="feedCount"
      class="main__paginator-list"
      :data-item="getPageCount"
      :path-page="$route.path"
    />
  </main>
</template>

<script>
import { mapState } from "vuex"
import { actionTypes as actionTypesUser } from "~/store/user"
import { actionTypes as actionTypesFeed } from "~/store/feed"
import { actionTypes as actionTypesFeedCount } from "~/store/feedCount"
import { getArrRange } from "~/helpers/utils"
import { paginator } from "~/helpers/vars"

export default {
  layout: "user",

  async asyncData({ params, query, store }) {
    const username = params.user
    const pageNum = query.page || 1

    const userPayload = `username=${username}`
    const feedListPayload = `author.name=${username}&_page=${pageNum}&_limit=${paginator.index}`

    await Promise.allSettled([
      store.dispatch(actionTypesUser.fetchUser, userPayload),
      store.dispatch(actionTypesFeed.fetchFeedList, feedListPayload),
      store.dispatch(actionTypesFeedCount.fetchFeedCount, "user"),
    ])
  },

  computed: {
    ...mapState({
      feedCount: ({ feedCount }) => feedCount.feedCount,
    }),

    getPageCount() {
      const filter = this.$route.params.user
      const count = this.feedCount[filter] || 1
      const delim = paginator.itemPerPage
      const pageCount = getArrRange(1, Math.ceil(count / delim))

      return pageCount
    },
  },

  watchQuery: ["page"],
}
</script>

<style lang="scss">
.main {
  @include container;

  padding-top: $space-l;
  padding-bottom: $space-l;
}

.main__column-wrapper {
  margin-bottom: $space-l;
}
</style>
