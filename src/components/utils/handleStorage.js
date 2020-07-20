export function saveToStorage(key, dataSet) {
  localStorage.setItem(key, JSON.stringify(dataSet))
}

export function getFromStorage(key) {
  return JSON.parse(localStorage.getItem(key))
}
