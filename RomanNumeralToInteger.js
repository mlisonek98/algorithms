const romanToInt = function(s) {
  const hash = {
      'I': 1,
      'V': 5,
      'X': 10,
      'L': 50,
      'C': 100,
      'D': 500,
      'M': 1000
  }
  let i = s.length
  let result = 0
  while(i--) {
      let current = hash[s[i]]
      let previous = hash[s[i - 1]]
      result += current
      if(previous < current) {
          result -= previous
          i -= 1
      }
  }
  return result
};
