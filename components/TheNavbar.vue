<template>
  <nav class="navbar">
    <h2 class="navbar__caption visually-hidden">Navigation</h2>
    <div class="navbar__container">
      <AppLogo class="navbar__logo" />
      <AppBurger class="navbar__burger" @clickBtn="toggleMenu" />
      <AppNavList
        :data-item="dataNavList"
        :class="classNavList"
        class="navbar__nav-list"
      />
    </div>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      isMenuShow: false,
      dataNavList: [
        { content: "Home", path: "/" },
        { content: "Sign in", path: "/login" },
        { content: "Sign up", path: "/register" },
      ],
    }
  },

  computed: {
    classNavList() {
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
