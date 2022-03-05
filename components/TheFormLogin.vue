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
          ></label>
          <AppInput
            :key="field.name + field.className"
            :class="field.className"
            :data-item="field"
          />
        </template>
      </div>
    </fieldset>
    <button type="submit">login</button>
  </form>
</template>

<script>
import FormSignMixin from "~/mixins/formSignMixin"

export default {
  mixins: [FormSignMixin],
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
  padding: 0;

  border: none;
}

.form-login__legend {
  margin: 0;
  padding: 0;
}
</style>
