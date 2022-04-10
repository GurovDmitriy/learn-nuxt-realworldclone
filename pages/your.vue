<template>
  <main class="main">
    <h2 class="main__caption visually-hidden">Main Content</h2>
    <TheColumnWrapperMain class="main__column-wrapper" />
  </main>
</template>

<script>
import { getterTypes as getterTypesAuth } from "~/store/auth"
import { actionTypes as actionTypesTag } from "~/store/tag"
import { actionTypes as actionTypesFeedList } from "~/store/feedList"
import { actionTypes as actionTypesFeedCount } from "~/store/feedCount"
import { paginator } from "~/helpers/vars"

export default {
  middleware: ["auth"],

  async asyncData({ query, store }) {
    const userName = store.getters[getterTypesAuth.getCurrentUser].userName
    const pageNum = query.page || 1
    const feedListPayload = `userName=${userName}&_page=${pageNum}&_limit=${paginator.index}`

    await Promise.allSettled([
      store.dispatch(actionTypesTag.fetchTagsPopular),
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

  &:last-child {
    margin-bottom: 0;
  }
}
</style>
