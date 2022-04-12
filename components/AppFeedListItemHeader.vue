<template>
  <div class="feed-list-item-header">
    <AppAuthor :data-item="getAuthor" class="feed-list-item-header__author" />
    <AppButtonIcon
      :data-item="dataBtnLike"
      :is-active="true"
      class="feed-list-item-header__button-icon"
      @clickBtn="emitToggleLike"
      >{{ 1 }}</AppButtonIcon
    >
  </div>
</template>

<script>
export default {
  props: {
    dataItem: {
      type: Object,
      required: true,
    },

    dataBtnLike: {
      type: Object,
      required: true,
    },
  },

  computed: {
    getAuthor() {
      const pathLink = `/users/${this.dataItem.userName}`
      const width = 38
      const height = 38
      const placeholder = "placeholder-avatar.png"
      const alt = this.dataItem.userName

      return {
        ...this.dataItem,
        pathLink,
        width,
        height,
        alt,
        placeholder,
      }
    },
  },

  methods: {
    emitToggleLike() {
      this.$emit("toggleLike", this.dataItem.id)
    },
  },
}
</script>

<style lang="scss">
.feed-list-item-header {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;

  margin-bottom: $space-s;
}

.feed-list-item-header__author {
  max-width: 70%;
  margin-right: $space-m;
}

.feed-list-item-header__button-icon {
  color: grey;

  &--active {
    color: red;
  }
}
</style>
