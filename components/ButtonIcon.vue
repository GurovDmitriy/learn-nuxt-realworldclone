<template>
  <button class="button-icon" @click="emitClickButton">
    <SvgIcon
      class="button-icon__icon"
      :name="dataItemValid.iconName"
      :desc="dataItemValid.iconDesc"
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
        // iconName    - string name icon
        // iconDesc    - string icon description
      }),
    },
  },

  computed: {
    dataItemValid() {
      const iconName = this.dataItem.iconName || "bug-fill"
      const iconDesc = this.dataItem.iconDesc || "icon"

      return {
        iconName,
        iconDesc,
      }
    },
  },

  methods: {
    emitClickButton() {
      this.$emit("clickButton")
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

  color: $var-color-purple;

  text-align: center;
  vertical-align: middle;
}
</style>
