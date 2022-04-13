<template>
  <section class="column-wrapper-feed">
    <h3 class="column-wrapper-feed__caption visually-hidden">Article</h3>
    <AppLoading v-if="getIsLoadingFeed" class="column-wrapper-feed__loading" />
    <AppButtonCaption
      v-if="getErrorsFeed"
      :data-item="config.btn.refresh"
      class="column-wrapper-feed__refresh"
      @clickBtn="fetchFeed"
    />
    <AppFeed
      v-if="getFeed"
      :data-item="getDataFeed"
      class="column-wrapper-feed__feed"
    />
  </section>
</template>

<script>
import { mapState } from "vuex"
import { actionTypes as actionTypesFeed } from "~/store/feed"

export default {
  data() {
    return {
      config: {
        btn: {
          refresh: {
            message: "Something went wrong",
            btnText: "Refresh",
            iconName: "arrow-clockwise",
            iconDesc: "refresh",
          },
        },
      },
    }
  },

  computed: {
    ...mapState({
      getFeed: ({ feed }) => feed.feed,
      getIsLoadingFeed: ({ feed }) => feed.isLoading,
      getErrorsFeed: ({ feed }) => feed.errors,
    }),

    getDataFeed() {
      const tags = this.getFeed.tags.map((item) => {
        return {
          content: item,
          path: `/tags/${item}`,
        }
      })

      return {
        content: this.getFeed.content,
        tags,
      }
    },
  },

  methods: {
    async fetchFeed() {
      await this.$store.dispatch(actionTypesFeed.fetchFeed)
    },
  },
}
</script>
