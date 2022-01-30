<template>
  <button class="burger" @click="emitClickBurger">
    <span class="burger__text visually-hidden">open/close menu</span>
  </button>
</template>

<script>
export default {
  methods: {
    emitClickBurger() {
      this.$emit("clickBurger")
    },
  },
}
</script>

<style lang="scss">
.burger {
  position: relative;

  display: none;
  width: 30px;
  height: 30px;

  background: none;
  border: none;

  &::after {
    @extend %burger-bar;

    top: 5px;
  }

  &::before {
    @extend %burger-bar;

    bottom: 5px;
  }
}

%burger-bar {
  position: absolute;
  left: 50%;

  display: block;
  width: 100%;
  height: 4px;

  background-color: $var-color-grey-dark;
  transform: translate(-50%, 0%);

  content: "";
}
</style>
