<template>
  <div class="input">
    <input
      v-bind="$attrs"
      :id="dataItem.id"
      :value="value"
      :type="dataItem.type"
      :name="dataItem.name"
      :placeholder="dataItem.placeholder"
      :maxlength="dataItem.maxlength"
      :required="dataItem.required"
      :class="classItem.inputBoxIcon"
      class="input__field"
      v-on="listeners"
    />
    <div v-if="dataItem.iconName" class="input__box-icon">
      <SvgIcon
        class="input__icon"
        :name="dataItem.iconName"
        :desc="dataItem.iconDesc"
      />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    value: {
      type: [String, Number],
      required: false,
      default: "",
    },

    dataItem: {
      type: Object,
      required: false,
      default: () => ({
        value: "",
        name: "",
        type: "text",
        placeholder: "Placeholder",
        id: "",
        maxlength: 100,
        required: false,
        iconName: "pencil-square",
        iconDesc: "icon",
      }),
    },
  },

  computed: {
    listeners() {
      const input = this.updateValue
      const focus = this.onFocus
      const blur = this.onBlur

      return {
        ...this.$listeners,
        input,
        focus,
        blur,
      }
    },

    classItem() {
      return {
        inputBoxIcon: {
          "input__field--active": this.dataItem.iconName,
        },
      }
    },
  },

  methods: {
    updateValue(evt) {
      const value = evt.target.value
      this.$emit("input", value)
    },

    onFocus(value) {
      this.focused = true
      this.$emit("focus", value)
    },

    onBlur(value) {
      this.focused = false
      this.$emit("blur", value)
    },
  },
}
</script>

<style lang="scss">
.input {
  position: relative;
}

.input__field {
  display: block;
  width: 100%;
  padding: $space-m $space-l;

  border: 1px solid $var-color-default;
  border-radius: 4px;

  &::placeholder {
    color: $var-color-default;
  }

  &--active {
    padding-right: $space-xxl;
  }
}

.input__box-icon {
  position: absolute;
  top: 0;
  right: 0;

  width: 50px;
  height: 100%;

  pointer-events: none;
}

.input__icon {
  position: absolute;
  top: 50%;
  left: 50%;

  width: $space-l;

  color: $var-color-default;

  transform: translate(-50%, -50%);
}
</style>
