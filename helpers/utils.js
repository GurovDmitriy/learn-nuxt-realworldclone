// get

// getArr

export function getArrRange(start, end) {
  if (!start || typeof start !== "number") return
  if (!end || typeof end !== "number") return

  return [...Array(end).keys()].map((el) => el + start)
}

// getStr

export function getStrKebab(str) {
  if (!str || typeof str !== "string") return null

  return str.split(" ").join("-")
}

export function getStrFromKebab(str) {
  if (!str || typeof str !== "string") return null

  return str.split("-").join(" ")
}

export function getStrCapitalized(str) {
  if (!str || typeof str === "string") return null

  return `${str[0]}${str.slice(1)}`
}

// is

// isOuter

export function isOuterSrc(value) {
  if (!value || typeof value !== "string") return null

  return /^http/.test(value)
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
