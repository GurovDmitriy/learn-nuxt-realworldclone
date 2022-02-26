<template>
  <div class="title-user">
    <LoadingBlock v-if="$fetchState.pending" class="title-user__loading" />
    <RefreshBlock
      v-else-if="$fetchState.error"
      class="title-user__error"
      @clickButton="refreshData"
    />
    <template v-else>
      <ImageBlock class="title-user__img" :data-item="dataImageBlock" />
      <h3 class="title-user__username">{{ dataItemValid.userName }}</h3>
      <p class="title-user__name">{{ dataItemValid.name }}</p>
    </template>
  </div>
</template>

<script>
export default {
  data() {
    return {
      dataItem: {},
      imageBlockConfig: {
        imageWidth: 100,
        imageHeight: 100,
        imagePlaceholderName: "placeholder-avatar.png",
      },
    }
  },

  async fetch() {
    const userName = this.$route.params.slug
    const data = await this.$api.user.getUser(`userName=${userName}`)
    this.dataItem = data[0]
  },

  computed: {
    dataItemValid() {
      const userName = this.dataItem.userName || "Unknown Author"
      const name = `${this.dataItem.firstName} ${this.dataItem.lastName}`

      return {
        userName,
        name,
      }
    },

    dataImageBlock() {
      const imageSrc = this.dataItem.avatar || null
      const imageAlt = this.dataItem.userName || "Unknown Author"
      const imageWidth = this.imageBlockConfig.imageWidth
      const imageHeight = this.imageBlockConfig.imageHeight
      const imagePlaceholderName = this.imageBlockConfig.imagePlaceholderName

      return {
        imageSrc,
        imageAlt,
        imageWidth,
        imageHeight,
        imagePlaceholderName,
      }
    },
  },

  watch: {
    "$route.query": "$fetch",
  },

  activated() {
    if (this.$fetchState.timestamp <= Date.now() - 3000) {
      this.$fetch()
    }
  },

  methods: {
    refreshData() {
      this.$fetch()
    },
  },
}
</script>

<style lang="scss">
.title-user {
  @include container;
}

.title-user__img {
  display: block;
  width: 100px;
  height: auto;
  margin: 0 auto;
  margin-bottom: $space-m;

  border-radius: 50%;
}

.title-user__username {
  @include caption-h3;

  margin-bottom: $space-s;

  color: $var-color-white;
  text-align: center;
}

.title-user__name {
  @include text-small;

  margin-bottom: $space-m;

  color: $var-color-white;
  text-align: center;
}

.title-user__loading {
  color: $var-color-white;
  text-align: center;
}

.title-user__error {
  display: flex;
  flex-direction: column;
  align-items: center;

  color: $var-color-white;
  text-align: center;
}
</style>
