<template>
  <button class="button-burger" @click="emitClick">
    <span class="button-burger__text visually-hidden">open/close menu</span>
  </button>
</template>

<script>
export default {
  methods: {
    emitClick() {
      this.$emit("clickButton")
    },
  },
}
</script>

<style lang="scss">
.button-burger {
  position: relative;

  display: none;
  width: 30px;
  height: 30px;

  background: none;
  border: none;

  &::after {
    @extend %button-burger-bar;

    top: 5px;
  }

  &::before {
    @extend %button-burger-bar;

    bottom: 5px;
  }
}

%button-burger-bar {
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
