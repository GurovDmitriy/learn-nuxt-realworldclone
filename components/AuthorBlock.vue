<template>
  <div class="author">
    <NuxtLink
      class="author__img-box"
      :to="{ path: dataItemValid.authorBlock.userPagePath }"
    >
      <ImageBlock class="author__img" :data-item="dataItemValid.imageBlock" />
    </NuxtLink>
    <div class="author__info-box">
      <NuxtLink
        class="author__name"
        :to="{ path: dataItemValid.authorBlock.userPagePath }"
      >
        {{ dataItemValid.authorBlock.name }}
      </NuxtLink>
      <time
        class="author__time-feed"
        :datetime="dataItemValid.authorBlock.time"
      >
        {{ dataItemValid.authorBlock.time | dateFormatBase }}
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
    dataItemValid() {
      const name = this.dataItem.name || "Author"
      const time = this.dataItem.time || "2022-01-24 00:00"
      const userPagePath = this.dataItem.userPagePath || "/"
      const imageSrc = this.dataItem.avatar
      const imageWidth = this.dataItem.imageWidth || 38
      const imageHeight = this.dataItem.imageHeight || 38
      const imagePlaceholderName =
        this.dataItem.imagePlaceholderName || "placeholder-avatar.png"

      return {
        authorBlock: {
          name,
          time,
          userPagePath,
        },

        imageBlock: {
          imageSrc,
          imageWidth,
          imageHeight,
          imagePlaceholderName,
        },
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

  color: $var-color-purple;
  line-height: 1;
  text-decoration: none;
}

.author__time-feed {
  @include text-small;

  margin-bottom: 0;

  color: $var-color-grey;
  font-weight: $font-weight-light;
  line-height: 1;
}
</style>
