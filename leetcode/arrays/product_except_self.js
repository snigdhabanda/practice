//Arrays (Medium)

//PRODUCT EXCEPT SELF 
    // Given an integer array nums, return an array answer such that answer[i] is equal to the product of all the elements of nums except nums[i].

    //The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.

    //You must write an algorithm that runs in O(n) time and without using the division operation.


var productExceptSelf = function(nums) {
    //Method #2
    //O(n) runtime & O(1) space complexity 
    let answer = []
    let right = 1
    
    for (let i = 0;  i < nums.length; i++){
        if (i === 0){
            answer[i] = 1
        }
        else{
            answer[i] = (nums[i-1] * answer[i - 1])
        }
    }
    
    for (let i = nums.length - 1;  i >= 0; i--){
        if (i === nums.length - 1){
            right = 1
        }
        else{
            right = nums[i+1] * right
            answer[i] = answer[i] * right
        }
    }
    
    return answer; 
};

//Method #2
//create 2 new arrays: 1 with the product of everything left of the current number
    //1 with the product of everything right of the current number 
    //multiply the current number * previous number in the product array
    //O(n) runtime * 0(n) space complexity 
// let left = []
//     let right = []
//     let newArray = []
//     for (let i = 0;  i < nums.length; i++){
//         if (i === 0){
//             left[i] = 1
//         }
//         else{
//             left[i] = (nums[i-1] * left[i - 1])
//         }
//     }
    
//     for (let i = nums.length - 1;  i >= 0; i--){
//         if (i === nums.length - 1){
//             right[i] = 1
//         }
//         else{
//             right[i] = nums[i+1] * right[i + 1] 
//         }
//     }
    
//     for (let i = 0;  i < nums.length; i++){
//         newArray[i] = left[i] * right[i]
//     }
    
//     return newArray; 
//Method #1: passes 19/20 cases (time limit exceeded)
// let newArr = [];
    
//     for (let i = 0; i < nums.length; i++){
//         let leftCounter = 1; 
//         let rightCounter = 1; 
//         let leftSide = nums.slice(0, i)
//         let rightSide = nums.slice(i+1, nums.length)
        
//         for (let j = 0; j < leftSide.length; j++){
//             leftCounter *= leftSide[j] 
//         }
//         for (let k = 0; k < rightSide.length; k++){
//             rightCounter *= rightSide[k] 
//         }
//         newArr.push(leftCounter * rightCounter)
    
//     }
    
//     return newArr; 



