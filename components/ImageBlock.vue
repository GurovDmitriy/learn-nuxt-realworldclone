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
      default: () => ({}),
    },
  },

  computed: {
    dataItemValid() {
      const imageNamePlaceholder =
        this.dataItem.imageNamePlaceholder || "placeholder-image.png"

      let imageSrc = ""

      if (
        isExistImageSrc(this.dataItem.imageSrc) &&
        isOuterSrcImage(this.dataItem.imageSrc)
      ) {
        imageSrc = this.dataItem.imageSrc
      } else if (
        isExistImageSrc(this.dataItem.imageSrc) &&
        !isOuterSrcImage(this.dataItem.imageSrc)
      ) {
        imageSrc = require(`~/assets/images/${this.dataItem.imageSrc}`)
      } else {
        imageSrc = require(`~/assets/images/${imageNamePlaceholder}`)
      }

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
