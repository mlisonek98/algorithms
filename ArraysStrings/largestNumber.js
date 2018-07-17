const largestNumber = function(nums) {
    let number1 = 0
    for (let i = 0; i < nums.length; i++) {
        if(nums[i] !== 0) {
            number1 = 1
        }
        nums[i] = nums[i].toString()
    }
    if(number1 === 0) {
        return '0'
    }
    nums.sort((a,b) => {
        if(a.length === 1 && b.length === 1){

            return b - a
        } else if(a.length === 1 & b.length > 1) {
            let i = 0
            while (i < b.length) {
                if(a.charCodeAt(0) !== b.charCodeAt(i)) {
                    return b[i] - a
                }
                i++
            }
            return b - a
        } else if(a.length > 1 & b.length === 1) {
            let i = 0
            while (i < a.length) {
                if(a.charCodeAt(i) !== b.charCodeAt(0)) {
                    return b - a[i]
                }
                i++
            }
            return b - a
        }else {
            let i = 0
            let larger = Math.max(a.length, b.length)
            while (i < larger) {
                if((a.charCodeAt(i) !== b.charCodeAt(i)) && a[i] && b[i]) {
                    return b[i] - a[i]
                }
                i++
            }
            if(a.length === b.length) {
                return b - a
            } else if(a.length > b.length) {
                if(b[0] !== a[a.length - 1]) {
                  return b[0] - a[a.length - 1]
                } else {
                    return b[b.length - 1] - a[0]
                }

            } else {
                return b[b.length - 1] - a[0]
            }
        }
    })

    return nums.join('')
};
