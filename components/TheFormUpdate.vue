<template>
  <AppForm class="form-update" :data-item="configForm" @submitForm="updateFeed">
    <template #default>
      <fieldset class="form-update__fieldset">
        <legend class="form-update__legend visually-hidden">Update Feed</legend>
        <label class="form-update__label visually-hidden" for="title-field"
          >Title</label
        >
        <AppInput
          v-model="dataField.title"
          class="form-update__input form-update__input--title"
          :data-item="configInput.title"
        />
        <label class="form-update__label visually-hidden" for="about-field"
          >About</label
        >
        <AppInput
          v-model="dataField.preview"
          class="form-update__input form-update__input--about"
          :data-item="configInput.about"
        />
        <label class="form-update__label visually-hidden" for="tags-field"
          >Tags</label
        >
        <AppInput
          v-model="dataField.tags"
          class="form-update__input form-update__input--tags"
          :data-item="configInput.tags"
        />
        <AppInputTextarea
          v-model="dataField.content"
          class="form-update__input form-update__input--content"
          :data-item="configInput.content"
        />
      </fieldset>
    </template>

    <template #box-btn>
      <div class="form-update__box-btn">
        <AppButton
          class="form-update__btn form-update__btn--reset"
          :data-item="configBtn.reset"
          @clickBtn="resetField"
          >Reset</AppButton
        >
        <AppButton
          class="form-update__btn form-update__btn--create"
          :data-item="configBtn.update"
          >Update</AppButton
        >
      </div>
    </template>
  </AppForm>
</template>

<script>
import { mapGetters, mapState } from "vuex"
import { getStrCamelCase, getStrKebabCase } from "~/helpers/utils"
import FormMixin from "~/mixins/formMixin"
import { getterTypes as getterTypesAuth } from "~/store/auth"
import { actionTypes as actionTypesFeed } from "~/store/feed"

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
        reset: { type: "button" },
        update: { type: "submit" },
      },

      dataField: {
        title: "",
        preview: "",
        content: "",
        tags: "",
      },
    }
  },

  computed: {
    ...mapGetters({
      getCurrentUser: getterTypesAuth.currentUser,
    }),

    ...mapState({
      getFeed: ({ feed }) => feed.feed,
    }),
  },

  mounted() {
    this.setDataField()
  },

  methods: {
    async updateFeed() {
      const newFeed = Object.assign(
        {},
        this.dataField,
        this.createDataFeedDefault(),
        { tags: this.createTags() }
      )

      const slugFeed = getStrKebabCase(newFeed.title)
      await this.$store.dispatch(actionTypesFeed.updateFeed, newFeed)

      this.$router.push({ path: `/feed/${slugFeed}` })
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
      const tags = this.dataField.tags.split(",")
      return tags.map((item) => getStrCamelCase(item))
    },

    setDataField() {
      const feed = { ...this.getFeed }
      const tags = feed.tags.join(", ")

      this.dataField = Object.assign({}, this.dataField, feed, { tags })
    },

    resetField() {
      this.resetForm()
    },
  },
}
</script>

<style lang="scss">
.form-update {
  margin-bottom: $space-xxl;
}

.form-update__input {
  margin-bottom: $space-l;

  &:last-child {
    margin-bottom: 0;
  }
}

.form-update__box-btn {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
}
</style>
