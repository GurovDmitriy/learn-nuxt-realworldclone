import { isNotEmptyObj, isNotEmptyArr } from "~/helpers/utils"

export function getIsValidParamsUser(value, data) {
  const onlyNum = getIsOnlyNum(value)
  const isExistUser = isNotEmptyObj(data)

  return !onlyNum && isExistUser
}

export function getIsValidParamsTag(value, data) {
  const onlyNum = getIsOnlyNum(value)
  const checkTag = data.filter((t) => t === value)

  return !onlyNum && isNotEmptyArr(checkTag)
}

export function getIsValidParamsFeed(value, data) {
  const onlyNum = getIsOnlyNum(value)
  const isExistFeed = isNotEmptyArr(data)

  return !onlyNum && isExistFeed
}

function getIsOnlyNum(value) {
  const reg = /^[0-9]+$/g
  return reg.test(value)
}
