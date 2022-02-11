<template>
  <div class="feed-list-item-header">
    <AuthorBlock
      :data-item="dataItem.author"
      class="feed-list-item-header__author"
    />
    <ButtonIcon
      :data-item="dataButtonLike"
      class="feed-list-item-header__button-icon"
      >{{ dataItem.like }}</ButtonIcon
    >
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

  data() {
    return {
      dataButtonLike: {
        iconName: "heart-fill",
        iconDesc: "heart",
      },
    }
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

.feed-list-item-header__author {
  max-width: 70%;
  margin-right: $space-m;
}
</style>
