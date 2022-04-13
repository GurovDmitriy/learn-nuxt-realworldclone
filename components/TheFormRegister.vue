<template>
  <AppForm
    class="form-register"
    :data-item="config.form"
    @submitForm="register"
  >
    <template #default>
      <KeepAlive>
        <Component
          :is="getActivePart"
          :data-item="field"
          class="form-register__fieldset"
          @inputUser="setField"
        />
      </KeepAlive>
    </template>

    <template #box-btn>
      <div class="form-register__box-button">
        <AppButton
          v-if="getVisibleBtn.prev"
          :data-item="config.btn.prev"
          @clickBtn="setPartPrev"
          >Prev</AppButton
        >
        <AppButton
          v-if="getVisibleBtn.next"
          :data-item="config.btn.next"
          @clickBtn="setPartNext"
          >Next</AppButton
        >
        <AppButton
          v-if="getVisibleBtn.register"
          :data-item="config.btn.register"
          >Register</AppButton
        >
      </div>
    </template>
  </AppForm>
</template>

<script>
import { actionTypes as actionTypesAuth } from "~/store/auth"

export default {
  data() {
    return {
      config: {
        form: {
          method: "POST",
          action: "",
        },

        formPart: {
          baseName: "TheFormRegisterPart",
          list: [1, 2],
          active: 0,
        },

        btn: {
          prev: { type: "button" },
          next: { type: "button" },
          register: { type: "submit" },
        },
      },

      field: {
        userName: "",
        lastName: "",
        image: "",
        email: "",
        password: "",
        firstName: "",
        role: "user",
      },
    }
  },

  computed: {
    getActivePart() {
      const baseName = this.config.formPart.baseName
      const active = this.config.formPart.active
      const activePart = this.config.formPart.list[active]

      return `${baseName}${activePart}`
    },

    getVisibleBtn() {
      const active = this.config.formPart.active
      const countPart = this.config.formPart.list.length - 1

      const prev = active > 0
      const next = active < countPart
      const register = active === countPart

      return {
        prev,
        next,
        register,
      }
    },
  },

  methods: {
    setPartPrev() {
      if (this.config.formPart.active === 0) return
      this.config.formPart.active -= 1
    },

    setPartNext() {
      if (this.config.formPart.active === this.config.formPart.list.length - 1)
        return
      this.config.formPart.active += 1
    },

    setField({ value, nameField }) {
      this.field[nameField] = value
    },

    async register() {
      await this.$store.dispatch(actionTypesAuth.register, this.field)
      return this.$router.push({ path: "/" })
    },
  },
}
</script>

<style lang="scss">
.form-register {
  display: block;
  max-width: 600px;
  margin: 0 auto;
}

.form-register__box-button {
  display: flex;
  flex-wrap: wrap;
  align-content: center;
  align-items: center;
  justify-content: space-between;
}
</style>
