<template>
  <aside class="main-column-right">
    <div class="main-column-right__tags-list-box">
      <h3 class="main-column-right__caption">Popular Tags</h3>
      <LoadingBlock v-if="tagsListIsLoading" class="main-column-right__loading"
        >Loading tags...</LoadingBlock
      >
      <RefreshBlock
        v-else-if="tagsListErrors"
        class="main-column-right__refresh"
        @clickRefresh="refreshTagsList"
      />
      <TagsList
        v-else
        :data-item="tagsList"
        class="main-column-right__tags-list"
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
.main-column-right__caption {
  @include text-default;

  margin-bottom: $space-s;
}

.main-column-right__tags-list-box {
  padding: $space-m;

  background-color: $var-color-grey-light;
  border-radius: 5px;
}
</style>
