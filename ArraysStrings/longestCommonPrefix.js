const longestCommonPrefix = function(strs) {
  let result = "";

  if(!strs || strs.length === 0)
  {
    return result;
  }

  const strings = strs;
  const firstStr = strings.shift();
  let index = 0;
  let indexVal = "";

  while(true){
        indexVal = firstStr.charAt(index);
    if( indexVal === "" || !strings.every( str => indexVal === str.charAt(index) ) ) {
        break;
    }
    else {
        result = result.concat(indexVal);
        index++;
    }
  }
  return result
};
