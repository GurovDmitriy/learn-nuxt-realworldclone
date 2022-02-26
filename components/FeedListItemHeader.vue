<template>
  <div class="feed-list-item-header">
    <AuthorBlock
      :data-item="dataAuthorBlock"
      class="feed-list-item-header__author"
    />
    <ButtonIcon
      :data-item="dataButtonIcon"
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
      // author - object data for author component
      // like   - object data for buttonIcon component
    },
  },

  data() {
    return {
      dataButtonIcon: {
        iconName: "heart-fill",
        iconDesc: "heart",
      },

      dataAuthorBlockConfig: {
        imageWidth: 38,
        imageHeight: 38,
        imagePlaceholderName: "placeholder-avatar.png",
      },
    }
  },

  computed: {
    dataAuthorBlock() {
      const userSlug = this.dataItem.author.name
      const userPath = "users"
      const userPagePath = `/${userPath}/${userSlug}`

      const imageWidth = this.dataAuthorBlockConfig.imageWidth
      const imageHeight = this.dataAuthorBlockConfig.imageWidth
      const imagePlaceholderName =
        this.dataAuthorBlockConfig.imagePlaceholderName

      return {
        ...this.dataItem.author,
        userPagePath,
        imageWidth,
        imageHeight,
        imagePlaceholderName,
      }
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
