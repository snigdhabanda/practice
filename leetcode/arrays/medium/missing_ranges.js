var findMissingRanges = function(nums, lower, upper) {
    if (nums.length === 0 && lower === upper) return [upper.toString()]
    if (nums.length === 0 && lower !== upper) return [lower.toString() + "->" + upper.toString()]
    let res = []
    if (Math.abs(lower - nums[0]) === 1){
        res.push(lower.toString())
        
    }
    else if (Math.abs(lower - nums[0]) > 1){
        res.push(lower.toString() + "->" + (nums[0] - 1).toString())
    }
    for (let i = 0; i < nums.length; i++){
        //index into current + next 
        let curr = nums[i]
        let next; 
        if (i === nums.length - 1){
            next = upper 
        }
        else{
            next = nums[i + 1]
        }
        if (i === nums.length - 1 && next - curr === 1) res.push(upper.toString())
        //if next - current > 1; range: "curr + 1; next - 1"
        if (next - curr > 1){
            let newCurr = curr + 1
            let newNext; 
            if (i !== nums.length - 1){
                newNext = next - 1
            }
            else{
                newNext = next; 
            }
            
            if (newCurr === newNext) res.push(newCurr.toString())
            else res.push(newCurr.toString() + "->" + newNext.toString())
            //push range into res
            
        }
       
    }
    return res 
    
    
};