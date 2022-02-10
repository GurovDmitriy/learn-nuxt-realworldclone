import { actionTypes as actionTypesTag } from "~/store/tag"
import { actionTypes as actionTypesFeed } from "~/store/feed"

export default {
  async asyncData({ params, store }) {
    const slug = params.slug
    const fetchFeedList = slug ? "fetchFeedListByTag" : "fetchFeedList"

    await Promise.allSettled([
      store.dispatch(actionTypesTag.fetchTags),
      store.dispatch(actionTypesFeed[fetchFeedList], slug),
    ])
  },
}
