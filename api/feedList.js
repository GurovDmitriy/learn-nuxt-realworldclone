import { isNotEmptyStr } from "~/helpers/utils"

export default (axios) => ({
  getFeedList(payload) {
    const query = isNotEmptyStr(payload) ? `?${payload}` : ""

    return axios.$get(`/feedList${query}`)
  },
})
