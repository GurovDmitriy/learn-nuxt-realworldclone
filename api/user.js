import { isNotEmptyStr } from "~/helpers/utils"

export default (axios) => ({
  getUser(payload) {
    if (isNotEmptyStr(payload)) {
      const query = `?${payload}`
      return axios.$get(`/userList${query}`)
    }

    return {}
  },
})
