export const getItemLC = (key) => {
  try {
    return JSON.parse(localStorage.getItem(key))
  } catch (err) {
    return null
  }
}

export const setItemLC = (key, data) => {
  try {
    localStorage.setItem(key, JSON.stringify(data))
  } catch (err) {
    return null
  }
}
