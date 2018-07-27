const intersect = function(nums1, nums2) {
  const hash = {}
  nums1.forEach((num) => {
      (hash[num]) ? hash[num]++ : hash[num] = 1
  })

  return nums2.filter((num) => {
      if(hash[num]){
        hash[num]--
          return true
      }
      return false
  })
};
