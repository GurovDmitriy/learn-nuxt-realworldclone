<template>
  <li class="tags-list-item">
    <NuxtLink
      :to="{ path: `/tags/${dataItem}` }"
      class="tags-list-item__link"
      >{{ dataItem }}</NuxtLink
    >
  </li>
</template>

<script>
import { isNotEmptyStr } from "~/helpers/utils"

export default {
  props: {
    dataItem: {
      type: String,
      required: true,
      validator: (value) => {
        return isNotEmptyStr(value)
      },
    },
  },
}
</script>

<style lang="scss">
.tags-list-item {
  margin: 0 $space-xxs;
  margin-bottom: $space-xs;
}

.tags-list-item__link {
  @include text-small;

  display: block;
  padding: $space-xs $space-s;

  color: $var-color-gray-nurse;
  line-height: 1;
  text-transform: lowercase;
  text-decoration: none;

  background-color: $var-color-default;
  border-radius: 50px;

  &:hover {
    background-color: $var-color-east-side;
  }
}
</style>
