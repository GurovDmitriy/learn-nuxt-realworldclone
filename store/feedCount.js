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
    state.feedCount = null
    state.errors = null
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
  async [actionTypes.fetchFeedCount]({ commit }, payload) {
    commit(mutationTypes.setFeedCountStart)

    try {
      let data = null

      switch (payload) {
        case "tag":
          data = await this.$api.feedCount.getFeedCountByTag()
          break
        case "user":
          data = await this.$api.feedCount.getFeedCountByUser()
          break
        case "like":
          data = await this.$api.feedCount.getFeedCountByLike()
          break
        default:
          data = await this.$api.feedCount.getFeedCountTotal()
      }

      commit(mutationTypes.setFeedCountSuccess, data)
      return data
    } catch (err) {
      commit(mutationTypes.setFeedCountFailure, err)
      throw err
    }
  },
}

export default {
  namespaced: false,
  mutations,
  actions,
}
