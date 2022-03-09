export default (axios) => ({
  register(payload) {
    return axios.$post("/register", payload)
  },

  login(payload) {
    return axios.$post("/login", payload)
  },

  getUser(payload) {
    return axios.$post(`/usersList/${payload}`)
  },
})
