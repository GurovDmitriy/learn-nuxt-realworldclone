<template>
  <main class="main-user">
    <AppHero class="main-user__hero">
      <TheTitleUser />
    </AppHero>
    <h2 class="main-user__caption visually-hidden">Main Content</h2>
    <TheColumnWrapperUser class="main-user__column-wrapper-user" />
    <AppPaginatorList
      v-if="getFeedCount"
      class="main-user__paginator-list"
      :data-item="getDataPaginator"
    />
    <AppPlaceholderPaginator
      v-if="getIsLoadingFeedCount"
      class="main__placeholder-paginator"
    />
  </main>
</template>

<script>
import { mapState } from "vuex"
import { actionTypes as actionTypesUser } from "~/store/user"
import { actionTypes as actionTypesFeedList } from "~/store/feedList"
import { actionTypes as actionTypesFeedCount } from "~/store/feedCount"
import { paginator } from "~/helpers/vars"
import DataPaginator from "~/mixins/dataPaginator"

export default {
  mixins: [DataPaginator],
  layout: "user",

  async asyncData({ params, query, store, error }) {
    try {
      const userName = params.user
      const pageNum = query.page || 1
      const itemPerPage = paginator.feedList.main

      const userPayload = `userName=${userName}`
      const feedListPayload = `userName=${userName}&_page=${pageNum}&_limit=${itemPerPage}`

      await Promise.allSettled([
        store.dispatch(actionTypesUser.fetchUser, userPayload),
        store.dispatch(actionTypesFeedList.fetchFeedList, feedListPayload),
        store.dispatch(actionTypesFeedCount.fetchFeedCount, "user"),
      ])

      return {
        userName,
      }
    } catch (err) {
      error(err)
    }
  },

  head() {
    return {
      title: `User ${this.userName}`,
      meta: [
        {
          name: "description",
          content: `Template for learn Nuxt 2: User ${this.userName}`,
          hid: "description",
        },
      ],
    }
  },

  computed: {
    ...mapState({
      getFeedCount: ({ feedCount }) => feedCount.feedCount,
      getIsLoadingFeedCount: ({ feedCount }) => feedCount.isLoading,
    }),
  },

  watchQuery: ["page"],
}
</script>

<style lang="scss">
.main-user {
  @include container;

  padding-bottom: $space-l;
}
</style>
