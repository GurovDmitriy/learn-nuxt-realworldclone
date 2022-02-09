import { actionTypes as actionTypesTag } from "~/store/tag"
import { actionTypes as actionTypesFeed } from "~/store/feed"

export default {
  async fetch() {
    const slug = this.$route.params.slug
    const fetchFeedList = slug ? "fetchFeedListByTag" : "fetchFeedList"

    await Promise.all([
      this.$store.dispatch(actionTypesTag.fetchTags),
      this.$store.dispatch(actionTypesFeed[fetchFeedList], slug),
    ])
  },
}
