import feed from "~/api/feed"
import tag from "~/api/tag"
import user from "~/api/user"

export default ({ $axios }, inject) => {
  inject("api", {
    feed: feed($axios),
    tag: tag($axios),
    user: user($axios),
  })
}
