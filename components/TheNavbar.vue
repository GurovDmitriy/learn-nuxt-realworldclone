<template>
  <nav class="navbar">
    <h2 class="navbar__caption visually-hidden">Navigation</h2>
    <div class="navbar__container">
      <LogoBlock class="navbar__logo" />
      <NavList class="navbar__nav-list" />
    </div>
  </nav>
</template>

<style lang="scss">
.navbar__container {
  @include container;

  display: flex;
  flex-wrap: wrap;
  align-content: center;
  align-items: center;
  justify-content: space-between;

  padding-top: 8px;
  padding-bottom: 8px;
}
</style>
