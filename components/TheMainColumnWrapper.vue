<template>
  <div class="main-column-wrapper">
    <TheMainColumnWrapperLeft
      class="main-column-wrapper__column main-column-wrapper__column--left"
    />
    <TheMainColumnWrapperRight
      class="main-column-wrapper__column main-column-wrapper__column--right"
    />
  </div>
</template>

<style lang="scss">
.main-column-wrapper {
  @media (min-width: $min-width-tablet) {
    display: flex;
    justify-content: space-between;
  }
}

.main-column-wrapper__column--left {
  margin-bottom: $space-l;

  @media (min-width: $min-width-tablet) {
    width: 70%;
    margin-right: $space-xl;
    margin-bottom: 0;
  }
}

.main-column-wrapper__column--right {
  @media (min-width: $min-width-tablet) {
    flex-grow: 1;
  }
}
</style>
