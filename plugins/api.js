import auth from "~/api/auth"
import feed from "~/api/feed"
import feedCount from "~/api/feedCount"
import tag from "~/api/tag"
import user from "~/api/user"

export default ({ $axios }, inject) => {
  inject("api", {
    feed: feed($axios),
    feedCount: feedCount($axios),
    tag: tag($axios),
    user: user($axios),
    auth: auth($axios),
  })
}
