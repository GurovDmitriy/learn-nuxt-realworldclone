<template>
  <div class="image">
    <img
      class="image__img"
      :src="dataItemValid.imageSrc"
      :alt="dataItemValid.imageAlt"
      :width="dataItemValid.imageWidth"
      :height="dataItemValid.imageHeight"
    />
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

  computed: {
    dataItemValid() {
      const imageSrcIsExist = !!this.dataItem.imageSrc || false
      const imageSrcIsOuter = /^http/.test(this.dataItem.imageSrc) || false
      const imageNamePlaceholder =
        this.dataItem.imageNamePlaceholder || "placeholder-image.png"

      let imageSrc = require(`~/assets/images/${imageNamePlaceholder}`)

      if (imageSrcIsExist && imageSrcIsOuter) {
        imageSrc = this.dataItem.imageSrc
      } else if (imageSrcIsExist && !imageSrcIsOuter) {
        imageSrc = require(`~/assets/images/${this.dataItem.imageSrc}`)
      }

      const imageAlt = this.dataItem.imageAlt || "placeholder"
      const imageWidth = this.dataItem.imageWidth || "100"
      const imageHeight = this.dataItem.imageHeight || "100"

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
