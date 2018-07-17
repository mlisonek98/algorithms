//O(n) Space O(n) Time
const isUnique = function(str) {
  const hash = {}
  for (let i = 0; i < str.length; i++) {
    if(hash[str[i]]) {
      return false
    } else {
      hash[str[i]] = true
    }
  }
  return true
}

//O(1) Space O(n) Time
const isUniqueInPlace = function(str) {
  str = str.split('').sort()
  for (let i = 0; i < str.length - 1; i++) {
    if(str[i] === str[i + 1]) {
      return false
    }
  }
  return true
}

isUniqueInPlace('abcda') === false
