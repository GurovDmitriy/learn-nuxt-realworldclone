<template>
  <button class="button-icon" @click="emitClickBtn">
    <SvgIcon
      class="button-icon__icon"
      :name="dataItemValid.iconName"
      :desc="dataItemValid.iconDesc"
    />
    <span class="button-icon__text" :style="dataItemValid.colorText"
      ><slot name="default">Click</slot></span
    >
  </button>
</template>

<script>
export default {
  props: {
    dataItem: {
      type: Object,
      required: false,
      default: () => ({}),
    },
  },

  computed: {
    dataItemValid() {
      const iconName = this.dataItem.iconName || "bug-fill"
      const iconDesc = this.dataItem.iconDesc || "icon"
      const colorText = this.dataItem.colorText || "$var-color-purple"

      return {
        iconName,
        iconDesc,
        colorText,
      }
    },
  },

  methods: {
    emitClickBtn() {
      this.$emit("clickBtnIcon")
    },
  },
}
</script>

<style lang="scss">
.button-icon {
  @include text-small;

  display: block;
  padding: $space-xs $space-s;

  color: $var-color-purple;
  line-height: 1;

  background: none;
  border: 1px solid $var-color-purple;
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

  text-align: center;
  vertical-align: middle;
}
</style>
