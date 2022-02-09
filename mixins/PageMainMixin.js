import { actionTypes as actionTypesTag } from "~/store/tag"
import { actionTypes as actionTypesFeed } from "~/store/feed"

export default {
  async fetch() {
    await Promise.all([
      this.$store.dispatch(actionTypesTag.fetchTags),
      this.$store.dispatch(actionTypesFeed.fetchFeedList),
    ])
  },

  activated() {
    if (this.$fetchState.timestamp <= Date.now() - 30000) {
      this.$fetch()
    }
  },
}
