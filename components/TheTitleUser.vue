<template>
  <div class="title-user">
    <LoadingBlock v-if="userIsLoading" class="title-user__loading" />
    <RefreshBlock
      v-else-if="userErrors"
      class="title-user__error"
      @clickButton="refreshData"
    />
    <template v-else>
      <ImageBlock class="title-user__img" :data-item="dataImageBlock" />
      <h3 class="title-user__username">{{ userDataValid.userName }}</h3>
      <p class="title-user__name">{{ userDataValid.name }}</p>
    </template>
  </div>
</template>

<script>
import { mapState } from "vuex"

export default {
  data() {
    return {
      imageBlockConfig: {
        imageWidth: 100,
        imageHeight: 100,
        imagePlaceholderName: "placeholder-avatar.png",
      },
    }
  },

  computed: {
    ...mapState({
      userData: ({ user }) => user.user,
      userIsLoading: ({ user }) => user.isLoading,
      userErrors: ({ user }) => user.errors,
    }),

    userDataValid() {
      const userName = this.userData.userName || "Unknown Author"
      const name = `${this.userData.firstName} ${this.userData.lastName}`

      return {
        userName,
        name,
      }
    },

    dataImageBlock() {
      const imageSrc = this.userData.avatar || null
      const imageAlt = this.userData.userName || "Unknown Author"
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

  methods: {
    refreshData() {
      // eslint-disable-next-line no-console
      console.log("refresh")
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
