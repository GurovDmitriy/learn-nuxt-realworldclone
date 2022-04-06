<template>
  <div class="title-user">
    <template v-if="getUser">
      <AppImage class="title-user__img" :data-item="getDataImage" />
      <h3 class="title-user__username">{{ getUser.userName }}</h3>
      <p class="title-user__name">{{ getUserFullName }}</p>
    </template>
  </div>
</template>

<script>
import { mapState } from "vuex"

export default {
  computed: {
    ...mapState({
      getUser: ({ user }) => user.user,
      getUserIsLoading: ({ user }) => user.isLoading,
      getUserErrors: ({ user }) => user.errors,
    }),

    getUserFullName() {
      return `${this.getUser.firstName} ${this.getUser.lastName}`
    },

    getDataImage() {
      return {
        image: this.getUser.image,
        width: 100,
        height: 100,
        alt: this.getUser.userName,
        placeholder: "placeholder-avatar.png",
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
