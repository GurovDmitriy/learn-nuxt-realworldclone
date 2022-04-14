<template>
  <main class="main-tags">
    <AppHero class="main-tags__hero">
      <TheTitle class="main-tags__title" />
    </AppHero>
    <h2 class="main-tags__caption visually-hidden">Main Content</h2>
    <TheColumnWrapperMain class="main-tags__column-wrapper-main" />
  </main>
</template>

<script>
import { actionTypes as actionTypesTag } from "~/store/tag"
import { actionTypes as actionTypesFeedList } from "~/store/feedList"
import { actionTypes as actionTypesFeedCount } from "~/store/feedCount"
import { paginator } from "~/helpers/vars"

export default {
  async asyncData({ params, query, store }) {
    const tag = params.tag
    const page = query.page || 1
    const itemPerPage = paginator.feedList.main
    const feedListPayload = `tags_like=${tag}&_page=${page}&_limit=${itemPerPage}`

    await Promise.allSettled([
      store.dispatch(actionTypesTag.fetchTagsPopular),
      store.dispatch(actionTypesFeedList.fetchFeedList, feedListPayload),
      store.dispatch(actionTypesFeedCount.fetchFeedCount, "tag"),
    ])
  },

  watchQuery: ["page"],
}
</script>

<style lang="scss">
.main-tags {
  @include container;

  padding-bottom: $space-l;
}
</style>
