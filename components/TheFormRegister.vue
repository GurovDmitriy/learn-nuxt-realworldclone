<template>
  <AppForm class="form-register" :data-item="configForm" @submitForm="register">
    <template #default>
      <KeepAlive>
        <Component
          :is="getActivePart"
          :data-item="dataField"
          class="form-register__fieldset"
          @inputUser="setDataField"
        />
      </KeepAlive>
    </template>

    <template #box-btn>
      <div class="form-register__box-button">
        <AppButton
          v-if="getVisibleBtns.prev"
          :data-item="configBtn.prev"
          @clickBtn="setPartPrev"
          >Prev</AppButton
        >
        <AppButton
          v-if="getVisibleBtns.next"
          :data-item="configBtn.next"
          @clickBtn="setPartNext"
          >Next</AppButton
        >
        <AppButton
          v-if="getVisibleBtns.register"
          :data-item="configBtn.register"
          >Register</AppButton
        >
      </div>
    </template>
  </AppForm>
</template>

<script>
import FormMixin from "~/mixins/formMixin"
import { actionTypes as actionTypesAuth } from "~/store/auth"

export default {
  mixins: [FormMixin],

  data() {
    return {
      configForm: {
        method: "POST",
        action: "",
      },

      configFormPart: {
        baseName: "TheFormRegisterPart",
        list: [1, 2],
        active: 0,
      },

      dataField: {
        userName: "",
        lastName: "",
        image: "",
        email: "",
        password: "",
        firstName: "",
      },

      configBtn: {
        prev: { type: "button" },
        next: { type: "button" },
        register: { type: "submit" },
      },
    }
  },

  computed: {
    getActivePart() {
      const baseName = this.configFormPart.baseName
      const active = this.configFormPart.active
      const activePart = this.configFormPart.list[active]

      return `${baseName}${activePart}`
    },

    getVisibleBtns() {
      const prev = this.configFormPart.active > 0
      const next =
        this.configFormPart.active < this.configFormPart.list.length - 1
      const register =
        this.configFormPart.active === this.configFormPart.list.length - 1

      return {
        prev,
        next,
        register,
      }
    },
  },

  methods: {
    setPartPrev() {
      if (this.configFormPart.active === 0) return
      this.configFormPart.active -= 1
    },

    setPartNext() {
      if (this.configFormPart.active === this.configFormPart.list.length - 1)
        return
      this.configFormPart.active += 1
    },

    setDataField({ value, nameField }) {
      this.dataField[nameField] = value
    },

    async register() {
      await this.$store.dispatch(actionTypesAuth.register, this.dataField)
      this.resetForm()
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
