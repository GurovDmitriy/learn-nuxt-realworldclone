<template>
  <main class="main">
    <h2 class="main__caption visually-hidden">Main Content</h2>
    <TheArticleColumnWrapper class="main__column-wrapper" />
  </main>
</template>

<script>
// import { actionTypes as actionTypesUser } from "~/store/user"
import { actionTypes as actionTypesFeed } from "~/store/feed"
import { getFromKebabStr } from "~/helpers/utils"

export default {
  layout: "feed",

  async asyncData({ params, store }) {
    const feed = getFromKebabStr(params.feed)

    const feedPayload = `title=${feed}`

    await Promise.allSettled([
      // store.dispatch(actionTypesUser.fetchUser, userPayload),
      store.dispatch(actionTypesFeed.fetchFeed, feedPayload),
    ])
  },
}
</script>

<style lang="scss">
.main {
  @include container;

  padding-top: $space-l;
  padding-bottom: $space-l;
}

.main__column-wrapper {
  margin-bottom: $space-l;
}
</style>
