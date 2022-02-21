<template>
  <li class="paginator-list-item">
    <NuxtLink
      class="paginator-list-item__link"
      :class="classActive"
      :to="{
        path: dataItemValid.pagePath,
        query: dataItemValid.pageQuery,
      }"
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
        // pageQuery
        // pageNum
        // isClassActive
      }),
    },
  },

  computed: {
    dataItemValid() {
      const pageNum = this.dataItem.pageNum || 1
      const pagePath = this.dataItem.pagePath || "/"
      const pageQuery = { page: pageNum }
      const isClassActive = this.dataItem.isClassActive

      return {
        pagePath,
        pageQuery,
        pageNum,
        isClassActive,
      }
    },

    classActive() {
      return {
        "paginator-list-item__link--active": this.dataItemValid.isClassActive,
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

  &--active {
    color: $var-color-white;

    background-color: $var-color-grey;
  }

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
