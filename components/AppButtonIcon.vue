<template>
  <button class="button-icon" :type="dataItem.type" @click="emitClickBtn">
    <SvgIcon
      class="button-icon__icon"
      :name="dataItem.iconName"
      :desc="dataItem.iconDesc"
    />
    <span class="button-icon__text"><slot name="default">Click</slot></span>
  </button>
</template>

<script>
export default {
  props: {
    dataItem: {
      type: Object,
      required: false,
      default: () => ({
        type: "button",
        iconName: "bug-fill",
        iconDesc: "icon",
      }),
    },
  },

  methods: {
    emitClickBtn() {
      this.$emit("clickBtn")
    },
  },
}
</script>

<style lang="scss">
.button-icon {
  @include text-small;

  display: block;
  padding: $space-xs $space-s;

  color: $var-color-east-side;
  line-height: 1;

  background: none;
  border: 1px solid $var-color-east-side;
  border-radius: 4px;

  &:hover {
    cursor: pointer;
  }
}

.button-icon__icon {
  display: inline-block;
  width: 16px;
  height: 16px;

  vertical-align: middle;
}

.button-icon__text {
  display: inline-block;
  margin: 0 auto;

  color: inherit;

  text-align: center;
  vertical-align: middle;
}
</style>
