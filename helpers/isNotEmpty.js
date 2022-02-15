export function isNotEmptyStr(value) {
  return value && typeof value === "string" && value !== ""
}

export function isNotEmptyObj(value) {
  return value && Object.keys(value).length > 0
}

export function isNotEmptyArr(value) {
  return value && Array.isArray(value) && value.length > 0
}
