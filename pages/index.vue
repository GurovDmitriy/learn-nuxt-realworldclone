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
  // transition: "page",

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

  padding-top: $space-l;
  padding-bottom: $space-l;
}

.main__column-wrapper {
  margin-bottom: $space-l;

  &:last-child {
    margin-bottom: 0;
  }
}

// .page-enter-active,
// .page-leave-active {
//   transition: opacity 0.5s;
// }

// .page-enter,
// .page-leave-active {
//   opacity: 0%;
// }
</style>
