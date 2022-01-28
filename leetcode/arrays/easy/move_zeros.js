var moveZeroes = function(nums) {
   
    //return if nums.length == 1
    if (nums.length === 1) return nums 
    
    //curr = 0 & next = 1 pointer
    let curr = 0 
    let next = 1
    
    //curr < nums.length 
    while (next < nums.length){
    //if curr === 0 
        if (nums[curr] === 0){
        // if next === 0
            if (nums[next] === 0){
            //increment next 
                next += 1
            }
        //else 
            else{
                //flip curr next
                [nums[curr], nums[next]] = [nums[next], nums[curr]] 
                //curr += 1
                curr += 1
                //next += 1
                next += 1
                }
        
        }
        else{
            //else
            curr += 1
            next += 1
        }
        

    }
    return nums
};