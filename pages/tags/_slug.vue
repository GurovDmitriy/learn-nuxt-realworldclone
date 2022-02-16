<template>
  <main class="main">
    <h2 class="main__caption visually-hidden">Main Content</h2>
    <MainColumnWrapper class="main__column-wrapper" />
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

export default {
  async asyncData({ params, store }) {
    const pageId = params.id || 1
    const feedListPayload = `?_page=${pageId}&_limit=${itemPerPage}`

    await Promise.allSettled([
      store.dispatch(actionTypesTag.fetchTags),
      store.dispatch(actionTypesFeed.fetchFeedList, feedListPayload),
      store.dispatch(actionTypesFeedCountByTag.fetchFeedCountByTag),
    ])
  },

  data() {
    return {
      dataPaginatorListConfig: {
        itemPerPage,
      },
    }
  },

  computed: {
    ...mapState({
      feedCountByTag: ({ feedCountByTag }) => feedCountByTag.feedCountByTag,
    }),

    dataPaginatorListComp() {
      const data = {
        pagePath: "/page",
        pageCount: this.pageCount,
      }

      return data
    },

    pageCount() {
      const count = this.feedCountByTag.total
      const delim = this.dataPaginatorListConfig.itemPerPage

      return Math.ceil(count / delim)
    },
  },
}
</script>
