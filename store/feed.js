export const mutationTypes = {
  setFeedStart: "[feed] setFeedStart",
  setFeedSuccess: "[feed] setFeedSuccess",
  setFeedFailure: "[feed] setFeedFailure",

  deleteFeedStart: "[feed] deleteFeedStart",
  deleteFeedSuccess: "[feed] deleteFeedSuccess",
  deleteFeedFailure: "[feed] deleteFeedFailure",
}

export const actionTypes = {
  fetchFeed: "[feed] fetchFeed",
  createFeed: "[feed] createFeed",
  updateFeed: "[feed] updateFeed",
  deleteFeed: "[feed] deleteFeed",
}

export const state = () => ({
  feed: {},
  isLoading: false,
  errors: null,
})

const mutations = {
  [mutationTypes.setFeedStart](state) {
    state.isLoading = true
    state.feed = null
    state.errors = null
  },

  [mutationTypes.setFeedSuccess](state, payload) {
    state.feed = payload
    state.isLoading = false
  },

  [mutationTypes.setFeedFailure](state, payload) {
    state.errors = payload
    state.isLoading = false
  },

  [mutationTypes.deleteFeedStart](state) {
    state.isLoading = true
    state.errors = null
  },

  [mutationTypes.deleteFeedSuccess](state) {
    state.feed = null
    state.isLoading = false
  },

  [mutationTypes.deleteFeedFailure](state, payload) {
    state.errors = payload
    state.isLoading = false
  },
}

const actions = {
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

  async [actionTypes.createFeed]({ commit }, payload) {
    commit(mutationTypes.setFeedStart)

    try {
      const data = await this.$api.feed.createFeed(payload)

      commit(mutationTypes.setFeedSuccess, data)
      return data
    } catch (err) {
      commit(mutationTypes.setFeedFailure, err)
      throw new Error(err)
    }
  },

  async [actionTypes.updateFeed]({ commit }, payload) {
    commit(mutationTypes.setFeedStart)

    try {
      const data = await this.$api.feed.updateFeed(payload)

      commit(mutationTypes.setFeedSuccess, data)
      return data
    } catch (err) {
      commit(mutationTypes.setFeedFailure, err)
      throw new Error(err)
    }
  },

  async [actionTypes.deleteFeed]({ commit }, payload) {
    commit(mutationTypes.deleteFeedStart)

    try {
      const data = await this.$api.feed.deleteFeed(payload)

      commit(mutationTypes.deleteFeedSuccess, data)
    } catch (err) {
      commit(mutationTypes.deleteFeedFailure, err)
      throw new Error(err)
    }
  },
}

export default {
  namespaced: false,
  mutations,
  actions,
}
