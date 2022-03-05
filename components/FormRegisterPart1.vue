<template>
  <fieldset class="form-register-part-1__fieldset">
    <legend class="form-register-part-1__legend visually-hidden">
      User Personal Data
    </legend>
    <div class="form-register-part-1">
      <label
        class="form-register-part-1__label visually-hidden"
        for="username-field"
        >Username</label
      >
      <AppInput
        class="form-register-part-1__input form-register-part-1__input--username"
        :data-item="dataInput.username"
      />
      <label
        class="form-register-part-1__label visually-hidden"
        for="email-field"
        >Email</label
      >
      <AppInput
        class="form-register-part-1__input form-register-part-1__input--email"
        :data-item="dataInput.email"
      />
      <label
        class="form-register-part-1__label visually-hidden"
        for="password-field"
        >Password</label
      >
      <AppInput
        class="form-register-part-1__input form-register-part-1__input--password"
        :data-item="dataInput.password"
      />
    </div>
  </fieldset>
</template>

<script>
export default {
  data() {
    return {
      dataInput: {
        username: {
          type: "text",
          placeholder: "Username",
          id: "username",
          required: true,
          iconName: "person-workspace",
        },

        email: {
          type: "email",
          placeholder: "Email",
          id: "email",
          required: true,
          iconName: "envelope-fill",
        },

        password: {
          type: "password",
          placeholder: "Password",
          id: "password",
          required: true,
          iconName: "file-lock2",
        },
      },
    }
  },
}
</script>

<style lang="scss">
.form-register-part-1__input {
  margin-bottom: $space-l;

  &:last-child {
    margin-bottom: 0;
  }
}

.form-register-part-1__fieldset {
  margin: 0;
  padding: 0;

  border: none;
}

.form-register-part-1__legend {
  margin: 0;
  padding: 0;
}
</style>
