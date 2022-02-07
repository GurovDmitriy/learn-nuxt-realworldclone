<template>
  <main class="main">
    <h2 class="main__caption visually-hidden">Main Content</h2>
    <MainColumnLeft class="main__column main__column--left" />
    <MainColumnRight class="main__column main__column--right" />
  </main>
</template>

<script>
import PageMainMixin from "~/mixins/PageMainMixin"

export default {
  mixins: [PageMainMixin],
}
</script>

<style lang="scss">
.main {
  @include container;

  padding-top: $space-l;
  padding-bottom: $space-l;

  @media (min-width: $min-width-tablet) {
    display: flex;
    justify-content: space-between;
  }
}

.main__column--left {
  margin-bottom: $space-l;

  @media (min-width: $min-width-tablet) {
    width: 70%;
    margin-right: $space-xl;
    margin-bottom: 0;
  }
}

.main__column--right {
  @media (min-width: $min-width-tablet) {
    flex-grow: 1;
  }
}
</style>
