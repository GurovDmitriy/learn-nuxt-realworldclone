export default (axios) => ({
  getTagsPopular() {
    return axios.$get("/tagsPopular")
  },
})
