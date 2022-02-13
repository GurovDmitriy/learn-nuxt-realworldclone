<template>
  <img
    class="image"
    :src="dataItemValid.imageSrc"
    :alt="dataItemValid.imageAlt"
    :width="dataItemValid.imageWidth"
    :height="dataItemValid.imageHeight"
  />
</template>

<script>
import { isExistImageSrc } from "~/helpers/isExist"
import { isOuterSrcImage } from "~/helpers/isOuter"

export default {
  props: {
    dataItem: {
      type: Object,
      required: false,
      default: () => ({
        // imageSrc             - string path to image
        // imageAlt             - string alt img for attr
        // imageWidth           - number width img for attr
        // imageHeight          - number height img for attr
        // imageNamePlaceholder - string name file for placeholder
      }),
    },
  },

  computed: {
    dataItemValid() {
      const imageNamePlaceholder =
        this.dataItem.imageNamePlaceholder || "placeholder-image.png"

      const imageSrc =
        this.getImageSrc || require(`~/assets/images/${imageNamePlaceholder}`)

      const imageAlt = this.dataItem.imageAlt || "placeholder"
      const imageWidth = this.dataItem.imageWidth || 100
      const imageHeight = this.dataItem.imageHeight || 100

      return {
        imageSrc,
        imageAlt,
        imageWidth,
        imageHeight,
      }
    },

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
        return false
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
