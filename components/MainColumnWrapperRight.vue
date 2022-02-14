<template>
  <aside class="main-column-wrapper-right">
    <div class="main-column-wrapper-right__tags-list-box">
      <h3 class="main-column-wrapper-right__caption">Popular Tags</h3>
      <LoadingBlock
        v-if="tagsListIsLoading"
        class="main-column-wrapper-right__loading"
        >Loading tags...</LoadingBlock
      >
      <RefreshBlock
        v-else-if="tagsListErrors"
        class="main-column-wrapper-right__refresh"
        @refreshData="refreshTagsList"
      />
      <TagsList
        v-else
        :data-item="tagsList"
        class="main-column-wrapper-right__tags-list"
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
.main-column-wrapper-right {
  @media (min-width: $min-width-tablet) {
    position: relative;
  }
}

.main-column-wrapper-right__tags-list-box {
  padding: $space-m;

  background-color: $var-color-grey-light;
  border-radius: 5px;

  @media (min-width: $min-width-tablet) {
    position: sticky;
    top: $space-l;
    left: 0;
  }
}

.main-column-wrapper-right__caption {
  @include text-default;

  margin-bottom: $space-s;
}
</style>
