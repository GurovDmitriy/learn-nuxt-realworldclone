<template>
  <div class="input">
    <input
      v-bind="$attrs"
      :id="dataItemValid.id"
      :type="dataItemValid.type"
      :name="dataItemValid.name"
      :placeholder="dataItemValid.placeholder"
      :maxlength="dataItem.maxlength"
      :required="dataItem.required"
      :class="classItem.inputBoxIcon"
      class="input__field"
      v-on="listeners"
    />
    <div v-if="dataItem.iconName" class="input__box-icon">
      <SvgIcon
        class="input__icon"
        :name="dataItemValid.iconName"
        :desc="dataItemValid.iconDesc"
      />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    dataItem: {
      type: Object,
      required: false,
      default: () => ({
        // name        - string name input
        // type        - string type input
        // placeholder - string placeholder
        // id          - string id
        // maxlength   - number maxlength value
        // required    - boolean required
        // iconName    - string name icon
        // iconDesc    - string icon description
      }),
    },
  },

  computed: {
    dataItemValid() {
      const name = this.dataItem.name || ""
      const type = this.dataItem.type || "text"
      const placeholder = this.dataItem.placeholder || "Placeholder"
      const id = this.dataItem.id || ""
      const maxlength = this.dataItem.maxlength || 100
      const required = this.dataItem.required || false
      const iconName = this.dataItem.iconName || "pencil-square"
      const iconDesc = this.dataItem.iconDesc || "icon"

      return {
        name,
        type,
        placeholder,
        id,
        maxlength,
        required,
        iconName,
        iconDesc,
      }
    },

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
      // const value = evt.target.value
      this.$emit("input", evt)
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
