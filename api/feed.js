export default (axios) => ({
  getFeedList(payload) {
    return axios.$get(`/feedList/${payload}`)
  },

  getFeedCountByTag() {
    return axios.$get("/feedCountByTag")
  },
})
