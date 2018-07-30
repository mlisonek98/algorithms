const mySqrt = function(x) {
  var start = 1;
  var end = x;
  var mid = Math.floor((start + end)/2);

  while(start <= end){
      mid = Math.floor((start + end)/2);
      if(mid * mid === x)
          return mid;
      else if((mid * mid) < x)
          start = mid +1;
      else if((mid * mid) > x)
          end = mid -1;
  }

  return mid * mid <=x? mid: mid-1;
};
