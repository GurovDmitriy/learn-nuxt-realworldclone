<template>
  <div class="author">
    <NuxtLink class="author__img-box" :to="{ path: dataAuthor.userPagePath }">
      <AppImage class="author__img" :data-item="dataImage" />
    </NuxtLink>
    <div class="author__info-box">
      <NuxtLink class="author__name" :to="{ path: dataAuthor.userPagePath }">
        {{ dataAuthor.name }}
      </NuxtLink>
      <time class="author__time-feed" :datetime="dataAuthor.time">
        {{ dataAuthor.time | dateFormatBase }}
      </time>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    dataItem: {
      type: Object,
      required: false,
      default: () => ({
        // avatar               - string path to image
        // name                 - string name author
        // time                 - string time create feed
        // userPagePath         - string path to user page
        // imageWidth           - number width image
        // imageHeight          - number height image
        // imagePlaceholderName - string name file placeholder with ext
      }),
    },
  },

  computed: {
    dataAuthor() {
      const name = this.dataItem.name || "Author"
      const time = this.dataItem.time || "2022-01-24 00:00"
      const userPagePath = this.dataItem.userPagePath || "/"

      return {
        name,
        time,
        userPagePath,
      }
    },

    dataImage() {
      const imageSrc = this.dataItem.avatar
      const imageWidth = this.dataItem.imageWidth || 38
      const imageHeight = this.dataItem.imageHeight || 38
      const imagePlaceholderName =
        this.dataItem.imagePlaceholderName || "placeholder-avatar.png"

      return {
        imageSrc,
        imageWidth,
        imageHeight,
        imagePlaceholderName,
      }
    },
  },
}
</script>

<style lang="scss">
.author {
  display: flex;
}

.author__img-box {
  display: block;
  width: 38px;
  margin-right: $space-s;
}

.author__img {
  display: block;
  width: 100%;
  height: auto;

  line-height: 0;

  border-radius: 50%;
}

.author__name {
  display: block;
  margin-bottom: 0;

  color: $var-color-primary;
  line-height: 1;
  text-decoration: none;
}

.author__time-feed {
  @include text-small;

  margin-bottom: 0;

  color: $var-color-default;
  font-weight: $font-weight-light;
  line-height: 1;
}
</style>
