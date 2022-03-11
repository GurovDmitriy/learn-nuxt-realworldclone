<template>
  <AppForm class="form-register" :data-item="dataForm" @submitForm="register">
    <template #default>
      <KeepAlive>
        <Component
          :is="activePart"
          class="form-register__fieldset"
          @inputUser="setInputUser"
        />
      </KeepAlive>
    </template>

    <template #box-btn>
      <div class="form-register__box-button">
        <AppButton
          v-if="showBtns.prev"
          :data-item="dataBtn.prev"
          @clickBtn="partPrev"
          >Prev</AppButton
        >
        <AppButton
          v-if="showBtns.next"
          :data-item="dataBtn.next"
          @clickBtn="partNext"
          >Next</AppButton
        >
        <AppButton v-if="showBtns.register" :data-item="dataBtn.register"
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
      dataForm: {
        method: "POST",
        action: "",
      },

      dataFormPart: {
        baseName: "TheFormRegisterPart",
        list: [1, 2],
        active: 0,
      },

      dataField: {
        username: "",
        email: "",
        password: "",
        firstname: "",
        lastname: "",
        avatar: "",
      },

      dataBtn: {
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

    async register() {
      await this.$store.dispatch(actionTypesAuth.register, this.dataField)
    },

    setInputUser(evt) {
      const name = evt.target.name
      const value = evt.target.value

      this.dataField[name] = value
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
