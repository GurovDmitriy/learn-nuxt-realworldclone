<template>
  <img
    class="image"
    :src="getImage"
    :width="dataItem.width"
    :height="dataItem.height"
    :alt="dataItem.alt"
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
        image: "placeholder-image.png",
        width: 100,
        height: 100,
        alt: "placeholder",
        placeholder: "placeholder-image.png",
      }),
    },
  },

  computed: {
    getImage() {
      switch (isOuterSrc(this.dataItem.image)) {
        case true:
          return this.dataItem.image

        case false:
          return require(`~/assets/images/${this.dataItem.image}`)

        default:
          return require(`~/assets/images/${this.dataItem.placeholder}`)
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
