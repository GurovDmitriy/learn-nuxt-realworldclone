export default (axios) => ({
  getTags() {
    return axios.$get("/tags")
  },
})
