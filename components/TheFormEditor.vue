<template>
  <AppForm class="form-editor" :data-item="dataForm" @submitForm="createFeed">
    <template #default>
      <fieldset class="form-editor__fieldset">
        <legend class="form-editor__legend visually-hidden">Create Feed</legend>
        <label class="form-editor__label visually-hidden" for="title-field"
          >Title</label
        >
        <AppInput
          class="form-editor__input form-editor__input--title"
          :data-item="dataInput.title"
        />
        <label class="form-editor__label visually-hidden" for="about-field"
          >About</label
        >
        <AppInput
          class="form-editor__input form-editor__input--about"
          :data-item="dataInput.about"
        />
        <label class="form-editor__label visually-hidden" for="tags-field"
          >Tags</label
        >
        <AppInput
          class="form-editor__input form-editor__input--tags"
          :data-item="dataInput.tags"
        />
      </fieldset>
    </template>

    <template #box-btn>
      <AppButton
        class="form-editor__btn form-editor__btn--update"
        :data-item="dataBtn.update"
        >Update</AppButton
      >
    </template>
  </AppForm>
</template>

<script>
export default {
  data() {
    return {
      dataForm: {
        method: "POST",
        action: "",
      },

      dataInput: {
        title: {
          name: "title",
          type: "text",
          placeholder: "Title",
          id: "title-field",
          maxlength: 10,
          required: true,
        },

        about: {
          name: "about",
          type: "text",
          placeholder: "About",
          id: "about-field",
          maxlength: 20,
          required: true,
        },

        tags: {
          name: "tags",
          type: "tags",
          placeholder: "Tags",
          id: "tags-field",
          maxlength: 20,
          required: true,
        },
      },

      dataBtn: {
        update: { type: "submit" },
      },

      dataField: {
        title: "",
        about: "",
        tags: "",
      },
    }
  },

  methods: {
    createFeed() {
      // eslint-disable-next-line no-console
      console.log("create feed", this.dataField)
    },
  },
}
</script>

<style lang="scss">
.form-editor {
  margin-bottom: $space-xxl;
}

.form-editor__input {
  margin-bottom: $space-l;

  &:last-child {
    margin-bottom: 0;
  }
}

.form-editor__btn {
  &--update {
    margin-left: auto;
  }
}
</style>
