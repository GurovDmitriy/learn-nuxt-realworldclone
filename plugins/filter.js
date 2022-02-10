import Vue from "vue"
import { format } from "date-fns"

Vue.filter("dateFormatBase", dateFormatBase)

function dateFormatBase(date) {
  const dateFormat = format(new Date(date), "MMMM dd, yyyy")
  return dateFormat
}
