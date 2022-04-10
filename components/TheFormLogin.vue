<template>
  <AppForm class="form-login" :data-item="config.form" @submitForm="login">
    <template #default>
      <fieldset class="form-login__fieldset">
        <legend class="form-login__legend visually-hidden">Login</legend>
        <label class="form-login__label visually-hidden" for="email-field"
          >Email</label
        >
        <AppInput
          v-model="field.email"
          class="form-login__input form-login__input--email"
          :data-item="config.input.email"
        />
        <label class="form-login__label visually-hidden" for="password-field"
          >Password</label
        >
        <AppInput
          v-model="field.password"
          class="form-login__input form-login__input--password"
          :data-item="config.input.password"
        />
      </fieldset>
    </template>

    <template #box-btn>
      <AppButton
        class="form-login__btn form-login__btn--login"
        :data-item="config.btn.login"
        >Login</AppButton
      >
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

        input: {
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

        btn: {
          login: { type: "submit" },
        },
      },

      field: {
        email: "",
        password: "",
      },
    }
  },

  methods: {
    async login() {
      await this.$store.dispatch(actionTypesAuth.login, this.field)
      return this.$router.push({ path: "/" })
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
