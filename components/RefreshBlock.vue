<template>
  <div class="refresh">
    <p class="refresh__error">Something went wrong</p>
    <ButtonIcon
      :data-item="dataButtonRefresh"
      class="refresh__button-icon"
      @clickBtnIcon="emitRefreshData"
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
    emitRefreshData() {
      this.$emit("refreshData")
    },
  },
}
</script>

<style lang="scss">
.refresh__error {
  @include text-small;

  margin-bottom: 0;

  color: $var-color-grey;
  font-weight: $font-weight-light;
}

.refresh__btn {
  @include text-small;

  padding: $space-s;

  color: $var-color-grey;
  font-weight: $font-weight-light;
  line-height: 1;

  background: none;
  border: 1px solid $var-color-grey;
  border-radius: 4px;
}

.refresh__button-icon {
  color: $var-color-grey;

  border-color: $var-color-grey;
}
</style>
