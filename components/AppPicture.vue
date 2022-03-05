<template>
  <div class="picture">
    <picture class="picture__picture">
      <source
        v-for="item in dataAppPictureSource"
        :key="item.id"
        :type="item.type"
        :media="`(min-width: ${item.viewport}px)`"
        :srcset="item.src"
      />

      <img
        :src="dataItemValid.imageSrc"
        :alt="dataItemValid.imageAlt"
        :width="dataItemValid.imageWidth"
        :height="dataItemValid.imageHeight"
        class="picture__img"
      />
    </picture>
  </div>
</template>

<script>
import { isExistImageSrc, isExistArr, isOuterSrcImage } from "~/helpers/utils"

export default {
  props: {
    dataItem: {
      type: Object,
      required: false,
      default: () => ({
        // imageSrc                   - string path to default image
        // imageSrcSource             - array of string path to image source
        // imageAlt                   - string alt img for attr
        // imageWidth                 - number width img for attr
        // imageHeight                - number height img for attr
        // imageFormatSupport         - array of string support image format
        // imageNamePlaceholder       - string name file for placeholder default img
        // imageNamePlaceholderSource - array of string name file for placeholder source
      }),
    },
  },

  data() {
    return {
      dataImagePicture: {
        viewport: [1000, 600, 0],
        retina: [3, 2, 1],
      },
    }
  },

  computed: {
    dataItemValid() {
      const imageNamePlaceholder =
        this.dataItem.imageNamePlaceholder || "placeholder-image.png"

      const imageSrc =
        this.getImageSrc || require(`~/assets/images/${imageNamePlaceholder}`)

      const imageNamePlaceholderSource = this.dataItem
        .imageNamePlaceholderSource
        ? [...this.dataItem.imageNamePlaceholderSource]
        : [
            "placeholder-image-desktop.png",
            "placeholder-image-tablet.png",
            "placeholder-image-mobile.png",
          ]

      const imageSrcSource =
        this.getImageSrcSource ||
        imageNamePlaceholderSource.map((item) =>
          require(`~/assets/images/${item}`)
        )

      const imageFormatSupport = this.dataItem.imageFormatSupport
        ? [...this.dataItem.imageFormatSupport]
        : ["webp", "png"]

      const imageAlt = this.dataItem.imageAlt || "placeholder"
      const imageWidth = this.dataItem.imageWidth || 100
      const imageHeight = this.dataItem.imageHeight || 100

      return {
        imageSrc,
        imageSrcSource,
        imageAlt,
        imageWidth,
        imageHeight,
        imageFormatSupport,
        imageNamePlaceholder,
        imageNamePlaceholderSource,
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

    getImageSrcSource() {
      if (
        isExistArr(this.dataItem.imageSrcSource) &&
        isExistImageSrc(this.dataItem.imageSrcSource[0]) &&
        isOuterSrcImage(this.dataItem.imageSrcSource[0])
      ) {
        return [...this.dataItem.imageSrcSource]
      } else if (
        isExistArr(this.dataItem.imageSrcSource) &&
        isExistImageSrc(this.dataItem.imageSrcSource[0]) &&
        !isOuterSrcImage(this.dataItem.imageSrcSource[0])
      ) {
        return this.dataItem.imageSrcSource.map((item) =>
          require(`~/assets/images/${item}`)
        )
      } else {
        return false
      }
    },

    dataAppPictureSource() {
      const data = []
      let counter = 0

      this.dataItemValid.imageFormatSupport.forEach((item) => {
        getDataSource(this.dataImagePicture, this.dataItemValid, item)
      })

      function getDataSource(config, dataValid, format) {
        config.viewport.forEach((item, index) => {
          const srcFullStr = getSrcFullStr(config, dataValid, format, index)

          counter += 1

          data.push({
            id: `image${counter}`,
            type: `image/${format}`,
            viewport: item,
            src: srcFullStr,
          })
        })
      }

      function getSrcFullStr(config, dataValid, format, indexViewport) {
        const srcArr = []

        config.retina.forEach((item) => {
          const str = `${dataValid.imageSrcSource[indexViewport]}?resize&size=${
            item * 100
          }&format=${format} ${item}x`
          srcArr.push(str)
        })

        return srcArr.join(",")
      }

      return data
    },
  },
}
</script>
