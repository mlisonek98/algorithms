const generate = function(numRows) {
  let result = [];
  let array = [];
  if(numRows >= 1){
      result.push([1]);
  }
  for(let i = 2; i <= numRows; i++){
      array[0] = 1;
      for(let j = 1; j < i; j++){
          array[j] = result[i - 2][j - 1] + (result[i - 2][j] || 0)
      }
      result.push(array);
      array = [];
  }
  return result;
};
