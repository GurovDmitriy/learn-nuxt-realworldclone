import { isNotEmptyStr, isNotEmptyObj } from "~/helpers/utils"

export default (axios) => ({
  getFeed(payload) {
    const query = isNotEmptyStr(payload) ? `?${payload}` : ""

    return axios.$get(`/feeds${query}`)
  },

  createFeed(payload) {
    if (!isNotEmptyObj(payload)) return null

    return axios.$post("/feeds", payload)
  },

  updateFeed(payload) {
    if (!isNotEmptyObj(payload)) return null

    return axios.$put(`/feeds/${payload.id}`, payload)
  },

  deleteFeed(payload) {
    if (!payload || typeof payload !== "number") return null

    return axios.$delete(`/feeds/${payload}`)
  },
})
