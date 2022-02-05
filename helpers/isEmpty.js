export function isEmptyObj(value) {
  return value && Object.keys(value).length === 0
}

export function isEmptyArr(value) {
  return value && Array.isArray(value) && !value.length
}
