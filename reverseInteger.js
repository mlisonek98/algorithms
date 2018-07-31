const reverse = function(x){
  let max = Math.pow(2, 31) - 1;
  let min = Math.pow(-2, 31);
  let remainder = 0;
  let result = 0;
  while(x){
    remainder = x % 10;
    result = result * 10 + remainder;
    x = parseInt(x / 10);
    if(result < min || result > max) return 0;
  }
  return result;
}
