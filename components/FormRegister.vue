<template>
  <form class="form-register" action="" method="POST">
    <fieldset class="form-register__fieldset">
      <legend class="form-register__legend visually-hidden">User Data</legend>
      <div class="form-register__box">
        <label class="form-register__label visually-hidden" for="username-field"
          >Username</label
        >
        <AppInput
          class="form-register__input form-register__input--username"
          :data-item="dataInput.username"
        />
        <label class="form-register__label visually-hidden" for="email-field"
          >Email</label
        >
        <AppInput
          class="form-register__input form-register__input--email"
          :data-item="dataInput.email"
        />
        <label class="form-register__label visually-hidden" for="password-field"
          >Password</label
        >
        <AppInput
          class="form-register__input form-register__input--password"
          :data-item="dataInput.password"
        />
      </div>
    </fieldset>
  </form>
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
.form-register {
  display: block;
  max-width: 600px;
  margin: 0 auto;
}

.form-register__fieldset {
  margin: 0;
  padding: 0;

  border: none;
}

.form-register__legend {
  margin: 0;
  padding: 0;
}

.form-register__input {
  margin-bottom: $space-l;

  &:last-child {
    margin-bottom: 0;
  }
}
</style>
