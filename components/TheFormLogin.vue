<template>
  <AppForm class="form-login" :data-item="configForm" @submitForm="login">
    <template #default>
      <fieldset class="form-login__fieldset">
        <legend class="form-login__legend visually-hidden">Login</legend>
        <label class="form-login__label visually-hidden" for="email-field"
          >Email</label
        >
        <AppInput
          v-model="dataField.email"
          class="form-login__input form-login__input--email"
          :data-item="configInput.email"
        />
        <label class="form-login__label visually-hidden" for="password-field"
          >Password</label
        >
        <AppInput
          v-model="dataField.password"
          class="form-login__input form-login__input--password"
          :data-item="configInput.password"
        />
      </fieldset>
    </template>

    <template #box-btn>
      <AppButton
        class="form-login__btn form-login__btn--login"
        :data-item="configBtn.login"
        >Login</AppButton
      >
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

      configInput: {
        email: {
          name: "email",
          type: "email",
          placeholder: "Email",
          id: "email-field",
          required: true,
        },

        password: {
          name: "password",
          type: "password",
          placeholder: "Password",
          id: "password-field",
          required: true,
        },
      },

      configBtn: {
        login: { type: "submit" },
      },

      dataField: {
        email: "",
        password: "",
      },
    }
  },

  methods: {
    async login() {
      await this.$store.dispatch(actionTypesAuth.login, this.dataField)
      this.resetForm()
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

.form-login__btn {
  &--login {
    margin-left: auto;
  }
}
</style>
