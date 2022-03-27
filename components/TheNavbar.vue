<template>
  <nav class="navbar">
    <h2 class="navbar__caption visually-hidden">Navigation</h2>
    <div class="navbar__container">
      <AppLogo class="navbar__logo" />
      <AppBurger class="navbar__burger" @clickBtn="toggleMenu" />
      <AppNavList
        :data-item="getNavList"
        :class="getClassActiveNavList"
        class="navbar__nav-list"
      />
    </div>
  </nav>
</template>

<script>
import { mapGetters, mapState } from "vuex"
import { getterTypes as getterTypesAuth } from "~/store/auth"

export default {
  data() {
    return {
      isMenuShow: false,
      dataNavListDefault: [
        { content: "Home", path: "/" },
        { content: "Sign in", path: "/login" },
        { content: "Sign up", path: "/register" },
      ],
      dataNavListLogged: [
        { content: "Home", path: "/" },
        { content: "New Feed", path: "/editor" },
        { content: "Settings", path: "/settings" },
      ],
    }
  },

  computed: {
    ...mapGetters({
      getIsAnonymous: getterTypesAuth.isAnonymous,
      getIsLoggedIn: getterTypesAuth.isLoggedIn,
      getCurrentUser: getterTypesAuth.currentUser,
    }),

    ...mapState({
      getCurrentUserIsLoading: ({ auth }) => auth.isLoading,
    }),

    getNavList() {
      if (this.getIsLoggedIn) {
        return [...this.dataNavListLogged, ...this.getNavLinkUser]
      }
      return [...this.dataNavListDefault]
    },

    getNavLinkUser() {
      if (this.getCurrentUser) {
        return {
          content: `${this.getCurrentUser.userName}`,
          path: `/users/${this.getCurrentUser.userName}`,
        }
      }

      if (this.getCurrentUserIsLoading) {
        return {
          content: "Loading...",
          path: this.$route.path,
        }
      }

      return null
    },

    getClassActiveNavList() {
      return {
        "navbar__nav-list--active": this.isMenuShow,
      }
    },
  },

  methods: {
    toggleMenu() {
      this.isMenuShow = !this.isMenuShow
    },
  },
}
</script>
<style lang="scss">
.navbar__container {
  @include container;

  display: flex;
  flex-wrap: wrap;
  align-content: center;
  align-items: center;
  justify-content: space-between;

  padding-top: $space-s;
  padding-bottom: $space-s;
}

.navbar__burger {
  display: block;

  @media (min-width: $min-width-tablet) {
    display: none;
  }
}

.navbar__nav-list {
  display: none;
  width: 100%;
  margin: 0;

  &--active {
    display: block;
  }

  @media (min-width: $min-width-tablet) {
    display: flex;

    width: auto;
    margin: 0 ($space-s * -1);
  }
}
</style>
