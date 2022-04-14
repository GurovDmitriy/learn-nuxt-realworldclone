<template>
  <main class="main">
    <AppHero class="main__hero">
      <TheTitle class="main__title" />
    </AppHero>
    <h2 class="main__caption visually-hidden">Main Content</h2>
    <TheColumnWrapperMain class="main__column-wrapper" />
  </main>
</template>

<script>
import { actionTypes as actionTypesTag } from "~/store/tag"
import { actionTypes as actionTypesFeedList } from "~/store/feedList"
import { actionTypes as actionTypesFeedCount } from "~/store/feedCount"
import { paginator } from "~/helpers/vars"

export default {
  async asyncData({ query, store }) {
    const pageNum = query.page || 1
    const itemPerPage = paginator.feedList.main
    const feedListPayload = `_page=${pageNum}&_limit=${itemPerPage}`

    await Promise.allSettled([
      store.dispatch(actionTypesTag.fetchTagsPopular),
      store.dispatch(actionTypesFeedList.fetchFeedList, feedListPayload),
      store.dispatch(actionTypesFeedCount.fetchFeedCount, "total"),
    ])
  },

  watchQuery: ["page"],
}
</script>

<style lang="scss">
.main {
  @include container;

  padding-bottom: $space-l;
}
</style>
