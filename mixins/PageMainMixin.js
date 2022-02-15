import { mapState } from "vuex"
import { actionTypes as actionTypesTag } from "~/store/tag"
import { actionTypes as actionTypesFeed } from "~/store/feed"
import { actionTypes as actionTypesFeedCountByTag } from "~/store/feedCountByTag"

export default {
  async asyncData({ route, store }) {
    const pageSlug = route.params.slug
    const pageQuery = route.query

    const fetchFeedList = pageSlug ? "fetchFeedListByTag" : "fetchFeedList"

    await Promise.allSettled([
      store.dispatch(actionTypesTag.fetchTags),
      store.dispatch(actionTypesFeed[fetchFeedList], { pageSlug, pageQuery }),
      store.dispatch(actionTypesFeedCountByTag.fetchFeedCountByTag),
    ])

    return {
      pageConfig: {
        pageSlug,
        pageQuery,
      },
    }
  },

  data() {
    return {
      dataPaginatorList: {
        itemPerPage: 2,
      },
    }
  },

  computed: {
    ...mapState({
      feedCountByTag: ({ feedCountByTag }) => feedCountByTag.feedCountByTag,
    }),

    dataPaginatorListComp() {
      const data = {
        pageSlug: this.pageConfig.pageSlug,
        pageTotal: this.pageTotal,
      }

      return data
    },

    pageTotal() {
      const slug = this.pageSlug
      const delim = this.dataPaginatorList.itemPerPage

      const countItemByTag = slug
        ? this.feedCountByTag[slug]
        : this.feedCountByTag.total

      return Math.ceil(countItemByTag / delim)
    },
  },
}
