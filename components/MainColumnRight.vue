<template>
  <aside class="main-column-right">
    <div class="main-column-right__tags-list-box">
      <h3 class="main-column-right-caption">Popular Tags</h3>
      <!-- <p v-if="false" class="main-column-right__loading">Loading tags...</p> -->
      <!-- <template v-else-if="">
          <p class="main-column-right__error">Something went wrong</p>
          <button class="main-column-right__refresh" type="button">Refresh</button>
        </template> -->
      <TagsList :data-item="tagsList" class="main-column-right__tags-list" />
    </div>
  </aside>
</template>

<script>
import { mapState } from "vuex"

export default {
  computed: {
    ...mapState({
      tagsList: (state) => state.tag.tagsList,
      tagsListIsLoading: (state) => state.tag.isLoading,
    }),
  },
}
</script>

<style lang="scss">
.main-column-right-caption {
  @include text-default;

  margin-bottom: $space-s;
}

.main-column-right__tags-list-box {
  padding: $space-m;

  background-color: $var-color-grey-light;
  border-radius: 5px;
}
</style>
