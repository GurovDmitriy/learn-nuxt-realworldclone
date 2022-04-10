import { setItemCO, removeItemCO } from "~/helpers/persistanceCookie"
import { setItemLS } from "~/helpers/persistanceStorage"

export const getterTypes = {
  getCurrentUser: "[auth] getCurrentUser",
  getIsLoggedIn: "[auth] getIsLoggedIn",
  getIsAnonymous: "[auth] getIsAnonymous",
  getIsAdmin: "[auth] getIsAdmin",
}

export const mutationTypes = {
  setCurrentUserStart: "[auth] setCurrentUserStart",
  setCurrentUserSuccess: "[auth] setCurrentUserSuccess",
  setCurrentUserFailure: "[auth] setCurrentUserFailure",

  logoutStart: "[auth] logoutStart",
  logoutSuccess: "[auth] logoutSuccess",
  logoutFailure: "[auth] logoutFailure",
}

export const actionTypes = {
  fetchCurrentUser: "[auth] fetchCurrentUser",
  updateCurrentUser: "[auth] updateCurrentUser",
  register: "[auth] register",
  login: "[auth] login",
  logout: "[auth] logout",
}

export const state = () => ({
  currentUser: {},
  isLoggedIn: null,
  isSubmitting: false,
  isLoading: false,
  errors: null,
})

const getters = {
  [getterTypes.getCurrentUser]: (state) => {
    return state.currentUser || null
  },

  [getterTypes.getIsLoggedIn]: (state) => {
    return Boolean(state.isLoggedIn)
  },

  [getterTypes.getIsAnonymous]: (state) => {
    return state.isLoggedIn === false
  },

  [getterTypes.getIsAdmin]: (state) => {
    if (state.currentUser) return state.currentUser.role === "admin"
    return null
  },
}

const mutations = {
  [mutationTypes.setCurrentUserStart](state) {
    state.isSubmitting = true
    state.isLoading = true
    state.errors = null
    state.currentUser = null
  },

  [mutationTypes.setCurrentUserSuccess](state, payload) {
    state.currentUser = payload
    state.isLoggedIn = true
    state.isSubmitting = false
    state.isLoading = false
  },

  [mutationTypes.setCurrentUserFailure](state, payload) {
    state.errors = payload
    state.isLoggedIn = false
    state.isSubmitting = false
    state.isLoading = false
  },

  [mutationTypes.logoutStart](state) {
    state.isSubmitting = true
    state.isLoading = true
    state.errors = null
  },

  [mutationTypes.logoutSuccess](state) {
    state.currentUser = {}
    state.isLoggedIn = false
  },

  [mutationTypes.logoutFailure](state, payload) {
    state.errors = payload
    state.isLoggedIn = false
    state.isSubmitting = false
    state.isLoading = false
  },
}

const actions = {
  async [actionTypes.register]({ commit }, payload) {
    commit(mutationTypes.setCurrentUserStart)

    try {
      const res = await this.$api.auth.register(payload)
      const accessToken = res.accessToken
      const userId = res.user.id
      const data = res.user

      setItemCO(this.$cookies, "accessToken", accessToken)
      setItemCO(this.$cookies, "userId", userId)
      setItemLS("credential", { accessToken, userId })

      commit(mutationTypes.setCurrentUserSuccess, data)
      return data
    } catch (err) {
      commit(mutationTypes.setCurrentUserFailure, err)
      throw new Error(err)
    }
  },

  async [actionTypes.login]({ commit }, payload) {
    commit(mutationTypes.setCurrentUserStart)

    try {
      const res = await this.$api.auth.login(payload)
      const accessToken = res.accessToken
      const userId = res.user.id
      const data = res.user

      setItemCO(this.$cookies, "accessToken", accessToken)
      setItemCO(this.$cookies, "userId", userId)
      setItemLS("credential", { accessToken, userId })

      commit(mutationTypes.setCurrentUserSuccess, data)
      return data
    } catch (err) {
      commit(mutationTypes.setCurrentUserFailure, err)
      // throw new Error(err)
    }
  },

  async [actionTypes.fetchCurrentUser]({ commit }, payload) {
    commit(mutationTypes.setCurrentUserStart)

    try {
      const data = await this.$api.auth.getUser(payload)

      commit(mutationTypes.setCurrentUserSuccess, data)
      return data
    } catch (err) {
      commit(mutationTypes.setCurrentUserFailure, err)
      // throw new Error(err)
    }
  },

  async [actionTypes.updateCurrentUser]({ commit }, payload) {
    commit(mutationTypes.setCurrentUserStart)

    try {
      const data = await this.$api.auth.updateUser(payload)

      commit(mutationTypes.setCurrentUserSuccess, data)
      return data
    } catch (err) {
      commit(mutationTypes.setCurrentUserFailure, err)
      // throw new Error(err)
    }
  },

  async [actionTypes.logout]({ commit }) {
    await commit(mutationTypes.logoutStart)

    try {
      removeItemCO(this.$cookies, "accessToken")
      removeItemCO(this.$cookies, "userId")
      setItemLS("credential", "")

      await commit(mutationTypes.logoutSuccess)
    } catch (err) {
      await commit(mutationTypes.logoutFailure, err)
      throw new Error(err)
    }
  },

  async nuxtServerInit({ dispatch }) {
    const userId = this.$cookies.get("userId")
    if (!userId) return

    await dispatch(actionTypes.fetchCurrentUser, userId)
  },
}

export default {
  namespaced: false,
  mutations,
  actions,
  getters,
}
