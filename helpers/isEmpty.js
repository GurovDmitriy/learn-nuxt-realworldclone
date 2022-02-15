export function isEmptyStr(value) {
  return value && typeof value === "string" && value === ""
}

export function isEmptyObj(value) {
  return value && Object.keys(value).length === 0
}

export function isEmptyArr(value) {
  return value && Array.isArray(value) && value.length === 0
}
