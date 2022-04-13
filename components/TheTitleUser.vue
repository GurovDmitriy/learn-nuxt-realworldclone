<template>
  <div class="title-user">
    <template v-if="getIsVisibleTitleUser">
      <AppImage class="title-user__img" :data-item="getDataImage" />
      <h3 class="title-user__username">{{ getUser.userName }}</h3>
      <p class="title-user__name">{{ getFullNameUser }}</p>
    </template>
  </div>
</template>

<script>
import { mapState } from "vuex"
import { isNotEmptyObj } from "~/helpers/utils"

export default {
  data() {
    return {
      config: {
        imgAuthor: {
          width: 100,
          height: 10,
          placeholder: "placeholder-avatar.png",
        },
      },
    }
  },

  computed: {
    ...mapState({
      getUser: ({ user }) => user.user,
      getIsLoadingUser: ({ user }) => user.isLoading,
      getErrorsUser: ({ user }) => user.errors,
    }),

    getFullNameUser() {
      const firstName = this.getUser.firstName
      const lastName = this.getUser.lastName

      return `${firstName} ${lastName}`
    },

    getDataImage() {
      const image = this.getUser.image
      const alt = this.getUser.userName
      const width = this.config.imgAuthor.width
      const height = this.config.imgAuthor.height
      const placeholder = this.config.imgAuthor.placeholder

      return {
        image,
        width,
        height,
        alt,
        placeholder,
      }
    },

    getIsVisibleTitleUser() {
      return isNotEmptyObj(this.getUser)
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

  color: $var-color-amethyst-smoke;
  text-align: center;
}

.title-user__name {
  @include text-small;

  margin-bottom: $space-m;

  color: $var-color-amethyst-smoke;
  text-align: center;
}

.title-user__loading {
  color: $var-color-amethyst-smoke;
  text-align: center;
}

.title-user__error {
  display: flex;
  flex-direction: column;
  align-items: center;

  color: $var-color-amethyst-smoke;
  text-align: center;
}
</style>
