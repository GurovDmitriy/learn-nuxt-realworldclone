<template>
  <li class="paginator-list-item">
    <NuxtLink
      class="paginator-list-item__link"
      :class="getClassActive"
      :to="{
        path: pathPage,
        query: { page: dataItem },
      }"
      >{{ dataItem }}</NuxtLink
    >
  </li>
</template>

<script>
export default {
  props: {
    dataItem: {
      type: Number,
      required: true,
    },

    pathPage: {
      type: String,
      required: true,
    },

    isActive: {
      type: Boolean,
      require: false,
      default: false,
    },
  },

  computed: {
    getClassActive() {
      return {
        "paginator-list-item__link--active": this.isActive,
      }
    },
  },
}
</script>

<style lang="scss">
.paginator-list-item__link {
  @include text-small;

  display: block;
  padding: $space-s $space-m;

  color: $var-color-default;
  line-height: 1;
  text-decoration: none;

  background-color: $var-color-amethyst-smoke;
  border-radius: 4px;

  &--active {
    color: $var-color-white;

    background-color: $var-color-east-side;
  }

  &:hover {
    color: $var-color-white;

    background-color: $var-color-east-side;
  }
}

.paginator-list-item__link.nuxt-link-exact-active {
  color: $var-color-white;

  background-color: $var-color-east-side;
}
</style>
