<template>
  <AppForm
    class="form-editor"
    :data-item="config.form"
    @submitForm="createFeed"
  >
    <template #default>
      <fieldset class="form-editor__fieldset">
        <legend class="form-editor__legend visually-hidden">Create Feed</legend>
        <label class="form-editor__label visually-hidden" for="title-field"
          >Title</label
        >
        <AppInput
          v-model="field.title"
          class="form-editor__input form-editor__input--title"
          :data-item="config.input.title"
        />
        <label class="form-editor__label visually-hidden" for="about-field"
          >About</label
        >
        <AppInput
          v-model="field.preview"
          class="form-editor__input form-editor__input--about"
          :data-item="config.input.about"
        />
        <label class="form-editor__label visually-hidden" for="tags-field"
          >Tags</label
        >
        <AppInput
          v-model="field.tags"
          class="form-editor__input form-editor__input--tags"
          :data-item="config.input.tags"
        />
        <AppInputTextarea
          v-model="field.content"
          class="form-editor__input form-editor__input--content"
          :data-item="config.input.content"
        />
      </fieldset>
    </template>

    <template #box-btn>
      <div class="form-editor__box-btn">
        <AppButton
          class="form-editor__btn form-editor__btn--reset"
          :data-item="config.btn.reset"
          @clickBtn="resetField"
          >Reset</AppButton
        >
        <AppButton
          class="form-editor__btn form-editor__btn--create"
          :data-item="config.btn.create"
          >Create</AppButton
        >
      </div>
    </template>
  </AppForm>
</template>

<script>
import { mapGetters } from "vuex"
import { getStrKebabCase } from "~/helpers/utils"
import FormCreateFeed from "~/mixins/formCreateFeed"
import FormReset from "~/mixins/formReset"
import { getterTypes as getterTypesAuth } from "~/store/auth"
import { actionTypes as actionTypesFeed } from "~/store/feed"

export default {
  mixins: [FormCreateFeed, FormReset],

  data() {
    return {
      config: {
        form: {
          method: "POST",
          action: "",
        },

        input: {
          title: {
            name: "title",
            type: "text",
            placeholder: "Title",
            id: "title-field",
            maxlength: 100,
            required: true,
          },

          about: {
            name: "about",
            type: "text",
            placeholder: "About",
            id: "about-field",
            maxlength: 100,
            required: true,
          },

          content: {
            name: "content",
            placeholder: "Content",
            id: "content-field",
            required: true,
            maxlength: 500,
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

        btn: {
          reset: { type: "button" },
          create: { type: "submit" },
        },
      },

      field: {
        title: "",
        preview: "",
        content: "",
        tags: "",
      },
    }
  },

  computed: {
    ...mapGetters({
      getCurrentUser: getterTypesAuth.getCurrentUser,
    }),
  },

  methods: {
    async createFeed() {
      const field = this.field
      const fieldDefault = this.createFieldDefault()
      const tags = { tags: this.createTags() }

      const feedNew = Object.assign({}, field, fieldDefault, tags)

      const slugFeed = getStrKebabCase(feedNew.title)
      await this.$store.dispatch(actionTypesFeed.createFeed, feedNew)

      return this.$router.push({ path: `/feed/${slugFeed}` })
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

.form-editor__box-btn {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
}
</style>
