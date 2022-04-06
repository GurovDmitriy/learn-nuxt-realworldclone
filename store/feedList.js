export const mutationTypes = {
  setFeedListStart: "[feedList] setFeedListStart",
  setFeedListSuccess: "[feedList] setFeedListSuccess",
  setFeedListFailure: "[feedList] setFeedListFailure",
}

export const actionTypes = {
  fetchFeedList: "[feedList] fetchFeedList",
}

export const state = () => ({
  feedList: [],
  isLoading: false,
  errors: null,
})

const mutations = {
  [mutationTypes.setFeedListStart](state) {
    state.isLoading = true
    state.feedList = null
    state.errors = null
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
      const data = await this.$api.feedList.getFeedList(payload)
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
