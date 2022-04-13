<template>
  <main class="main">
    <h2 class="main__caption visually-hidden">Main Content</h2>
    <TheColumnWrapperUser class="main__column-wrapper" />
    <AppPaginatorList
      v-if="getFeedCount"
      class="main__paginator-list"
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
    const feedListPayload = `userName=${userName}&_page=${pageNum}&_limit=${itemPerPage}`

    await Promise.allSettled([
      store.dispatch(actionTypesUser.fetchUser, userPayload),
      store.dispatch(actionTypesFeedList.fetchFeedList, feedListPayload),
      store.dispatch(actionTypesFeedCount.fetchFeedCount, "user"),
    ])
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
