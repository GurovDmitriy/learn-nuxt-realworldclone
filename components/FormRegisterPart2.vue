<template>
  <fieldset class="form-register-part-2__fieldset">
    <legend class="form-register-part-2__legend visually-hidden">
      User Avatar Data
    </legend>
    <div class="form-register-part-2">
      <label
        class="form-register-part-2__label visually-hidden"
        for="firstname-field"
        >First Name</label
      >
      <AppInput
        class="form-register-part-2__input form-register-part-2__input--firstname"
        :data-item="dataInput.firstName"
      />
      <label
        class="form-register-part-2__label visually-hidden"
        for="lastname-field"
        >Last Name</label
      >
      <AppInput
        class="form-register-part-2__input form-register-part-2__input--lastname"
        :data-item="dataInput.lastName"
      />
      <label
        class="form-register-part-2__label visually-hidden"
        for="avatar-field"
        >Avatar</label
      >
      <AppInput
        class="form-register-part-2__input form-register-part-2__input--avatar"
        :data-item="dataInput.avatar"
      />
    </div>
  </fieldset>
</template>

<script>
export default {
  data() {
    return {
      dataInput: {
        firstName: {
          type: "text",
          placeholder: "First Name",
          id: "firstname",
          required: true,
          iconName: "",
        },

        lastName: {
          type: "text",
          placeholder: "Last Name",
          id: "lastname",
          required: true,
          iconName: "",
        },

        avatar: {
          type: "url",
          placeholder: "Avatar",
          id: "avatar",
          required: false,
          iconName: "",
        },
      },
    }
  },
}
</script>

<style lang="scss">
.form-register-part-2__input {
  margin-bottom: $space-l;

  &:last-child {
    margin-bottom: 0;
  }
}

.form-register-part-2__fieldset {
  margin: 0;
  padding: 0;

  border: none;
}

.form-register-part-2__legend {
  margin: 0;
  padding: 0;
}
</style>
