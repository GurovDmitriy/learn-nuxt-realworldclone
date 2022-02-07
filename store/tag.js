export const mutationTypes = {
  setTagsStart: "[tag] setTagsStart",
  setTagsSuccess: "[tag] setTagsSuccess",
  setTagsFailure: "[tag] setTagsFailure",
}

export const actionTypes = {
  fetchTags: "[tag] fetchTags",
}

export const state = () => ({
  tagsList: [],
  isLoading: false,
  errors: null,
})

const mutations = {
  [mutationTypes.setTagsStart](state) {
    state.isLoading = true
    state.errors = null
  },

  [mutationTypes.setTagsSuccess](state, payload) {
    state.tagsList = payload
    state.isLoading = false
  },

  [mutationTypes.setTagsFailure](state, payload) {
    state.errors = payload
    state.isLoading = false
  },
}

const actions = {
  async [actionTypes.fetchTags]({ commit }) {
    commit(mutationTypes.setTagsStart)

    try {
      const data = await this.$api.tag.getTags()

      commit(mutationTypes.setTagsSuccess, data)
      return true
    } catch (err) {
      commit(mutationTypes.setTagsFailure, err)
      return false
    }
  },
}

export default {
  namespaced: false,
  mutations,
  actions,
}
