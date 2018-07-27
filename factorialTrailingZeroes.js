const trailingZeroes = function(n) {
  var result = 0;
  while (n>4) result+=Math.floor(n/=5);
  return result;
};
