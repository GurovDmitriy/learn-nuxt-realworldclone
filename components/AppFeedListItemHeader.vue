<template>
  <div class="feed-list-item-header">
    <AppAuthorBlock
      :data-item="dataAppAuthor"
      class="feed-list-item-header__author"
    />
    <AppButtonIcon
      :data-item="dataAppButtonIcon"
      class="feed-list-item-header__button-icon"
      >{{ dataItem.like }}</AppButtonIcon
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
      // like   - array data for buttonIcon component
    },
  },

  data() {
    return {
      dataAppButtonIcon: {
        iconName: "heart-fill",
        iconDesc: "heart",
      },

      dataAppAuthorConfig: {
        imageWidth: 38,
        imageHeight: 38,
        imagePlaceholderName: "placeholder-avatar.png",
      },
    }
  },

  computed: {
    dataAppAuthor() {
      const userName = this.dataItem.author.name
      const userPath = "users"
      const userPagePath = `/${userPath}/${userName}`

      const imageWidth = this.dataAppAuthorConfig.imageWidth
      const imageHeight = this.dataAppAuthorConfig.imageWidth
      const imagePlaceholderName = this.dataAppAuthorConfig.imagePlaceholderName

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
