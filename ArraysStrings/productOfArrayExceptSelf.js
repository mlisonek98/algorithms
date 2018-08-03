const productExceptSelf = function(nums) {
  var arr = nums
  if(arr.length === 0 || arr.length === 1) {
    return []
  }
  var productArr = []
  var temp = 1
  for (var i = 0; i < arr.length ; i++) {
    productArr[i] = temp
    temp = temp * arr[i]

  }

  temp = 1
  for (i = arr.length - 1 ; i >= 0; i--) {

    productArr[i] = productArr[i] * temp
    temp = temp * arr[i]

  }

  return productArr
};
