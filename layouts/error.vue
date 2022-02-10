<template>
  <div class="error">
    <p class="error__caption">Error</p>
    <p class="error__message">{{ errorValid.message }}</p>
    <p class="error__status">status code: {{ errorValid.statusCode }}</p>
  </div>
</template>

<script>
export default {
  props: {
    error: {
      type: Object,
      required: false,
      default: () => {},
    },
  },

  computed: {
    errorValid() {
      return {
        message: this.error.message || "Error: unknown error",
        statusCode: this.error.statusCode || "000",
      }
    },
  },
}
</script>

<style lang="scss">
.error {
  @include container;

  padding-top: $space-xl;
  padding-bottom: $space-xl;
}

.error__caption {
  @include caption-h2;

  margin-bottom: $space-m;

  color: $var-color-grey;
  text-align: center;
}

.error__message {
  @include text-small;

  margin-bottom: $space-s;

  color: $var-color-grey;
  text-align: center;
}

.error__status {
  @include text-small;

  margin-bottom: 0;

  color: $var-color-grey;
  text-align: center;
}
</style>
