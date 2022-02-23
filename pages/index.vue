<template>
  <main class="main">
    <h2 class="main__caption visually-hidden">Main Content</h2>
    <TheMainColumnWrapper class="main__column-wrapper" />
    <PaginatorList
      class="main__paginator-list"
      :data-item="dataPaginatorListComp"
    />
  </main>
</template>

<script>
import { mapState } from "vuex"
import { actionTypes as actionTypesTag } from "~/store/tag"
import { actionTypes as actionTypesFeed } from "~/store/feed"
import { actionTypes as actionTypesFeedCountByTag } from "~/store/feedCountByTag"
import { pageMainItemPerPage as itemPerPage } from "~/helpers/configPaginatorList"
import { getArrRange } from "~/helpers/utils"

export default {
  async asyncData({ query, store }) {
    const pageNum = query.page || 1
    const feedListPayload = `_page=${pageNum}&_limit=${itemPerPage}`

    await Promise.allSettled([
      store.dispatch(actionTypesTag.fetchTags),
      store.dispatch(actionTypesFeed.fetchFeedList, feedListPayload),
      store.dispatch(actionTypesFeedCountByTag.fetchFeedCountByTag),
    ])
  },

  computed: {
    ...mapState({
      feedCountByTag: ({ feedCountByTag }) => feedCountByTag.feedCountByTag,
    }),

    dataPaginatorListComp() {
      const count = this.feedCountByTag.total
      const delim = itemPerPage

      const pagePath = this.$route.path
      const pageCount = getArrRange(1, Math.ceil(count / delim))

      return {
        pagePath,
        pageCount,
      }
    },
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
