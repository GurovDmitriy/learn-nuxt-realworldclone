<template>
  <div class="feed-list-item-header">
    <AuthorBlock
      :data-item="dataItem.author"
      class="feed-list-item-header__author"
    />
    <LikeBlock :data-item="dataItem.like" class="feed-list-item-header__like" />
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
.feed-list-item-header {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;

  margin-bottom: $space-s;
}
</style>
