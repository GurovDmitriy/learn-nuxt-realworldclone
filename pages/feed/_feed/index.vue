<template>
  <main class="main">
    <h2 class="main__caption visually-hidden">Main Content</h2>
    <TheColumnWrapperFeed class="main__column-wrapper" />
  </main>
</template>

<script>
import { actionTypes as actionTypesFeed } from "~/store/feed"
import { actionTypes as actionTypesUser } from "~/store/user"
import { getStrFromKebabCase } from "~/helpers/utils"

export default {
  layout: "feed",

  async asyncData({ params, store }) {
    const feedTitle = getStrFromKebabCase(params.feed)

    const feedPayload = `title=${feedTitle}`
    const feed = await store.dispatch(actionTypesFeed.fetchFeed, feedPayload)
    const userId = feed[0].userId

    const userPayload = `id=${userId}`
    await store.dispatch(actionTypesUser.fetchUser, userPayload)
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
