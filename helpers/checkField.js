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
  const fieldName = "userName"

  const required = validators.getCheckRequired(
    value,
    forms.sign[fieldName].message.required
  )

  const type = validators.getCheckStr(value, forms.sign[fieldName].message.type)

  const range = validators.getCheckRange(
    value,
    forms.sign[fieldName].config.min,
    forms.sign[fieldName].config.max,
    forms.sign[fieldName].message.min,
    forms.sign[fieldName].message.max
  )

  return getArrMessagesValidation(required, type, range)
}

function checkFieldEmail(value) {
  const fieldName = "email"

  const required = validators.getCheckRequired(
    value,
    forms.sign[fieldName].message.required
  )

  const type = validators.getCheckStr(value, forms.sign[fieldName].message.type)

  const range = validators.getCheckRange(
    value,
    forms.sign[fieldName].config.min,
    forms.sign[fieldName].config.max,
    forms.sign[fieldName].message.min,
    forms.sign[fieldName].message.max
  )

  const email = validators.getCheckEmail(
    value,
    forms.sign[fieldName].message.format
  )

  return getArrMessagesValidation(required, type, range, email)
}

function checkFieldPassword(value) {
  const fieldName = "password"

  const required = validators.getCheckRequired(
    value,
    forms.sign[fieldName].message.required
  )

  const range = validators.getCheckRange(
    value,
    forms.sign[fieldName].config.min,
    forms.sign[fieldName].config.max,
    forms.sign[fieldName].message.min,
    forms.sign[fieldName].message.max
  )

  return getArrMessagesValidation(required, range)
}

function checkFieldFirstName(value) {
  const fieldName = "firstName"

  const required = validators.getCheckRequired(
    value,
    forms.sign[fieldName].message.required
  )

  const type = validators.getCheckStr(value, forms.sign[fieldName].message.type)

  const range = validators.getCheckRange(
    value,
    forms.sign[fieldName].config.min,
    forms.sign[fieldName].config.max,
    forms.sign[fieldName].message.min,
    forms.sign[fieldName].message.max
  )

  return getArrMessagesValidation(required, type, range)
}

function checkFieldLastName(value) {
  const fieldName = "lastName"

  const required = validators.getCheckRequired(
    value,
    forms.sign[fieldName].message.required
  )

  const type = validators.getCheckStr(value, forms.sign[fieldName].message.type)

  const range = validators.getCheckRange(
    value,
    forms.sign[fieldName].config.min,
    forms.sign[fieldName].config.max,
    forms.sign[fieldName].message.min,
    forms.sign[fieldName].message.max
  )

  return getArrMessagesValidation(required, type, range)
}

function checkFieldUrl(value) {
  const fieldName = "image"

  const required = validators.getCheckRequired(
    value,
    forms.sign[fieldName].message.required
  )

  const type = validators.getCheckStr(value, forms.sign[fieldName].message.type)

  const range = validators.getCheckRange(
    value,
    forms.sign[fieldName].config.min,
    forms.sign[fieldName].config.max,
    forms.sign[fieldName].message.min,
    forms.sign[fieldName].message.max
  )

  const url = validators.getCheckUrl(
    value,
    forms.sign[fieldName].message.format
  )

  return getArrMessagesValidation(required, type, range, url)
}

export default {
  checkFieldUserName,
  checkFieldEmail,
  checkFieldPassword,
  checkFieldFirstName,
  checkFieldLastName,
  checkFieldUrl,
}
