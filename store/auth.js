import { setItemCO, removeItemCO } from "~/helpers/persistanceCookie"
import { setItemLS } from "~/helpers/persistanceStorage"

export const getterTypes = {
  currentUser: "[auth] currentUser",
  isLoggedIn: "[auth] isLoggedIn",
  isAnonymous: "[auth] isAnonymous",
  isAdmin: "[auth] isAdmin",
}

export const mutationTypes = {
  setUserStart: "[auth] setUserStart",
  setUserSuccess: "[auth] setUserSuccess",
  setUserFailure: "[auth] setUserFailure",

  logoutStart: "[auth] logoutStart",
  logoutSuccess: "[auth] logoutSuccess",
  logoutFailure: "[auth] logoutFailure",
}

export const actionTypes = {
  register: "[auth] register",
  login: "[auth] login",
  logout: "[auth] logout",
  fetchUser: "[auth] fetchUser",
  updateUser: "[auth] updateUser",
}

export const state = () => ({
  user: null,
  isLoggedIn: null,
  isSubmitting: false,
  isLoading: false,
  errors: null,
})

const getters = {
  [getterTypes.currentUser]: (state) => {
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
    state.isSubmitting = true
    state.isLoading = true
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
    state.isLoggedIn = false
    state.isSubmitting = false
    state.isLoading = false
  },

  [mutationTypes.logoutStart](state) {
    state.isSubmitting = true
    state.isLoading = true
    state.errors = null
  },

  [mutationTypes.logoutStart](state) {
    state.user = null
    state.isLoggedIn = false
  },

  [mutationTypes.logoutStart](state, payload) {
    state.errors = payload
    state.isLoggedIn = false
    state.isSubmitting = false
    state.isLoading = false
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
      setItemLS("credential", { accessToken, userId })

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
      setItemLS("credential", { accessToken, userId })

      commit(mutationTypes.setUserSuccess, data)
      return data
    } catch (err) {
      commit(mutationTypes.setUserFailure, err)
      // throw new Error(err)
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

  async [actionTypes.updateUser]({ commit }, payload) {
    commit(mutationTypes.setUserStart)

    try {
      const res = await this.$api.auth.updateUser(payload)
      const { image, email, firstName, lastName, userName, role, id } = res
      const data = { image, email, firstName, lastName, userName, role, id }

      commit(mutationTypes.setUserSuccess, data)
      return data
    } catch (err) {
      commit(mutationTypes.setUserFailure, err)
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

    await dispatch(actionTypes.fetchUser, userId)
  },
}

export default {
  namespaced: false,
  mutations,
  actions,
  getters,
}
