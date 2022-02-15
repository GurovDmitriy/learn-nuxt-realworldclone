import { isExistArr, isExistStr } from "~/helpers/isExist"

export default (axios) => ({
  getFeedList(config) {
    if (config.pagQuery) return axios.$get(`/feedList?${config.pagQuery}`)

    return axios.$get(`/feedList`)
  },

  getFeedListByTags(config) {
    if (isExistStr(config.slug))
      return axios.$get(`/feedList?tags_like=${config.slug}`)

    if (isExistArr(config.slug))
      return axios.$get(`/feedList?tags_like=${[...config.slug].join("&")}`)

    return axios.$get("/feedList")
  },

  getFeedCountByTag() {
    return axios.$get("/feedCountByTag")
  },
})
