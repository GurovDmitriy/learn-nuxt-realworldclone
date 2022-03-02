<template>
  <main class="main">
    <h2 class="main__caption visually-hidden">Main Content</h2>
    <TheMainColumnWrapper class="main__column-wrapper" />
  </main>
</template>

<script>
import { actionTypes as actionTypesTag } from "~/store/tag"
import { actionTypes as actionTypesFeed } from "~/store/feed"
import { actionTypes as actionTypesFeedCount } from "~/store/feedCount"
import { paginator } from "~/helpers/vars"

export default {
  async asyncData({ params, query, store }) {
    const tag = params.tag
    const page = query.page || 1
    const feedListPayload = `tags_like=${tag}&_page=${page}&_limit=${paginator.itemPerPage}`

    await Promise.allSettled([
      store.dispatch(actionTypesTag.fetchTags),
      store.dispatch(actionTypesFeed.fetchFeedList, feedListPayload),
      store.dispatch(actionTypesFeedCount.fetchFeedCount),
    ])
  },

  watchQuery: ["page"],
}
</script>
