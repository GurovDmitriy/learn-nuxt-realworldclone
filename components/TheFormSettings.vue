<template>
  <AppForm
    class="form-settings"
    :data-item="config.form"
    @submitForm="updateSettings"
  >
    <template #default>
      <fieldset class="form-settings__fieldset">
        <legend class="form-settings__legend visually-hidden">User Data</legend>
        <label class="form-settings__label visually-hidden" for="avatar-field"
          >Avatar</label
        >
        <AppInput
          v-model="field.image"
          class="form-settings__input form-settings__input--avatar"
          :data-item="config.input.image"
        />
        <label class="form-settings__label visually-hidden" for="username-field"
          >Username</label
        >
        <AppInput
          v-model="field.userName"
          class="form-settings__input form-settings__input--username"
          :data-item="config.input.userName"
        />
        <label class="form-settings__label visually-hidden" for="email-field"
          >Email</label
        >
        <AppInput
          v-model="field.email"
          class="form-settings__input form-settings__input--email"
          :data-item="config.input.email"
        />
        <label class="form-settings__label visually-hidden" for="password-field"
          >Password</label
        >
        <AppInput
          v-model="field.password"
          class="form-settings__input form-settings__input--password"
          :data-item="config.input.password"
        />
      </fieldset>
    </template>

    <template #box-btn>
      <div class="form-settings__box-btn">
        <AppButton
          class="form-settings__btn form-settings__btn--logout"
          :data-item="config.btn.logout"
          @clickBtn="logout"
          >Logout</AppButton
        >
        <AppButton
          class="form-settings__btn form-settings__btn--update"
          :data-item="config.btn.update"
          >Update</AppButton
        >
      </div>
    </template>
  </AppForm>
</template>

<script>
import { mapGetters } from "vuex"
import {
  getterTypes as getterTypesAuth,
  actionTypes as actionTypesAuth,
} from "~/store/auth"

export default {
  data() {
    return {
      config: {
        form: {
          method: "POST",
          action: "",
        },

        input: {
          image: {
            name: "avatar",
            type: "url",
            placeholder: "Avatar",
            id: "avatar-field",
            maxlength: 100,
            required: false,
          },

          userName: {
            name: "username",
            type: "text",
            placeholder: "Username",
            id: "username-field",
            required: true,
            maxlength: 100,
          },

          email: {
            name: "email",
            type: "email",
            placeholder: "Email",
            id: "email-field",
            required: true,
            maxlength: 100,
          },

          password: {
            name: "password",
            type: "password",
            placeholder: "Password",
            id: "password-field",
            required: true,
            maxlength: 100,
          },
        },

        btn: {
          logout: { type: "button" },
          update: { type: "submit" },
        },
      },

      field: {
        image: "",
        userName: "",
        email: "",
        password: "",
      },
    }
  },

  computed: {
    ...mapGetters({
      getCurrentUser: getterTypesAuth.getCurrentUser,
    }),
  },

  mounted() {
    this.setField()
  },

  methods: {
    setField() {
      this.field = Object.assign({}, this.field, this.getCurrentUser)
    },

    async updateSettings() {
      await this.$store.dispatch(actionTypesAuth.updateCurrentUser, this.field)
      this.field.password = ""
    },

    async logout() {
      await this.$store.dispatch(actionTypesAuth.logout)
      return this.$router.push({ path: "/login" })
    },
  },
}
</script>

<style lang="scss">
.form-settings {
  margin-bottom: $space-xxl;
}

.form-settings__input {
  margin-bottom: $space-l;

  &:last-child {
    margin-bottom: 0;
  }
}

.form-settings__box-btn {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
}
</style>
