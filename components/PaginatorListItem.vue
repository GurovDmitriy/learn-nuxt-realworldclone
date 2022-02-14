<template>
  <li class="paginator-list-item">
    <NuxtLink
      class="paginator-list-item__link"
      :to="{ path: dataItemValid.pageSlug }"
      >{{ dataItemValid.pageNum }}</NuxtLink
    >
  </li>
</template>

<script>
import { isEmptyObj } from "~/helpers/isEmpty"

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
      const data = !isEmptyObj(this.dataItem)
        ? { ...this.dataItem }
        : { pageSlug: null, pageTotal: 1, pageNum: 1 }

      return data
    },
  },
}
</script>
