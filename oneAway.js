const oneAway = function(str1, str2) {
  if(str1.length === str2.length) {
    let counter = 0
    for(let i = 0; i < str1.length; i++) {
      if(str1[i] !== str2[i]) {
        counter ++
      }
      if(counter > 1) {
        return false
      }
    }
    return true
  } else {
    let largerStr
    let smallerStr
    if (str1.length > str2.length) {
      largerStr = str1
      smallerStr = str2
    } else {
      largerStr = str2
      smallerStr = str1
    }
    if(largerStr.length - smallerStr.length === 1 && largerStr.includes(smallerStr)) {
      return true
    } else {
      return false
    }
  }
}
