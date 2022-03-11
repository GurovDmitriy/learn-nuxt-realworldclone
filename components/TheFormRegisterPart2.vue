<template>
  <fieldset class="form-register-part-2__fieldset">
    <legend class="form-register-part-2__legend visually-hidden">
      User Avatar Data
    </legend>
    <label
      class="form-register-part-2__label visually-hidden"
      for="first-name-field"
      >First name</label
    >
    <AppInput
      class="form-register-part-2__input form-register-part-2__input--first-name"
      :data-item="dataInput.firstname"
      @input="emitInputUser"
    />
    <label
      class="form-register-part-2__label visually-hidden"
      for="last-name-field"
      >Last name</label
    >
    <AppInput
      class="form-register-part-2__input form-register-part-2__input--last-name"
      :data-item="dataInput.lastname"
      @input="emitInputUser"
    />
    <label
      class="form-register-part-2__label visually-hidden"
      for="avatar-field"
      >Avatar</label
    >
    <AppInput
      class="form-register-part-2__input form-register-part-2__input--avatar"
      :data-item="dataInput.avatar"
      @input="emitInputUser"
    />
  </fieldset>
</template>

<script>
export default {
  data() {
    return {
      dataInput: {
        firstname: {
          name: "firstname",
          type: "text",
          placeholder: "First name",
          id: "firstname-field",
          required: true,
        },

        lastname: {
          name: "lastname",
          type: "text",
          placeholder: "Last name",
          id: "lastname-field",
          required: true,
        },

        avatar: {
          name: "avatar",
          type: "url",
          placeholder: "Avatar",
          id: "avatar-field",
          required: true,
        },
      },
    }
  },

  methods: {
    emitInputUser() {
      this.$emit("inputUser")
    },
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
  margin-bottom: $space-l;
  padding: 0;

  border: none;
}

.form-register-part-2__legend {
  margin: 0;
  padding: 0;
}
</style>
