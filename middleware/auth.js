import { getterTypes as getterTypesAuth } from "~/store/auth"

export default ({ store, redirect }) => {
  const isAuthorized = store.getters[getterTypesAuth.getIsLoggedIn]

  if (!isAuthorized) return redirect({ path: "/login" })
}
