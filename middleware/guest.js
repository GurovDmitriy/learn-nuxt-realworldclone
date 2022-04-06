import { getterTypes as getterTypesAuth } from "~/store/auth"

export default ({ store, redirect }) => {
  const isLoggedIn = store.getters[getterTypesAuth.isLoggedIn]

  if (isLoggedIn) return redirect({ path: "/index" })
}
