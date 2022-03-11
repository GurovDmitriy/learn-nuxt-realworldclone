<template>
  <textarea
    v-bind="$attrs"
    :id="dataItemValid.id"
    :value="value"
    :name="dataItemValid.name"
    :placeholder="dataItemValid.placeholder"
    :maxlength="dataItem.maxlength"
    :required="dataItem.required"
    class="textarea"
    v-on="listeners"
  ></textarea>
</template>

<script>
export default {
  props: {
    value: {
      type: String,
      required: false,
      default: "",
    },

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
      }),
    },
  },

  computed: {
    dataItemValid() {
      const name = this.dataItem.name || ""
      const placeholder = this.dataItem.placeholder || "Placeholder"
      const id = this.dataItem.id || ""
      const maxlength = this.dataItem.maxlength || 500
      const required = this.dataItem.required || false

      return {
        name,
        placeholder,
        id,
        maxlength,
        required,
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
.textarea {
  display: block;
  width: 100%;
  height: 200px;
  min-height: 100px;
  max-height: 300px;
  padding: $space-m $space-l;

  border: 1px solid $var-color-default;
  border-radius: 4px;

  resize: vertical;

  &::placeholder {
    color: $var-color-default;
  }
}
</style>
