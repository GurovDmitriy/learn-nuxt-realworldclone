<template>
  <main class="main-tags">
    <AppHero class="main-tags__hero">
      <TheTitle class="main-tags__title" />
    </AppHero>
    <h2 class="main-tags__caption visually-hidden">Main Content</h2>
    <TheColumnWrapperMain class="main-tags__column-wrapper-main" />
  </main>
</template>

<script>
import { actionTypes as actionTypesTag } from "~/store/tag"
import { actionTypes as actionTypesFeedList } from "~/store/feedList"
import { actionTypes as actionTypesFeedCount } from "~/store/feedCount"
import { paginator } from "~/helpers/vars"
import { getIsValidParamsTag } from "~/helpers/validateHook"

export default {
  async validate({ params }) {
    const res = await fetch("http://localhost:3005/tags", {
      method: "GET",
    })
    const data = await res.json()

    return getIsValidParamsTag(params.tag, data)
  },

  async asyncData({ params, query, store, error }) {
    try {
      const tag = params.tag
      const page = query.page || 1
      const itemPerPage = paginator.feedList.main
      const feedListPayload = `tags_like=${tag}&_page=${page}&_limit=${itemPerPage}`

      await Promise.allSettled([
        store.dispatch(actionTypesTag.fetchTagsPopular),
        store.dispatch(actionTypesFeedList.fetchFeedList, feedListPayload),
        store.dispatch(actionTypesFeedCount.fetchFeedCount, "tag"),
      ])

      return {
        tag,
      }
    } catch (err) {
      error(err)
    }
  },

  head() {
    return {
      title: `Tag ${this.tag}`,
      meta: [
        {
          name: "description",
          content: `Template for learn Nuxt 2: Tag ${this.tag}`,
          hid: "description",
        },
      ],
    }
  },

  watchQuery: ["page"],
}
</script>

<style lang="scss">
.main-tags {
  @include container;

  padding-bottom: $space-l;
}
</style>
