<template>
  <img
    class="image"
    :src="getImageSrc"
    :alt="dataItem.imageAlt"
    :width="dataItem.imageWidth"
    :height="dataItem.imageHeight"
  />
</template>

<script>
import { isExistImageSrc, isOuterSrcImage } from "~/helpers/utils"

export default {
  props: {
    dataItem: {
      type: Object,
      required: false,
      default: () => ({
        imageSrc: require("~/assets/images/placeholder-image.png"),
        imageAlt: "placeholder",
        imageWidth: 100,
        imageHeight: 100,
        imagePlaceholderName: "placeholder-image.png",
      }),
    },
  },

  computed: {
    getImageSrc() {
      if (
        isExistImageSrc(this.dataItem.imageSrc) &&
        isOuterSrcImage(this.dataItem.imageSrc)
      ) {
        return this.dataItem.imageSrc
      } else if (
        isExistImageSrc(this.dataItem.imageSrc) &&
        !isOuterSrcImage(this.dataItem.imageSrc)
      ) {
        return require(`~/assets/images/${this.dataItem.imageSrc}`)
      } else {
        return require(`~/assets/images/${this.dataItem.imagePlaceholderName}`)
      }
    },
  },
}
</script>

<style lang="scss">
.image {
  display: block;
  width: 100%;
  height: auto;

  line-height: 0;
}
</style>
