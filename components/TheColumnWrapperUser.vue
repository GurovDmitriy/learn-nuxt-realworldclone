<template>
  <section class="column-wrapper-user">
    <h3 class="column-wrapper-user__caption visually-hidden">User Feed List</h3>
    <AppFilterBar
      :data-item="getDataFilterBar"
      class="column-wrapper-user__filter-bar"
    />
    <AppFeedListPlaceholder
      v-if="getIsLoadingFeedList"
      :data-item="placeholderCount"
      class="column-wrapper-user__placeholder"
    />
    <AppButtonCaption
      v-if="getErrorsFeedList"
      :data-item="config.btn.refresh"
      class="column-wrapper-user__refresh"
      @clickBtn="fetchFeedList"
    />
    <AppFeedList
      v-if="getFeedList"
      :data-item="getDataFeedList"
      class="column-wrapper-user__feed-list"
      @toggleLike="toggleLike($event)"
    />
    <AppPlaceholderContent v-else class="column-wrapper-user__no-content" />
  </section>
</template>

<script>
import CreateFeedList from "~/mixins/dataFeedList"

export default {
  mixins: [CreateFeedList],

  data() {
    return {
      filterBar: [
        {
          content: "My Feed",
          path: `/users/${this.$route.params.user}`,
          isActive: false,
        },
        {
          content: "Favorites Feed",
          path: `/users/${this.$route.params.user}/favorites`,
          isActive: false,
        },
      ],
    }
  },

  computed: {
    getDataFilterBar() {
      return this.filterBar.map((item) => {
        const isActive = this.$route.path === item.path
        item.isActive = isActive

        return item
      })
    },
  },
}
</script>
