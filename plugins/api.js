import feed from "~/api/feed"
import tag from "~/api/tag"

export default ({ $axios }, inject) => {
  inject("api", {
    feed: feed($axios),
    tag: tag($axios),
  })
}
