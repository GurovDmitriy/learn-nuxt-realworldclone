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
import { isOuterSrc } from "~/helpers/utils"

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
      switch (isOuterSrc(this.dataItem.imageSrc)) {
        case true:
          return this.dataItem.imageSrc

        case false:
          return require(`~/assets/images/${this.dataItem.imageSrc}`)

        default:
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
