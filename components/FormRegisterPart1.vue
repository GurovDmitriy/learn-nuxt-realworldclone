<template>
  <fieldset class="form-register-part-1__fieldset">
    <legend class="form-register-part-1__legend visually-hidden">
      User Personal Data
    </legend>
    <div class="form-register-part-1">
      <template v-for="field in dataFormRegisterValid.dataUserPersonal">
        <label
          :key="field.labelFor"
          :for="field.labelFor"
          class="visually-hidden"
        ></label>
        <AppInput :key="field.id" :class="field.className" :data-item="field" />
      </template>
    </div>
  </fieldset>
</template>

<script>
import FormRegisterPartMixin from "~/mixins/formRegisterPartMixin"

export default {
  mixins: [FormRegisterPartMixin],
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
