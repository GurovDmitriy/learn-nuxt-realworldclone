<template>
  <main class="main-user-favorites">
    <AppHero class="main-user-favorites__hero">
      <TheTitleUser class="main-user-favorites__title-user" />
    </AppHero>
    <h2 class="main-user-favorites__caption visually-hidden">Main Content</h2>
    <TheColumnWrapperUser class="main-user-favorites__column-wrapper-user" />
    <AppPaginatorList
      v-if="getFeedCount"
      class="main-user-favorites__paginator-list"
      :data-item="getDataPaginator"
    />
  </main>
</template>

<script>
import { actionTypes as actionTypesUser } from "~/store/user"
import { actionTypes as actionTypesFeedList } from "~/store/feedList"
import { actionTypes as actionTypesFeedCount } from "~/store/feedCount"
import { paginator } from "~/helpers/vars"
import DataPaginator from "~/mixins/dataPaginator"

export default {
  mixins: [DataPaginator],
  layout: "user",

  async asyncData({ params, query, store }) {
    const userName = params.user
    const pageNum = query.page || 1
    const itemPerPage = paginator.feedList.main

    const userPayload = `userName=${userName}`
    await store.dispatch(actionTypesUser.fetchUser, userPayload)

    const feedListPayload = `like_like=${store.state.user.user.id}&_page=${pageNum}&_limit=${itemPerPage}`

    await Promise.allSettled([
      store.dispatch(actionTypesFeedList.fetchFeedList, feedListPayload),
      store.dispatch(actionTypesFeedCount.fetchFeedCount, "like"),
    ])
  },

  watchQuery: ["page"],
}
</script>

<style lang="scss">
.main-user-favorites {
  @include container;

  padding-bottom: $space-l;
}
</style>
