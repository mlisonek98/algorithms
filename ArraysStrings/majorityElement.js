const majorityElement = function(nums) {
  if(nums.length === 1) return nums[0]
  let result = 0
  let largest = 0
  let counter = 0
  nums = nums.sort((a,b) => a - b)
  for(let i = 0; i < nums.length; i++) {
      if(nums[i] !== nums[i + 1]) {
          if(counter > largest) {
              largest = counter
              counter = 0
              result = nums[i]
          }
      } else {
          counter ++
      }
  }
  return result
};
