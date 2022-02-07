import { actionTypes as actionTypesTag } from "~/store/tag"

export default {
  async fetch() {
    await this.$store.dispatch(actionTypesTag.fetchTags)
  },

  activated() {
    if (this.$fetchState.timestamp <= Date.now() - 30000) {
      this.$fetch()
    }
  },
}
