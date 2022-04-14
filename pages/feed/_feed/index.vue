<template>
  <main class="main-feed">
    <AppHero class="main-feed__hero">
      <TheTitleFeed class="main-feed__title-feed" />
    </AppHero>
    <h2 class="main-feed__caption visually-hidden">Main Content</h2>
    <TheColumnWrapperFeed class="main-feed__column-wrapper-feed" />
  </main>
</template>

<script>
import { actionTypes as actionTypesFeed } from "~/store/feed"
import { actionTypes as actionTypesUser } from "~/store/user"
import { getStrFromKebabCase } from "~/helpers/utils"

export default {
  async asyncData({ params, store }) {
    const feedTitle = getStrFromKebabCase(params.feed)

    const feedPayload = `title=${feedTitle}`
    await store.dispatch(actionTypesFeed.fetchFeed, feedPayload)

    const userPayload = `id=${store.state.feed.feed.userId}`
    await store.dispatch(actionTypesUser.fetchUser, userPayload)
  },
}
</script>

<style lang="scss">
.main-feed {
  @include container;

  padding-bottom: $space-l;
}
</style>
