<template>
  <main class="main">
    <h2 class="main__caption visually-hidden">Main Content</h2>
    <TheMainColumnWrapper class="main__column-wrapper" />
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
import { getArrRange } from "~/helpers/utils"
import { paginator } from "~/helpers/vars"

export default {
  async asyncData({ params, query, store }) {
    const slug = params.slug
    const page = query.page || 1
    const feedListPayload = `tags_like=${slug}&_page=${page}&_limit=${paginator.itemPerPage}`

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
      const slug = this.$route.params.slug
      const count = this.feedCountByTag[slug]
      const delim = paginator.itemPerPage

      const pagePath = this.$route.path
      const pageCount = getArrRange(1, Math.ceil(count / delim))

      return {
        pagePath,
        pageCount,
      }
    },
  },

  watchQuery: ["page"],
}
</script>
