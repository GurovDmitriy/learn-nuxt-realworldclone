export const getArrRange = (start, end) => {
  return [...Array(end).keys()].map((el) => el + start)
}
