<template>
  <aside class="column-wrapper-main-right">
    <div class="column-wrapper-main-right__tags-list-box">
      <h3 class="column-wrapper-main-right__caption">Popular Tags</h3>
      <AppLoading
        v-if="tagsListIsLoading"
        class="column-wrapper-main-right__loading"
        >Loading tags...</AppLoading
      >
      <AppRefresh
        v-else-if="tagsListErrors"
        class="column-wrapper-main-right__refresh"
        @refreshData="refreshTagsList"
      />
      <AppTagsList
        v-else
        :data-item="tagsList"
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
      tagsList: ({ tag }) => tag.tagsList,
      tagsListIsLoading: ({ tag }) => tag.isLoading,
      tagsListErrors: ({ tag }) => tag.errors,
    }),
  },

  methods: {
    async refreshTagsList() {
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

  background-color: $var-color-grey-light;
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
