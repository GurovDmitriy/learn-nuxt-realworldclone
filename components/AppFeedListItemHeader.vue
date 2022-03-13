<template>
  <div class="feed-list-item-header">
    <AppAuthor :data-item="dataAuthor" class="feed-list-item-header__author" />
    <AppButtonIcon
      :data-item="dataButtonIcon"
      class="feed-list-item-header__button-icon"
      >{{ dataLike }}</AppButtonIcon
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
      dataButtonIcon: {
        iconName: "heart-fill",
        iconDesc: "heart",
      },

      dataAuthorConfig: {
        imageWidth: 38,
        imageHeight: 38,
        imagePlaceholderName: "placeholder-avatar.png",
      },
    }
  },

  computed: {
    dataAuthor() {
      const username = this.dataItem.author.name
      const userPath = "users"
      const userPagePath = `/${userPath}/${username}`

      const imageWidth = this.dataAuthorConfig.imageWidth
      const imageHeight = this.dataAuthorConfig.imageWidth
      const imagePlaceholderName = this.dataAuthorConfig.imagePlaceholderName

      return {
        ...this.dataItem.author,
        userPagePath,
        imageWidth,
        imageHeight,
        imagePlaceholderName,
      }
    },

    dataLike() {
      const like = this.dataItem.like.length

      return like
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

.feed-list-item-header__author {
  max-width: 70%;
  margin-right: $space-m;
}
</style>
