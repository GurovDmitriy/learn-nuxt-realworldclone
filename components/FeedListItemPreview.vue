<template>
  <div class="feed-list-item-preview">
    <h4 class="feed-list-item-preview__caption">
      {{ dataItemValid.title }}
    </h4>
    <p class="feed-list-item-preview__description">
      {{ dataItemValid.preview }}
    </p>
  </div>
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
      const title = this.dataItem.title || "No Title"
      const preview = this.dataItem.preview || "No Preview"

      return {
        title,
        preview,
      }
    },
  },
}
</script>

<style lang="scss">
.feed-list-item-preview__caption {
  @include caption-h3;

  margin-bottom: 0;
}

.feed-list-item-preview__description {
  margin-bottom: 0;

  color: $var-color-grey;
}
</style>
