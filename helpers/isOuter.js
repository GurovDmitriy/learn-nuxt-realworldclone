export function isOuterSrcImage(value) {
  return value && /^http/.test(value)
}
