<template>
  <div class="author">
    <div class="author__img-box">
      <ImageBlock class="author__img" :data-item="dataAuthorImgValid" />
    </div>
    <div class="author__info-box">
      <p class="author__name">
        {{ dataItemValid.name }}
      </p>
      <time class="author__time-feed" :datetime="dataItemValid.time">
        {{ dataItemValid.time | dateFormatBase }}
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
      default: () => ({}),
    },
  },

  data() {
    return {
      dataAuthorImg: {
        imageWidth: 38,
        imageHeight: 38,
        imageNamePlaceholder: "placeholder-avatar.png",
      },
    }
  },

  computed: {
    dataItemValid() {
      const avatar = this.dataItem.avatar
      const name = this.dataItem.name || "Author"
      const time = this.dataItem.time || "2022-01-24 00:00"

      return {
        avatar,
        name,
        time,
      }
    },

    dataAuthorImgValid() {
      return {
        imageSrc: this.dataItemValid.avatar,
        imageAlt: this.dataItemValid.name,
        imageWidth: this.dataAuthorImg.imageWidth,
        imageHeight: this.dataAuthorImg.imageHeight,
        imageNamePlaceholder: this.dataAuthorImg.imageNamePlaceholder,
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
  margin-bottom: 0;

  color: $var-color-purple;
  line-height: 1;
}

.author__time-feed {
  @include text-small;

  margin-bottom: 0;

  color: $var-color-grey;
  font-weight: $font-weight-light;
  line-height: 1;
}
</style>
