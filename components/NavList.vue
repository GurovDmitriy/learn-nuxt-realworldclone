<template>
  <ul class="nav-list">
    <NavListItem
      v-for="item in navListLink"
      :key="item.content"
      :data-item="item"
    />
  </ul>
</template>

<script>
export default {
  data() {
    return {
      navListLink: [
        { content: "Home", path: "/" },
        { content: "Sign in", path: "/login" },
        { content: "Sign up", path: "/register" },
      ],
    }
  },
}
</script>

<style lang="scss">
.nav-list {
  display: flex;
  flex-wrap: wrap;

  margin: 0 -10px;
  padding: 0;

  list-style: none;
}
</style>
