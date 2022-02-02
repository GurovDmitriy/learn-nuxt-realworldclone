// export default function ({ app, $axios }) {
//   $axios.interceptors.request.use((config) => {
//     const token = app.$cookies.get("accessToken")
//     const authorizationToken = token ? `Bearer ${token}` : ""
//     config.headers.Authorization = authorizationToken
//     return config
//   })
// }
