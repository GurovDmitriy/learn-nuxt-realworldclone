<template>
  <div>
    <AppForm
      class="form-register"
      :data-item="config.form"
      novalidate="true"
      @submitForm="register"
    >
      <template #default>
        <KeepAlive>
          <Component
            :is="getActivePart"
            :data-item="field"
            class="form-register__fieldset"
            @inputUser="setField"
            @blurField="setCheckField"
          />
        </KeepAlive>
      </template>
      <template #box-btn>
        <AppFormErrors
          v-if="getIsVisibleFormErrors"
          :data-item="errorsForm"
          class="form-register__errors"
        />
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
  </div>
</template>

<script>
import { getClone, isNotEmptyObj } from "~/helpers/utils"
import { forms } from "~/helpers/vars"
import checkField from "~/helpers/checkField"
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
        firstName: "",
        image: "",
        email: "",
        password: "",
        role: "user",
      },

      errorsForm: {},
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

    getIsVisibleFormErrors() {
      return isNotEmptyObj(this.errorsForm)
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

    setCheckField(nameField) {
      const value = this.field[nameField]
      let messages = []
      let caption = ""

      switch (nameField) {
        case "userName":
          setData("checkFieldUserName")
          break
        case "email":
          setData("checkFieldEmail")
          break
        case "password":
          setData("checkFieldPassword")
          break
        case "firstName":
          setData("checkFieldFirstName")
          break
        case "lastName":
          setData("checkFieldLastName")
          break
        case "image":
          setData("checkFieldUrl")
          break
      }

      function setData(nameMethod) {
        messages = checkField[nameMethod](value)
        caption = forms.sign[nameField].message.caption
      }

      this.setErrorsForm(nameField, caption, messages)
      if (!messages.length) this.removeErrorsForm(nameField)
    },

    setErrorsForm(nameField, caption, messages) {
      const data = {}

      data[nameField] = { caption: "", messages: [] }
      data[nameField].caption = caption
      data[nameField].messages = getClone(messages)

      const errorsClone = getClone(this.errorsForm)

      this.errorsForm = Object.assign({}, errorsClone, data)
    },

    removeErrorsForm(nameField) {
      const data = getClone(this.errorsForm)
      delete data[nameField]

      this.errorsForm = data
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
