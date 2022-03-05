<template>
  <div class="refresh">
    <p class="refresh__error">Something went wrong</p>
    <ButtonIcon
      :data-item="dataButtonRefresh"
      class="refresh__button-icon"
      @clickButton="emitClickButton"
      >Refresh</ButtonIcon
    >
  </div>
</template>

<script>
export default {
  data() {
    return {
      dataButtonRefresh: {
        iconName: "arrow-clockwise",
        iconDesc: "refresh",
      },
    }
  },

  methods: {
    emitClickButton() {
      this.$emit("clickButton")
    },
  },
}
</script>

<style lang="scss">
.refresh__error {
  @include text-small;

  margin-bottom: 0;

  color: inherit;
  font-weight: $font-weight-light;
}

.refresh__btn {
  @include text-small;

  padding: $space-s;

  color: inherit;
  font-weight: $font-weight-light;
  line-height: 1;

  background: none;
  border: 1px solid currentColor;
  border-radius: 4px;
}

.refresh__button-icon {
  color: inherit;

  border-color: currentColor;
}
</style>
