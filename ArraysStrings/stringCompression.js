const stringCompression = function (str) {
  let result = ''
  let count = 1
  for(let i = 1; i < str.length; i++) {
    count++
    if(str[i] !== str[i + 1]) {
      result += (str[i] + (count))
      count = 0
    }
  }
  return result
}
