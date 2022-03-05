<template>
  <ul class="feed-list-placeholder">
    <AppFeedListPlaceholderItem
      v-for="item in dataItemValid"
      :key="item"
      class="feed-list-placeholder__item"
    />
  </ul>
</template>

<script>
import { placeholder } from "~/helpers/vars"

export default {
  props: {
    dataItem: {
      type: Number,
      required: false,
      default: null,
    },
  },

  computed: {
    dataItemValid() {
      const numb = this.dataItem || placeholder.feedListCount

      return numb
    },
  },
}
</script>

<style lang="scss">
.feed-list-placeholder {
  display: block;
  margin: 0;
  padding: 0;

  list-style: none;
}
</style>
