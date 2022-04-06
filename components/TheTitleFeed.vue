<template>
  <div class="title-feed">
    <template v-if="getFeed && getUserData">
      <h3 class="title-feed__caption">{{ getFeed.title }}</h3>
      <AppAuthor :data-item="getAuthor" class="title-feed__author" />
      <div v-if="getIsVisibleBtn" class="title-feed__box-btn">
        <AppButtonIcon
          :data-item="configBtn.delete"
          class="title-feed__btn title-feed__btn--delete"
          @clickBtn="deleteFeed"
          >Delete</AppButtonIcon
        >
        <AppButtonIcon
          :data-item="configBtn.edit"
          class="title-feed__btn title-feed__btn--edit"
          @clickBtn="editFeed"
          >Edit</AppButtonIcon
        >
      </div>
    </template>
  </div>
</template>

<script>
import { mapState } from "vuex"
import { actionTypes as actionTypesFeed } from "~/store/feed"

export default {
  data() {
    return {
      configBtn: {
        edit: {
          type: "button",
          iconName: "pencil-fill",
          iconDesc: "icon",
        },

        delete: {
          type: "button",
          iconName: "trash-fill",
          iconDesc: "icon",
        },
      },
    }
  },

  computed: {
    ...mapState({
      getFeed: ({ feed }) => feed.feed,
      getUserData: ({ user }) => user.user,
      getUserIsLoading: ({ user }) => user.isLoading,
      getUserErrors: ({ user }) => user.errors,
      getCurrentUser: ({ auth }) => auth.user,
    }),

    getAuthor() {
      const pathLink = `/users/${this.getUserData.userName}`
      const time = this.getFeed.time
      const width = 38
      const height = 38
      const placeholder = "placeholder-avatar.png"
      const alt = this.getUserData.userName

      return {
        ...this.getUserData,
        pathLink,
        time,
        width,
        height,
        alt,
        placeholder,
      }
    },

    getIsVisibleBtn() {
      return this.getUserData.id === this.getCurrentUser.id
    },
  },

  methods: {
    refreshData() {
      // eslint-disable-next-line no-console
      console.log("refresh")
    },

    editFeed() {
      // eslint-disable-next-line no-console
      console.log("edit feed")
    },

    async deleteFeed() {
      await this.$store.dispatch(actionTypesFeed.deleteFeed, this.getFeed.id)
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

.title-feed__author {
  margin-bottom: $space-s;
}

.title-feed__author .author__name {
  color: $var-color-amethyst-smoke;
}

.title-feed__author .author__time-feed {
  color: $var-color-amethyst-smoke;
}

.title-feed__box-btn {
  display: flex;
  flex-wrap: wrap;
}

.title-feed__btn {
  margin-right: $space-s;

  color: $var-color-amethyst-smoke;

  border-color: $var-color-amethyst-smoke;

  &:last-child {
    margin-right: 0;
  }
}
</style>
