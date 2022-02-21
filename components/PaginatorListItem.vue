<template>
  <li class="paginator-list-item">
    <NuxtLink
      class="paginator-list-item__link"
      :to="{ path: `${dataItemValid.pagePath}/${dataItemValid.pageNum}` }"
      >{{ dataItemValid.pageNum }}</NuxtLink
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
        // pagePath
        // pageNum
      }),
    },
  },

  computed: {
    dataItemValid() {
      const pagePath = this.dataItem.pagePath || "/"
      const pageNum = this.dataItem.pageNum || 1

      return {
        pagePath,
        pageNum,
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

  color: $var-color-grey;
  line-height: 1;
  text-decoration: none;

  background-color: $var-color-grey-light;
  border-radius: 4px;

  &:hover {
    color: $var-color-white;

    background-color: $var-color-grey;
  }
}

.paginator-list-item__link.nuxt-link-exact-active {
  color: $var-color-white;

  background-color: $var-color-grey;
}
</style>
