export default (axios) => ({
  getFeedList() {
    return axios.$get("/feedList")
  },
})
