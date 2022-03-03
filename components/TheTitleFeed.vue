<template>
  <div class="title-feed">
    <LoadingBlock v-if="userIsLoading" class="title-feed__loading" />
    <RefreshBlock
      v-else-if="userErrors"
      class="title-feed__error"
      @clickButton="refreshData"
    />
    <template v-else>
      <h3 class="title-feed__caption">{{ feed.title }}</h3>
      <AuthorBlock :data-item="dataAuthorBlock" class="title-feed__author" />
    </template>
  </div>
</template>

<script>
import { mapState } from "vuex"

export default {
  data() {
    return {
      dataAuthorBlockConfig: {
        imageWidth: 38,
        imageHeight: 38,
        imagePlaceholderName: "placeholder-avatar.png",
      },
    }
  },

  computed: {
    ...mapState({
      feed: ({ feed }) => feed.feed,
      userData: ({ user }) => user.user,
      userIsLoading: ({ user }) => user.isLoading,
      userErrors: ({ user }) => user.errors,
    }),

    dataAuthorBlock() {
      const userName = this.userData.userName
      const userPath = "users"
      const userPagePath = `/${userPath}/${userName}`

      const imageWidth = this.dataAuthorBlockConfig.imageWidth
      const imageHeight = this.dataAuthorBlockConfig.imageWidth
      const imagePlaceholderName =
        this.dataAuthorBlockConfig.imagePlaceholderName

      return {
        ...this.userData,
        userPagePath,
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
.title-feed {
  @include container;
}

.title-feed__caption {
  @include caption-h2;

  margin-bottom: $space-s;

  color: $var-color-white;
}

.title-feed__author .author__name {
  color: $var-color-white;
}

.title-feed__author .author__time-feed {
  color: $var-color-white;
}
</style>
