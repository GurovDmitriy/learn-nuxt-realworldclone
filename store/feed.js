export const mutationTypes = {
  setFeedListStart: "[feed] setFeedListStart",
  setFeedListSuccess: "[feed] setFeedListSuccess",
  setFeedListFailure: "[feed] setFeedListFailure",
}

export const actionTypes = {
  fetchFeedList: "[feed] fetchFeedList",
}

export const state = () => ({
  feedList: [],
  isLoading: false,
  errors: null,
})

const mutations = {
  [mutationTypes.setFeedListStart](state) {
    state.isLoading = true
  },

  [mutationTypes.setFeedListSuccess](state, payload) {
    state.feedList = payload
    state.isLoading = false
  },

  [mutationTypes.setFeedListFailure](state, payload) {
    state.errors = payload
    state.isLoading = false
  },
}

const actions = {
  async [actionTypes.fetchFeedList]({ commit }, payload) {
    commit(mutationTypes.setFeedListStart)

    try {
      const data = await this.$api.feed.getFeedList(payload)

      commit(mutationTypes.setFeedListSuccess, data)
      return data
    } catch (err) {
      commit(mutationTypes.setFeedListFailure, err)
      throw new Error(err)
    }
  },
}

export default {
  namespaced: false,
  mutations,
  actions,
}
