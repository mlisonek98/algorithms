const palinPerm = function (str) {
  const hash = {}
  for(let i = 0; i < str.length; i++) {
    if(hash[str[i]]) {
      hash[str[i]]++
    } else {
      hash[str[i]] = 1
    }
  }
  let palindromeSum = 0
  for(let item in hash) {
    palindromeSum += hash[item] % 2
  }
  return palindromeSum < 2
}
