
var removeDuplicates = function(nums) {
    let curr = 0; 
    let next = curr
    
    while (next < nums.length){
        if (nums[next] !== nums[curr]){
            curr += 1
            nums[curr] = nums[next] 
            next += 1
        }
        else{
            next += 1
        }
    }
    return curr + 1 
    
};
console.log(removeDuplicates([3,4,-1,3]))

