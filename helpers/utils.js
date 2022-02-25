// get

export function getArrRange(start, end) {
  return [...Array(end).keys()].map((el) => el + start)
}

export function getKebabStr(str) {
  if (typeof str === "string") return str.split(/\W/).join("-")
  return null
}

// Boolean

// isOuter

export function isOuterSrcImage(value) {
  return value && /^http/.test(value)
}

// isEmpty

export function isEmptyStr(value) {
  return value && typeof value === "string" && value === ""
}

export function isEmptyObj(value) {
  return value && Object.keys(value).length === 0
}

export function isEmptyArr(value) {
  return value && Array.isArray(value) && value.length === 0
}

// isNotEmpty

export function isNotEmptyStr(value) {
  return value && typeof value === "string" && value !== ""
}

export function isNotEmptyObj(value) {
  return value && Object.keys(value).length > 0
}

export function isNotEmptyArr(value) {
  return value && Array.isArray(value) && value.length > 0
}

// isExist

export function isExistArr(value) {
  return value && Array.isArray(value) && value.length
}

export function isExistStr(value) {
  return value && typeof value === "string"
}

export function isExistImageSrc(value) {
  return value && typeof value === "string"
}
