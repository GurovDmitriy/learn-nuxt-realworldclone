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

  computed: {
    dataPaginatorListComp() {
      const data = {
        pageSlug: this.pageSlug,
        pageTotal:
          this.feedCountByTag[this.pageSlug] || this.feedCountByTag.total,
      }

      return data
    },

    ...mapState({
      feedCountByTag: ({ feedCountByTag }) => feedCountByTag.feedCountByTag,
    }),
  },
}
