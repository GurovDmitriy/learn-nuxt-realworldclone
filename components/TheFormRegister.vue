<template>
  <form class="form-register" method="POST" @submit.prevent="formSubmit">
    <KeepAlive>
      <Component
        :is="activePart"
        class="form-register__fieldset"
        @userInput="setUserInput"
      />
    </KeepAlive>
    <div class="form-register__box-button">
      <AppButton
        v-if="showBtns.prev"
        :data-item="dataButton.prev"
        @clickBtn="partPrev"
        >Prev</AppButton
      >
      <AppButton
        v-if="showBtns.next"
        :data-item="dataButton.next"
        @clickBtn="partNext"
        >Next</AppButton
      >
      <AppButton v-if="showBtns.register" :data-item="dataButton.register"
        >Register</AppButton
      >
    </div>
  </form>
</template>

<script>
import { actionTypes as actionTypesAuth } from "~/store/auth"

export default {
  data() {
    return {
      dataFormPart: {
        baseName: "TheFormRegisterPart",
        list: [1, 2],
        active: 0,
      },

      dataUserInput: {
        username: "",
        email: "",
        password: "",
        firstname: "",
        lastname: "",
        avatar: "",
      },

      dataUserInputDefault: {},

      dataButton: {
        prev: { type: "button" },
        next: { type: "button" },
        register: { type: "submit" },
      },
    }
  },

  computed: {
    activePart() {
      const baseName = this.dataFormPart.baseName
      const active = this.dataFormPart.active
      const activePart = this.dataFormPart.list[active]

      const name = `${baseName}${activePart}`
      return name
    },

    showBtns() {
      const prev = this.dataFormPart.active > 0
      const next = this.dataFormPart.active < this.dataFormPart.list.length - 1
      const register =
        this.dataFormPart.active === this.dataFormPart.list.length - 1

      return {
        prev,
        next,
        register,
      }
    },
  },

  mounted() {
    this.dataUserInputDefault = { ...this.dataUserInput }
  },

  methods: {
    partPrev() {
      const active = this.dataFormPart.active
      if (active === 0) return

      this.dataFormPart.active -= 1
    },

    partNext() {
      const active = this.dataFormPart.active
      const partCount = this.dataFormPart.list.length
      if (active === partCount - 1) return

      this.dataFormPart.active += 1
    },

    async formSubmit() {
      await this.$store.dispatch(actionTypesAuth.register, this.dataUserInput)
    },

    setUserInput(evt) {
      const name = evt.target.name
      const value = evt.target.value

      this.dataUserInput[name] = value
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
