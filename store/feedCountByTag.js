export const mutationTypes = {
  setFeedCountByTagStart: "[feedCountByTag] setFeedCountByTagStart",
  setFeedCountByTagSuccess: "[feedCountByTag] setFeedCountByTagSuccess",
  setFeedCountByTagFailure: "[feedCountByTag] setFeedCountByTagFailure",
}

export const actionTypes = {
  fetchFeedCountByTag: "[feedCountByTag] fetchFeedCountByTag",
}

export const state = () => ({
  feedCountByTag: {},
  isLoading: false,
  errors: null,
})

const mutations = {
  [mutationTypes.setFeedCountByTagStart](state) {
    state.isLoading = true
  },

  [mutationTypes.setFeedCountByTagSuccess](state, payload) {
    state.feedCountByTag = payload
    state.isLoading = false
  },

  [mutationTypes.setFeedCountByTagFailure](state, payload) {
    state.errors = payload
    state.isLoading = false
  },
}

const actions = {
  async [actionTypes.fetchFeedCountByTag]({ commit }) {
    commit(mutationTypes.setFeedCountByTagStart)

    try {
      const data = await this.$api.feed.getFeedCountByTag()

      commit(mutationTypes.setFeedCountByTagSuccess, data)
      return data
    } catch (err) {
      commit(mutationTypes.setFeedCountByTagFailure, err)
      throw new Error(err)
    }
  },
}

export default {
  namespaced: false,
  mutations,
  actions,
}
