//THREESUM
//Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]] such that i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0.

//METHOD #1: pointers 
// var threeSum = function(nums) {
//     nums.sort()
//     let newArray = []
    
//     var findSum = function(nums, index, newArray){

//         let lo = index + 1;
//         let hi = nums.length - 1
//         let curr = nums[index]
        
        
//         while (lo < hi ){
//             if (nums[lo] + nums[hi] + curr === 0){
//                 newArray.push([nums[lo], nums[hi], curr])
//                 lo += 1
//                 hi -= 1
//                 while (lo < hi && nums[lo] === nums[lo - 1]){
//                     lo += 1
//                 }
                
//             }
//             if (nums[lo] + nums[hi] + curr < 0){
//                 lo += 1
//             }
//             else if (nums[lo] + nums[hi] + curr > 0){
//                 hi -= 1
//             }
//         }
        
//         }
    
//     for (let i = 0; i < nums.length; i++){
//         if (nums[i] > 0){
//             return newArray; 
//         }
//         if (i=== 0 || nums[i] !== nums[i - 1]){
//             findSum(nums, i, newArray) 
//         }
        
//     }
    
    
//     return newArray; 
      
    
    
// };