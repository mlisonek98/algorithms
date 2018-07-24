const isHappy = function(n) {
  let counter = 0
  while(n !== 1) {
      let result = 0
      n = n.toString().split('')
      for(let i = 0; i < n.length; i++) {
          n[i] = parseInt(n[i])
          result += (n[i] * n[i])
      }
      n = result
      counter++
      if(counter === 7) {
          return false
      }
  }
  return true

};
