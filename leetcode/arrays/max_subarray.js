var maxSubArray = function(nums) {
    if (nums.length === 0) return 0
    //Kadane's algorithm: every neg num decreases sum so everytime you hit this,
        //you need to restart the sum
        //but remember that you will also be storing your greatest num as max (in the case you have all negatives)
        //you don't want to keep adding negs bc you will only get a lower sum 
    
    let sum = 0
    let i = 0; 
    let max = nums[0]
    
    while (i < nums.length){
        sum += nums[i]
        max = Math.max(max, sum)
        sum = sum < 0 ? 0: sum 
        i += 1
        
    }

    //brute force 

    //     let max = nums[0]
    
//     for (let i = 0; i < nums.length; i++){
//         let sum = nums[i]
//         max = Math.max(max, sum)
//         for (let j = i + 1; j < nums.length; j++){
//             sum += nums[j]
//             max = Math.max(max, sum)
            
//         }
        
//     }
}