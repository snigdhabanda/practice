// Given an unsorted integer array nums, return the smallest missing positive integer.

// You must implement an algorithm that runs in O(n) time and uses constant extra space.
//O(n) time; O(1)
//use the index as a hash key and the number as the value 
var firstMissingPositive = function(nums) {
    if (nums.filter(num => num === 1).length === 0) return 1
     nums.forEach((num, idx) => {
         if (num <= 0 || num > nums.length){
            nums[idx] = 1
         }
     })
     console.log(nums)
     
     nums.forEach((num, idx) => {
         if (Math.abs(nums[idx]) === nums.length) {
             nums[0] = -Math.abs(nums[idx])}
         if (nums[Math.abs(nums[idx])] > 0) 
             nums[Math.abs(nums[idx])] *= -1
     })
     console.log(nums)

     for (let i = 0; i < nums.length; i++) {
         if (nums[i] > 0 && i !== 0) {
            return i 
         }
     }
     if (nums[0] > 0) return nums.length 
     else return nums.length + 1
 };

 console.log(firstMissingPositive([3,4,-1,1]))