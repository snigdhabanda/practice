//THREESUM
//Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]] such that i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0.
//Method #2
//time: O(n^2); sorting takes nlogn so overall is n^2 + nlogn which is n^2
//space: O(n)
var threeSum = function(nums) {
    nums.sort()
    let hash = {}
    let index = 0
    let newArray = []
  
    var findSum = function(nums, index, newArray){
        let curr = index + 1
        let set = new Set()
        while (curr < nums.length){
            let comp = -(nums[index] + nums[curr])
            if (set.has(comp)){
                newArray.push([nums[curr], nums[index], comp])
                while(curr + 1 < nums.length && nums[curr] === nums[curr + 1]){
                    curr += 1
                }
            }
            else{
                set.add(nums[curr])
            }
            curr += 1
        }
    }
    for (let i = 0; i < nums.length; i++){
        if (nums[i] > 0){
            return newArray; 
        }
        if (i=== 0 || nums[i] !== nums[i - 1]){
            findSum(nums, i, newArray) 
        }
        
    }
    return newArray; 
      
    
    
};
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