import { forms } from "~/helpers/vars"
import validators from "~/helpers/validators"

function getArrMessagesValidation(...checks) {
  const data = []

  checks.forEach((item) => {
    if (item) {
      data.push(item)
    }
  })

  return data
}

function checkFieldUserName(value) {
  return getArrMessagesValidation(
    validators.getCheckStr(value, forms.sign.userName.message.type),
    validators.getCheckRequired(value, forms.sign.userName.message.required),
    validators.getCheckRange(
      value,
      forms.sign.userName.config.min,
      forms.sign.userName.config.max,
      forms.sign.userName.message.min,
      forms.sign.userName.message.max
    )
  )
}

export default {
  checkFieldUserName,
}
