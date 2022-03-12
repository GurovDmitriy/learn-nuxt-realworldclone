<template>
  <div class="title-feed">
    <template v-if="feed && userData">
      <h3 class="title-feed__caption">{{ feed.title }}</h3>
      <AppAuthor :data-item="dataAuthor" class="title-feed__author" />
    </template>
  </div>
</template>

<script>
import { mapState } from "vuex"

export default {
  data() {
    return {
      dataAuthorConfig: {
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

    dataAuthor() {
      const name = this.userData.username
      const avatar = this.userData.avatar
      const time = this.feed.time
      const userPath = "users"
      const userPagePath = `/${userPath}/${name}`

      const imageWidth = this.dataAuthorConfig.imageWidth
      const imageHeight = this.dataAuthorConfig.imageWidth
      const imagePlaceholderName = this.dataAuthorConfig.imagePlaceholderName

      return {
        avatar,
        name,
        time,
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

  color: $var-color-amethyst-smoke;
}

.title-feed__author .author__name {
  color: $var-color-amethyst-smoke;
}

.title-feed__author .author__time-feed {
  color: $var-color-amethyst-smoke;
}
</style>
