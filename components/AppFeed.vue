<template>
  <div class="feed">
    <p class="feed__content">{{ dataItemValid.content }}</p>
    <AppTagsList
      :data-item="dataItemValid.tags"
      class="feed-list-item-footer__tags-list"
    />
  </div>
</template>

<script>
export default {
  props: {
    dataItem: {
      type: Object,
      required: false,
      default: () => ({
        // content - string content feed
        // tags    - array tags list
      }),
    },
  },

  computed: {
    dataItemValid() {
      const content = this.dataItem.content || "Nothing here yet..."
      const tags = this.dataItem.tags || ["no-tag"]

      return {
        content,
        tags,
      }
    },
  },
}
</script>

<style lang="scss">
.feed {
  padding: $space-l 0;

  border-bottom: 2px solid $var-color-amethyst-smoke;
}

.feed__preview {
  margin-bottom: $space-m;
}
</style>
