import { mapState } from "vuex"
import { actionTypes as actionTypesTag } from "~/store/tag"
import { actionTypes as actionTypesFeed } from "~/store/feed"
import { actionTypes as actionTypesFeedCountByTag } from "~/store/feedCountByTag"

export default {
  async asyncData({ params, store }) {
    const slug = params.slug
    const fetchFeedList = slug ? "fetchFeedListByTag" : "fetchFeedList"

    await Promise.allSettled([
      store.dispatch(actionTypesTag.fetchTags),
      store.dispatch(actionTypesFeed[fetchFeedList], slug),
      store.dispatch(actionTypesFeedCountByTag.fetchFeedCountByTag),
    ])

    return {
      pageSlug: slug,
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
    dataPaginatorListComp() {
      const data = {
        pageSlug: this.pageSlug,
        pageTotal: this.pageTotal,
      }

      return data
    },

    ...mapState({
      feedCountByTag: ({ feedCountByTag }) => feedCountByTag.feedCountByTag,
    }),

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
