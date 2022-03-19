// get

// getArr

export function getArrRange(start, end) {
  return [...Array(end).keys()].map((el) => el + start)
}

// getStr

export function getStrKebab(str) {
  if (typeof str === "string") return str.split(" ").join("-")
  return false
}

export function getStrFromKebab(str) {
  if (typeof str === "string") return str.split("-").join(" ")
  return false
}

export function getStrCapitalized(str) {
  if (typeof str === "string") return `${str[0]}${str.slice(1)}`
  return false
}

// is

// isOuter

export function isOuterSrc(value) {
  return value && /^http/.test(value)
}

// isEmpty

export function isEmptyStr(value) {
  if (!value || typeof value !== "string") return null

  return value === ""
}

export function isEmptyObj(value) {
  if (!value || typeof value !== "object") return null

  return Object.keys(value).length === 0
}

export function isEmptyArr(value) {
  if (!value || !Array.isArray(value)) return null

  return value.length === 0
}
