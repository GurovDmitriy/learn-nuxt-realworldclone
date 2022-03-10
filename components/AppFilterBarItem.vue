<template>
  <li class="filter-bar-item">
    <NuxtLink
      :to="{ path: dataItem.path }"
      class="filter-bar-item__link"
      :class="classActive"
      >{{ dataItem.content }}</NuxtLink
    >
  </li>
</template>

<script>
export default {
  props: {
    dataItem: {
      type: Object,
      required: false,
      default: () => ({
        // content - string name path
        // path    - string path
        // active  - boolean for exact active class
      }),
    },
  },

  computed: {
    dataItemValid() {
      const content = this.dataItem.content || "Unknown feed"
      const path = this.dataItem.path || "/"
      const active = this.dataItem.active || false

      return {
        content,
        path,
        active,
      }
    },

    classActive() {
      return {
        "filter-bar-item__link--active": this.dataItemValid.active,
      }
    },
  },
}
</script>

<style lang="scss">
.filter-bar-item {
  margin-bottom: -2px;
}

.filter-bar-item__link {
  display: block;
  padding: $space-s;

  color: $var-color-default;
  text-decoration: none;

  border-bottom: 2px solid transparent;

  &--active {
    color: $var-color-east-side;

    border-bottom: 2px solid $var-color-east-side;
  }

  &:hover {
    color: $var-color-default;
  }
}
</style>
