<template>
  <aside class="column-wrapper-main-right">
    <div class="column-wrapper-main-right__tags-list-box">
      <h3 class="column-wrapper-main-right__caption">Popular Tags</h3>
      <AppLoading
        v-if="tagsIsLoading"
        class="column-wrapper-main-right__loading"
        >Loading tags...</AppLoading
      >
      <AppRefresh
        v-if="tagsErrors"
        class="column-wrapper-main-right__refresh"
        @refreshData="refreshTags"
      />
      <AppTagsList
        v-if="tags"
        :data-item="tagsValid"
        class="column-wrapper-main-right__tags-list"
      />
    </div>
  </aside>
</template>

<script>
import { mapState } from "vuex"
import { actionTypes as actionTypesTag } from "~/store/tag"

export default {
  computed: {
    ...mapState({
      tags: ({ tag }) => tag.tags,
      tagsIsLoading: ({ tag }) => tag.isLoading,
      tagsErrors: ({ tag }) => tag.errors,
    }),

    tagsValid() {
      const tagList = this.tags.map((item) => item.tag)
      return tagList
    },
  },

  methods: {
    async refreshTags() {
      await this.$store.dispatch(actionTypesTag.fetchTags)
    },
  },
}
</script>

<style lang="scss">
.column-wrapper-main-right {
  @media (min-width: $min-width-tablet) {
    position: relative;
  }
}

.column-wrapper-main-right__tags-list-box {
  padding: $space-m;

  background-color: $var-color-amethyst-smoke;
  border-radius: 5px;

  @media (min-width: $min-width-tablet) {
    position: sticky;
    top: $space-l;
    left: 0;
  }
}

.column-wrapper-main-right__caption {
  @include text-default;

  margin-bottom: $space-s;
}
</style>
