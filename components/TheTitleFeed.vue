<template>
  <div class="title-feed">
    <template v-if="getFeed && getUserData">
      <h3 class="title-feed__caption">{{ getFeed.title }}</h3>
      <AppAuthor :data-item="getAuthor" class="title-feed__author" />
    </template>
  </div>
</template>

<script>
import { mapState } from "vuex"

export default {
  computed: {
    ...mapState({
      getFeed: ({ feed }) => feed.feed,
      getUserData: ({ user }) => user.user,
      getUserIsLoading: ({ user }) => user.isLoading,
      getUserErrors: ({ user }) => user.errors,
    }),

    getAuthor() {
      const pathLink = `/users/${this.getUserData.userName}`
      const width = 38
      const height = 38
      const placeholder = "placeholder-avatar.png"
      const alt = this.getUserData.userName

      return {
        ...this.getUserData,
        pathLink,
        width,
        height,
        alt,
        placeholder,
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
