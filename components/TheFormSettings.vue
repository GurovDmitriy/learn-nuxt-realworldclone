<template>
  <AppForm
    class="form-settings"
    :data-item="configForm"
    @submitForm="updateSettings"
  >
    <template #default>
      <fieldset class="form-settings__fieldset">
        <legend class="form-settings__legend visually-hidden">User Data</legend>
        <label class="form-settings__label visually-hidden" for="avatar-field"
          >Avatar</label
        >
        <AppInput
          v-model="dataField.image"
          class="form-settings__input form-settings__input--avatar"
          :data-item="configInput.image"
        />
        <label class="form-settings__label visually-hidden" for="username-field"
          >Username</label
        >
        <AppInput
          v-model="dataField.userName"
          class="form-settings__input form-settings__input--username"
          :data-item="configInput.userName"
        />
        <label class="form-settings__label visually-hidden" for="email-field"
          >Email</label
        >
        <AppInput
          v-model="dataField.email"
          class="form-settings__input form-settings__input--email"
          :data-item="configInput.email"
        />
        <label class="form-settings__label visually-hidden" for="password-field"
          >Password</label
        >
        <AppInput
          v-model="dataField.password"
          class="form-settings__input form-settings__input--password"
          :data-item="configInput.password"
        />
      </fieldset>
    </template>

    <template #box-btn>
      <div class="form-settings__box-btn">
        <AppButton
          class="form-settings__btn form-settings__btn--logout"
          :data-item="configBtn.logout"
          @clickBtn="logout"
          >Logout</AppButton
        >
        <AppButton
          class="form-settings__btn form-settings__btn--update"
          :data-item="configBtn.update"
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
      configForm: {
        method: "POST",
        action: "",
      },

      configInput: {
        image: {
          name: "avatar",
          type: "url",
          placeholder: "Avatar",
          id: "avatar-field",
          maxlength: 500,
          required: false,
        },

        userName: {
          name: "username",
          type: "text",
          placeholder: "Username",
          id: "username-field",
          required: true,
        },

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
          required: false,
        },
      },

      configBtn: {
        logout: { type: "button" },
        update: { type: "submit" },
      },

      dataField: {
        image: "",
        userName: "",
        email: "",
        password: "",
      },
    }
  },

  computed: {
    ...mapGetters({
      getCurrentUser: getterTypesAuth.currentUser,
    }),
  },

  mounted() {
    this.dataField = Object.assign({}, this.dataField, this.getCurrentUser)
  },

  methods: {
    async updateSettings() {
      await this.$store.dispatch(actionTypesAuth.updateUser, this.dataField)
      this.dataField.password = ""
    },

    async logout() {
      await this.$store.dispatch(actionTypesAuth.logout)
      this.$router.push({ path: "/login" })
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
