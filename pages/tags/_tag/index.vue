<template>
  <main class="main">
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
  async asyncData({ params, query, store }) {
    const tag = params.tag
    const page = query.page || 1
    const feedListPayload = `tags_like=${tag}&_page=${page}&_limit=${paginator.index}`

    await Promise.allSettled([
      store.dispatch(actionTypesTag.fetchTags),
      store.dispatch(actionTypesFeedList.fetchFeedList, feedListPayload),
      store.dispatch(actionTypesFeedCount.fetchFeedCount, "tag"),
    ])
  },

  watchQuery: ["page"],
}
</script>
