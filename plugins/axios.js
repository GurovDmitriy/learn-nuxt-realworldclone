import { actionTypes as actionTypesAuth } from "~/store/auth"

export default function ({ app, $axios, store }) {
  $axios.interceptors.request.use((config) => {
    const token = app.$cookies.get("accessToken")
    const authorizationToken = token ? `Bearer ${token}` : ""
    config.headers.Authorization = authorizationToken
    return config
  })

  $axios.onError((error) => {
    if (error.response.status === 401) {
      store.dispatch(actionTypesAuth.logout)
    }
  })
}
