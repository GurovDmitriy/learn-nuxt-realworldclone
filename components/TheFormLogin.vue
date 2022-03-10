<template>
  <form class="form-login" method="POST" @submit.prevent="formSubmit">
    <fieldset class="form-login__fieldset">
      <legend class="form-login__legend visually-hidden">Login</legend>
      <div class="form-login">
        <template v-for="field in dataFormRegisterValid.dataUserLogin">
          <label
            :key="field.labelFor + field.className"
            :for="field.labelFor"
            class="visually-hidden"
            >{{ field.id }}</label
          >
          <AppInput
            :key="field.name + field.className"
            :class="field.className"
            :data-item="field"
            class="form-login__input"
            @input="setUserInput"
          />
        </template>
      </div>
    </fieldset>
    <AppButton :data-item="dataButton.login" class="form-login__button"
      >Login</AppButton
    >
  </form>
</template>

<script>
import FormSignMixin from "~/mixins/formSignMixin"
import { actionTypes as actionTypesAuth } from "~/store/auth"

export default {
  mixins: [FormSignMixin],

  data() {
    return {
      dataUserInput: {
        email: "",
        password: "",
      },

      dataButton: {
        login: {
          type: "submit",
        },
      },
    }
  },

  methods: {
    async formSubmit() {
      await this.$store.dispatch(actionTypesAuth.login, this.dataUserInput)
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
.form-login {
  display: block;
  max-width: 600px;
  margin: 0 auto;
}

.form-login__input {
  margin-bottom: $space-l;

  &:last-child {
    margin-bottom: 0;
  }
}

.form-login__fieldset {
  margin: 0;
  margin-bottom: $space-l;
  padding: 0;

  border: none;
}

.form-login__legend {
  margin: 0;
  padding: 0;
}

.form-login__button {
  margin-left: auto;
}
</style>
