<template>
  <main class="main">
    <h2 class="main__caption visually-hidden">Main Content</h2>
    <TheColumnWrapperMain class="main__column-wrapper" />
  </main>
</template>

<script>
import { getterTypes as getterTypesAuth } from "~/store/auth"
import { actionTypes as actionTypesTag } from "~/store/tag"
import { actionTypes as actionTypesFeed } from "~/store/feed"
import { actionTypes as actionTypesFeedCount } from "~/store/feedCount"
import { paginator } from "~/helpers/vars"

export default {
  async asyncData({ query, store }) {
    const username = store.getters[getterTypesAuth.currentUser].username
    const pageNum = query.page || 1
    const feedListPayload = `author.name=${username}&_page=${pageNum}&_limit=${paginator.itemPerPage}`

    await Promise.allSettled([
      store.dispatch(actionTypesTag.fetchTags),
      store.dispatch(actionTypesFeed.fetchFeedList, feedListPayload),
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

  &:last-child {
    margin-bottom: 0;
  }
}
</style>
