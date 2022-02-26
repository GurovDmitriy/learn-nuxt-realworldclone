export const mutationTypes = {
  setFeedCountStart: "[feedCount] setFeedCountStart",
  setFeedCountSuccess: "[feedCount] setFeedCountSuccess",
  setFeedCountFailure: "[feedCount] setFeedCountFailure",
}

export const actionTypes = {
  fetchFeedCount: "[feedCount] fetchFeedCount",
}

export const state = () => ({
  feedCount: {},
  isLoading: false,
  errors: null,
})

const mutations = {
  [mutationTypes.setFeedCountStart](state) {
    state.isLoading = true
  },

  [mutationTypes.setFeedCountSuccess](state, payload) {
    state.feedCount = payload
    state.isLoading = false
  },

  [mutationTypes.setFeedCountFailure](state, payload) {
    state.errors = payload
    state.isLoading = false
  },
}

const actions = {
  async [actionTypes.fetchFeedCount]({ commit }) {
    commit(mutationTypes.setFeedCountStart)

    try {
      const data = await this.$api.feed.getFeedCount()

      commit(mutationTypes.setFeedCountSuccess, data)
      return data
    } catch (err) {
      commit(mutationTypes.setFeedCountFailure, err)
      throw new Error(err)
    }
  },
}

export default {
  namespaced: false,
  mutations,
  actions,
}
