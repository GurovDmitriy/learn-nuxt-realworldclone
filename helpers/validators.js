function getCheckRequired(value, message) {
  return value ? false : message
}

function getCheckStr(value, message) {
  return typeof value === "string" && !Number(value) ? false : message
}

function getCheckNum(value, message) {
  return typeof value === "string" && Number(value) ? false : message
}

function getCheckRange(value, min, max, minMessage, maxMessage) {
  if (value.length < min) return minMessage
  if (value.length > max) return maxMessage
  return false
}

function getCheckEmail(value, message) {
  const reg =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

  return reg.test(value) ? false : message
}

export default {
  getCheckRequired,
  getCheckStr,
  getCheckNum,
  getCheckEmail,
  getCheckRange,
}
