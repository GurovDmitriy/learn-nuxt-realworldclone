<template>
  <div class="feed">
    <p class="feed__content">{{ dataItem.content }}</p>
    <TagsList
      :data-item="dataItem.tags"
      class="feed-list-item-footer__tags-list"
    />
  </div>
</template>

<script>
export default {
  props: {
    dataItem: {
      type: Object,
      required: true,
    },
  },
}
</script>

<style lang="scss">
.feed {
  padding: $space-l 0;

  border-bottom: 2px solid $var-color-grey-light;
}

.feed__preview {
  margin-bottom: $space-m;
}
</style>
