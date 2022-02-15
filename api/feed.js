import { isNotEmptyStr } from "~/helpers/isNotEmpty"

export default (axios) => ({
  getFeedList(payload) {
    const query = isNotEmptyStr(payload) ? `?${payload}` : ""

    return axios.$get(`/feedList/${query}`)
  },

  getFeedCountByTag() {
    return axios.$get("/feedCountByTag")
  },
})
