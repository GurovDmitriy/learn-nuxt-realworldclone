import { isExistArr, isExistStr } from "~/helpers/isExist"

export default (axios) => ({
  getFeedList() {
    return axios.$get("/feedList")
  },

  getFeedListByTags(value) {
    if (isExistStr(value)) return axios.$get(`/feedList?tags_like=${value}`)

    if (isExistArr(value))
      return axios.$get(`/feedList?tags_like=${[...value].join("&")}`)

    return axios.$get("/feedList")
  },
})
