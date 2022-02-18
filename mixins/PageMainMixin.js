import { mapState } from "vuex"
import { actionTypes as actionTypesTag } from "~/store/tag"
import { actionTypes as actionTypesFeed } from "~/store/feed"
import { actionTypes as actionTypesFeedCountByTag } from "~/store/feedCountByTag"
import { pageMainItemPerPage as itemPerPage } from "~/helpers/configPaginatorList"

export default {
  async asyncData({ params, store }) {
    const pageId = params.id || 1
    const feedListPayload = `_page=${pageId}&_limit=${itemPerPage}`

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
      const data = {
        pagePath: "/page",
        pageCount: this.pageCount,
      }

      return data
    },

    pageCount() {
      const count = this.feedCountByTag.total
      const delim = itemPerPage

      return Math.ceil(count / delim)
    },
  },
}
