export const mutationTypes = {
  setFeedListStart: "[feed] setFeedListStart",
  setFeedListSuccess: "[feed] setFeedListSuccess",
  setFeedListFailure: "[feed] setFeedListFailure",
}

export const actionTypes = {
  fetchFeedList: "[feed] fetchFeedList",
  fetchFeedListByTag: "[feed] fetchFeedListByTag",
}

export const state = () => ({
  feedList: [],
  isLoading: false,
  errors: null,
})

const mutations = {
  [mutationTypes.setFeedListStart](state) {
    state.isLoading = true
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
  async [actionTypes.fetchFeedList]({ commit }) {
    commit(mutationTypes.setFeedListStart)

    try {
      const data = await this.$api.feed.getFeedList()

      commit(mutationTypes.setFeedListSuccess, data)
    } catch (err) {
      commit(mutationTypes.setFeedListFailure, err)
    }
  },

  async [actionTypes.fetchFeedListByTag]({ commit }, tag) {
    commit(mutationTypes.setFeedListStart)

    try {
      const data = await this.$api.feed.getFeedListByTags(tag)

      commit(mutationTypes.setFeedListSuccess, data)
    } catch (err) {
      commit(mutationTypes.setFeedListFailure, err)
    }
  },
}

export default {
  namespaced: false,
  mutations,
  actions,
}
