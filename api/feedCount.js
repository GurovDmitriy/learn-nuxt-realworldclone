export default (axios) => ({
  getFeedCountTotal() {
    return axios.$get("/feedCountTotal")
  },

  getFeedCountByTag() {
    return axios.$get("/feedCountByTag")
  },

  getFeedCountByUser() {
    return axios.$get("/feedCountByUser")
  },

  getFeedCountByLike() {
    return axios.$get("/feedCountByLike")
  },
})
