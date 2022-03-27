<template>
  <AppForm class="form-editor" :data-item="configForm" @submitForm="createFeed">
    <template #default>
      <fieldset class="form-editor__fieldset">
        <legend class="form-editor__legend visually-hidden">Create Feed</legend>
        <label class="form-editor__label visually-hidden" for="title-field"
          >Title</label
        >
        <AppInput
          v-model="dataField.title"
          class="form-editor__input form-editor__input--title"
          :data-item="configInput.title"
        />
        <label class="form-editor__label visually-hidden" for="about-field"
          >About</label
        >
        <AppInput
          v-model="dataField.about"
          class="form-editor__input form-editor__input--about"
          :data-item="configInput.about"
        />
        <label class="form-editor__label visually-hidden" for="tags-field"
          >Tags</label
        >
        <AppInput
          v-model="dataField.tags"
          class="form-editor__input form-editor__input--tags"
          :data-item="configInput.tags"
        />
        <AppInputTextarea
          v-model="dataField.content"
          class="form-editor__input form-editor__input--content"
          :data-item="configInput.content"
        />
      </fieldset>
    </template>

    <template #box-btn>
      <AppButton
        class="form-editor__btn form-editor__btn--create"
        :data-item="configBtn.create"
        >Create</AppButton
      >
    </template>
  </AppForm>
</template>

<script>
import { mapGetters } from "vuex"
import FormMixin from "~/mixins/formMixin"
import { getterTypes as getterTypesAuth } from "~/store/auth"

export default {
  mixins: [FormMixin],

  data() {
    return {
      configForm: {
        method: "POST",
        action: "",
      },

      configInput: {
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

        content: {
          name: "content",
          placeholder: "Content",
          id: "content-field",
          required: true,
        },

        tags: {
          name: "tags",
          type: "text",
          placeholder: "Tags",
          id: "tags-field",
          maxlength: 100,
          required: false,
        },
      },

      configBtn: {
        create: { type: "submit" },
      },

      dataField: {
        title: "",
        about: "",
        content: "",
        tags: "",
      },
    }
  },

  computed: {
    ...mapGetters({
      getCurrentUser: getterTypesAuth.currentUser,
    }),
  },

  methods: {
    createFeed() {
      const newFeed = Object.assign(
        {},
        this.createDataFeedDefault(),
        this.createTags()
      )

      // check repeat tag in state
      // dispatch create tags
      // dispatch fetch tags

      // eslint-disable-next-line no-console
      console.log("create feed", newFeed)
      this.resetForm()
    },

    createDataFeedDefault() {
      const userId = this.getCurrentUser.id
      const time = Date.now()
      const like = []

      return {
        userId,
        time,
        like,
      }
    },

    createTags() {
      const tagsArr = this.dataField.tags.split(",")
      return tagsArr.map((item) => item.trim())
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
  &--create {
    margin-left: auto;
  }
}
</style>
