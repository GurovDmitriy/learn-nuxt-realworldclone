import { getterTypes as getterTypesAuth } from "~/store/auth"

export default ({ store, redirect }) => {
  const userName = store.getters[getterTypesAuth.currentUser].userName
  const isSetFeed = !!store.state.feed.feed.id

  if (!isSetFeed) return redirect({ path: `/users/${userName}` })
}
