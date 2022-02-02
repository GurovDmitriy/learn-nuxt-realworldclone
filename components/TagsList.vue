<template>
  <div class="tags-list">
    <slot name="default"></slot>
    <ul class="tags-list__box">
      <li
        v-for="(item, index) in dataItemValid"
        :key="item.id"
        class="tags-list__item"
      >
        <NuxtLink
          :to="{ path: `/tags/${pathTags[index]}` }"
          class="tags-list__link"
          >{{ item.content }}</NuxtLink
        >
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    dataItem: {
      type: Array,
      required: false,
      default: () => [{ content: "no tags" }],
    },
  },

  computed: {
    dataItemValid() {
      if (!this.dataItem.length) return [{ content: "no tags" }]
      return [...this.dataItem]
    },

    pathTags() {
      return this.dataItemValid.map((item) => {
        return item.content.split(" ").join("-")
      })
    },
  },
}
</script>

<style lang="scss">
.tags-list__box {
  display: flex;
  flex-wrap: wrap;

  margin: 0 ($space-xxs * -1);
  padding: 0;

  list-style: none;
}

.tags-list__item {
  margin: $space-xxs;
  margin-top: 0;
}

.tags-list__link {
  @include text-small;

  display: block;
  padding: $space-xs $space-s;

  color: $var-color-white;
  line-height: 1;
  text-transform: lowercase;
  text-decoration: none;

  background-color: $var-color-grey;
  border-radius: 50px;

  &:hover {
    background-color: $var-color-purple;
  }
}
</style>
