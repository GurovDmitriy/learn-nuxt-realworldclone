import { getterTypes as getterTypesAuth } from "~/store/auth"

export default ({ store, redirect }) => {
  const isLoggedIn = store.getters[getterTypesAuth.getIsLoggedIn]

  if (isLoggedIn) return redirect({ path: "/" })
}
