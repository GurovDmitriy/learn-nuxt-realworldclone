<template>
  <button class="button" :type="dataItemValid.type" @click="emitClickBtn">
    <slot name="default">Click</slot>
  </button>
</template>

<script>
export default {
  props: {
    dataItem: {
      type: Object,
      required: false,
      default: () => ({
        // type - string type attr for btn
      }),
    },
  },

  computed: {
    dataItemValid() {
      const type = this.dataItem.type || "button"

      return {
        type,
      }
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
.button {
  display: block;
  padding: $space-m $space-l;

  color: $var-color-gray-nurse;

  background: none;
  background-color: $var-color-east-side;
  border: none;
  border-radius: 4px;

  cursor: pointer;
}
</style>
