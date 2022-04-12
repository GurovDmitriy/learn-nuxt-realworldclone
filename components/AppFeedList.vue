<template>
  <ul class="feed-list">
    <AppFeedListItem
      v-for="(item, index) in dataItem"
      :key="item.id"
      :data-item="item"
      :data-btn-like="dataBtnLike[index]"
      class="feed-list__item"
      @toggleLike="emitToggleLike"
    />
  </ul>
</template>

<script>
export default {
  props: {
    dataItem: {
      type: Array,
      required: false,
      default: () => [
        {
          id: 1,
          image: "",
          userName: "Unknown",
          time: 1031974583,
          like: [],
          tags: ["no-tags"],
          title: "Nothing here yet...",
          preview: "Nothing here yet...",
        },
      ],
    },

    dataBtnLike: {
      type: Array,
      required: false,
      default: () => [
        {
          type: "button",
          iconName: "heart-fill",
          iconDesc: "heart",
          isActive: true,
        },
      ],
    },
  },

  methods: {
    emitToggleLike(feedId) {
      this.$emit("toggleLike", feedId)
    },
  },
}
</script>

<style lang="scss">
.feed-list {
  display: block;
  margin: 0;
  padding: 0;

  list-style: none;
}
</style>
