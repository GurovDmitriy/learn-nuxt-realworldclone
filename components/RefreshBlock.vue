<template>
  <div class="refresh">
    <p class="refresh__error">Something went wrong</p>
    <button class="refresh__btn" type="button" @click="emitClickRefresh">
      Refresh
    </button>
  </div>
</template>

<script>
export default {
  methods: {
    emitClickRefresh() {
      this.$emit("clickRefresh")
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
</style>
