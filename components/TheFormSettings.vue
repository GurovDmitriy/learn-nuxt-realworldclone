<template>
  <AppForm
    class="form-settings"
    :data-item="dataForm"
    @submitForm="updateSettings"
  >
    <template #default>
      <fieldset class="form-settings__fieldset">
        <legend class="form-settings__legend visually-hidden">User Data</legend>
        <label class="form-settings__label visually-hidden" for="avatar-field"
          >Avatar</label
        >
        <AppInput
          v-model="dataField.avatar"
          class="form-settings__input form-settings__input--avatar"
          :data-item="dataInput.avatar"
        />
        <label class="form-settings__label visually-hidden" for="username-field"
          >Username</label
        >
        <AppInput
          v-model="dataField.username"
          class="form-settings__input form-settings__input--username"
          :data-item="dataInput.username"
        />
        <label class="form-settings__label visually-hidden" for="email-field"
          >Email</label
        >
        <AppInput
          v-model="dataField.email"
          class="form-settings__input form-settings__input--email"
          :data-item="dataInput.email"
        />
        <label class="form-settings__label visually-hidden" for="password-field"
          >Password</label
        >
        <AppInput
          v-model="dataField.password"
          class="form-settings__input form-settings__input--password"
          :data-item="dataInput.password"
        />
      </fieldset>
    </template>

    <template #box-btn>
      <AppButton
        class="form-settings__btn form-settings__btn--update"
        :data-item="dataBtn.update"
        >Update</AppButton
      >
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
      dataForm: {
        method: "POST",
        action: "",
      },

      dataInput: {
        avatar: {
          name: "avatar",
          type: "url",
          placeholder: "Avatar",
          id: "avatar-field",
          maxlength: 500,
          required: false,
        },

        username: {
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
          required: true,
        },
      },

      dataBtn: {
        update: { type: "submit" },
      },

      dataField: {
        id: null,
        firstname: "",
        lastname: "",
        avatar: "",
        username: "",
        email: "",
        password: "",
      },
    }
  },

  computed: {
    ...mapGetters({
      currentUser: getterTypesAuth.currentUser,
    }),
  },

  mounted() {
    this.dataField = { ...this.currentUser }
  },

  methods: {
    async updateSettings() {
      await this.$store.dispatch(actionTypesAuth.updateUser, this.dataField)
      console.log(this.dataField)
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

.form-settings__btn {
  &--update {
    margin-left: auto;
  }
}
</style>
