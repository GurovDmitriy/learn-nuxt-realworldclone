export default (axios) => ({
  getFeedList() {
    return axios.$get("/feedList")
  },

  getFeedListByTags(arr) {
    if (arr && arr.length) {
      const str = [...arr].join("&")
      return axios.$get(`/feedList?tags_like=${str}`)
    }

    return axios.$get("/feedList")
  },
})
