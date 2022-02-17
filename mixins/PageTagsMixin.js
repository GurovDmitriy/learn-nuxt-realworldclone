import { mapState } from "vuex"
import { actionTypes as actionTypesTag } from "~/store/tag"
import { actionTypes as actionTypesFeed } from "~/store/feed"
import { actionTypes as actionTypesFeedCountByTag } from "~/store/feedCountByTag"
import { pageMainItemPerPage as itemPerPage } from "~/helpers/configPaginatorList"

export default {
  async asyncData({ params, store }) {
    const pageSlug = params.slug
    const pageId = params.id || 1
    const feedListPayload = `tags_like=${pageSlug}&_page=${pageId}&_limit=${itemPerPage}`

    await Promise.allSettled([
      store.dispatch(actionTypesTag.fetchTags),
      store.dispatch(actionTypesFeed.fetchFeedList, feedListPayload),
      store.dispatch(actionTypesFeedCountByTag.fetchFeedCountByTag),
    ])

    return {
      asyncDataFeedListConfig: {
        pageSlug,
      },
    }
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
        pagePath: `/tags/${this.asyncDataFeedListConfig.pageSlug}/page`,
        pageCount: this.pageCount,
      }

      return data
    },

    pageCount() {
      const count = this.feedCountByTag[this.asyncDataFeedListConfig.pageSlug]
      const delim = this.dataPaginatorListConfig.itemPerPage

      return Math.ceil(count / delim)
    },
  },
}
