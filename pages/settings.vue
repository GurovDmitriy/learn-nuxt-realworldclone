<template>
  <div>
    <AppPlaceholder />
    <AppButton @clickBtn="logout">Logout</AppButton>
  </div>
</template>

<script>
import { actionTypes as actionTypesAuth } from "~/store/auth"

export default {
  layout: "sign",

  methods: {
    async logout() {
      await this.$store.dispatch(actionTypesAuth.logout)
    },
  },
}
</script>
