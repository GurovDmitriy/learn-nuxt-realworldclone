export const mutationTypes = {
  setFeedListStart: "[feed] setFeedListStart",
  setFeedListSuccess: "[feed] setFeedListSuccess",
  setFeedListFailure: "[feed] setFeedListFailure",

  setFeedStart: "[feed] setFeedStart",
  setFeedSuccess: "[feed] setFeedSuccess",
  setFeedFailure: "[feed] setFeedFailure",
}

export const actionTypes = {
  fetchFeedList: "[feed] fetchFeedList",
  fetchFeed: "[feed] fetchFeed",
}

export const state = () => ({
  feedList: [],
  feed: {},
  isLoading: false,
  errors: null,
})

const mutations = {
  [mutationTypes.setFeedListStart](state) {
    state.isLoading = true
    state.feedList = null
  },

  [mutationTypes.setFeedListSuccess](state, payload) {
    state.feedList = payload
    state.isLoading = false
  },

  [mutationTypes.setFeedListFailure](state, payload) {
    state.errors = payload
    state.isLoading = false
  },

  [mutationTypes.setFeedStart](state) {
    state.isLoading = true
    state.feed = null
  },

  [mutationTypes.setFeedSuccess](state, payload) {
    state.feed = payload
    state.isLoading = false
  },

  [mutationTypes.setFeedFailure](state, payload) {
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

  async [actionTypes.fetchFeed]({ commit }, payload) {
    commit(mutationTypes.setFeedStart)

    try {
      const data = await this.$api.feed.getFeed(payload)

      commit(mutationTypes.setFeedSuccess, data[0])
      return data
    } catch (err) {
      commit(mutationTypes.setFeedFailure, err)
      throw new Error(err)
    }
  },
}

export default {
  namespaced: false,
  mutations,
  actions,
}
