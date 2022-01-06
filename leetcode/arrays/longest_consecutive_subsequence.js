var longestConsecutive = function(nums) {
    let set = new Set()
    for (let i = 0; i < nums.length; i++){
        set.add(nums[i])
    }
    let longest = 0; 
    for (let i = 0; i < nums.length; i++){
        let seq = 1;
        let curr = nums[i]
        while (!set.has(nums[i] - 1)){
            if (set.has(curr + 1)){
                seq += 1
                curr +=  1
            }
            else break; 
        }
        longest = Math.max(longest, seq)
    }
    return longest 
};