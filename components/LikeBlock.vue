<template>
  <button class="like">
    <SvgIcon class="like__icon" name="heart-fill" desc="like" />
    <span class="like__text">{{ dataItemValid }}</span>
  </button>
</template>

<script>
export default {
  props: {
    dataItem: {
      type: Number,
      required: false,
      default: 0,
    },
  },

  computed: {
    dataItemValid() {
      const numb = this.dataItem || 0

      return numb
    },
  },
}
</script>

<style lang="scss">
.like {
  @include text-small;

  display: block;
  padding: $space-xs $space-s;

  color: $var-color-purple;
  line-height: 1;

  background: none;
  border: 1px solid $var-color-purple;
  border-radius: 4px;
}

.like__icon {
  display: inline-block;
  width: 16px;
  height: 16px;

  vertical-align: middle;
}

.like__text {
  display: inline-block;

  vertical-align: middle;
}
</style>
