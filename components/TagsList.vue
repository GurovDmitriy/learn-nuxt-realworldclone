<template>
  <div class="tags-list">
    <slot name="default"></slot>
    <ul class="tags-list__box">
      <li
        v-for="(item, index) in dataItems"
        :key="item.content"
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
    dataItems: {
      type: Array,
      required: false,
      default: () => [{ content: "notags" }],
    },
  },

  computed: {
    pathTags() {
      return this.dataItems.map((item) => {
        return item.content.split(" ").join("-")
      })
    },
  },
}
</script>

<style lang="scss">
.tags-list {
  padding: $space-m;

  background-color: $var-color-grey-light;
  border-radius: 5px;
}

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
  padding: $space-xs $space-s;

  @include text-small;

  color: $var-color-white;
  text-transform: lowercase;
  text-decoration: none;

  background-color: $var-color-grey;
  border-radius: 50px;

  &:hover {
    background-color: $var-color-purple;
  }
}
</style>
