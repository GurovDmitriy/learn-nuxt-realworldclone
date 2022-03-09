import { setItemCO, removeItemCO } from "~/helpers/persistanceCookie"
import { setItemLC } from "~/helpers/persistanceStorage"

export const getterTypes = {
  getUser: "[auth] getUser",
  isLoggedIn: "[auth] isLoggedIn",
  isAnonymous: "[auth] isAnonymous",
  isAdmin: "[auth] isAdmin",
}

export const mutationTypes = {
  setUserStart: "[auth] setUserStart",
  setUserSuccess: "[auth] setUserSuccess",
  setUserFailure: "[auth] setUserFailure",

  logoutUser: "[auth] logoutUser",
}

export const actionTypes = {
  register: "[auth] register",
  login: "[auth] login",
  logout: "[auth] logout",
  fetchUser: "[auth] fetchUser",
}

export const state = () => ({
  user: null,
  isLoggedIn: null,
  isSubmitting: false,
  isLoading: false,
  errors: null,
})

const getters = {
  [getterTypes.getUser]: (state) => {
    return state.user
  },

  [getterTypes.isLoggedIn]: (state) => {
    return Boolean(state.isLoggedIn)
  },

  [getterTypes.isAnonymous]: (state) => {
    return state.isLoggedIn === false
  },

  [getterTypes.isAdmin]: (state) => {
    return state?.user?.role === "admin"
  },
}

const mutations = {
  [mutationTypes.setUserStart](state) {
    state.isLoading = true
    state.isSubmitting = true
    state.user = null
    state.errors = null
  },

  [mutationTypes.setUserSuccess](state, payload) {
    state.user = payload
    state.isLoggedIn = true
    state.isSubmitting = false
    state.isLoading = false
  },

  [mutationTypes.setUserFailure](state, payload) {
    state.errors = payload
    state.isSubmitting = false
    state.isLoading = false
  },

  [mutationTypes.logoutUser](state) {
    state.user = null
    state.isLoggedIn = false
  },
}

const actions = {
  async [actionTypes.register]({ commit }, payload) {
    commit(mutationTypes.setUserStart)

    try {
      const res = await this.$api.auth.register(payload)
      const accessToken = res.accessToken
      const userId = res.user.id
      const data = res.user

      setItemCO(this.$cookies, "accessToken", accessToken)
      setItemCO(this.$cookies, "userId", userId)
      setItemLC("credential", { accessToken, userId })

      commit(mutationTypes.setUserSuccess, data)
      return data
    } catch (err) {
      commit(mutationTypes.setUserFailure, err)
      throw new Error(err)
    }
  },

  async [actionTypes.login]({ commit }, payload) {
    commit(mutationTypes.setUserStart)

    try {
      const res = await this.$api.auth.login(payload)
      const accessToken = res.accessToken
      const userId = res.user.id
      const data = res.user

      setItemCO(this.$cookies, "accessToken", accessToken)
      setItemCO(this.$cookies, "userId", userId)
      setItemLC("credential", { accessToken, userId })

      commit(mutationTypes.setUserSuccess, data)
      return data
    } catch (err) {
      commit(mutationTypes.setUserFailure, err)
      throw new Error(err)
    }
  },

  async [actionTypes.fetchUser]({ commit }, payload) {
    commit(mutationTypes.setUserStart)

    try {
      const data = await this.$api.auth.getUser(payload)

      commit(mutationTypes.setUserSuccess, data)
      return data
    } catch (err) {
      commit(mutationTypes.setUserFailure, err)
      // throw new Error(err)
    }
  },

  async [actionTypes.logout]({ commit }) {
    try {
      removeItemCO(this.$cookies, "accessToken")
      removeItemCO(this.$cookies, "userId")
      setItemLC("credential", "")

      await commit(mutationTypes.logoutUser)
    } catch (err) {
      throw new Error(err)
    }
  },

  async nuxtServerInit({ dispatch }) {
    const userId = this.$cookies.get("userId")
    await dispatch(actionTypes.fetchUser, userId)
  },
}

export default {
  namespaced: false,
  mutations,
  actions,
  getters,
}
