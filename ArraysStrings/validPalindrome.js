const isPalindrome = function(s) {
  s = s.replace(/[\W_]+/g,"").toLowerCase()
  let i = 0
  let y = s.length - 1
  while (i < y) {
      if(s[i] === s[y]){
          i++
          y--
      }else {
          return false
      }
  }
  return true
};
