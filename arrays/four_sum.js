var fourSum = function(nums, target) {
    
    var twoSum = function(nums, target){
        let lo = 0
        let hi = nums.length - 1
        
        let res = []
        while (lo < hi){
            let currSum = nums[hi] + nums[lo]
            if (currSum < target || (lo > 0 && nums[lo] === nums[lo - 1])){
                lo += 1
                }
             else if (currSum > target || (hi < nums.length - 1 && nums[hi] === nums[hi + 1])){
                hi -= 1
                }
            else{
                res.push([nums[lo], nums[hi]])
                lo += 1
                hi -= 1
            }
        }
        return res
    }
    
    var kSum = function(nums, target, k){
        let res = []
        if (nums.length === 0){
            return res
        }
        let avg = Math.floor(target / k)
        if (avg < nums[0] || avg > nums[nums.length - 1]) return res 
        
        if (k === 2) return twoSum(nums, target)
        
        for (let i = 0; i < nums.length; i++){
            if (i === 0 || nums[i - 1] !== nums[i]){
                for (let arr of kSum(nums.slice(i+1), target - nums[i], k - 1)) {
                    res.push([nums[i]].concat(arr))
                }
            }
        }
        
        return res; 
            
    }
    nums.sort()
    return kSum(nums, target, 4)
};