// You are given an integer array height of length n. There are n vertical lines drawn such that the two endpoints of the ith line are (i, 0) and (i, height[i]).

// Find two lines that together with the x-axis form a container, such that the container contains the most water.

// Return the maximum amount of water a container can store.

// Notice that you may not slant the container.

//time: O(n); space: O(1)
var maxArea = function(height) {
    let res = 0
    let lo = 0
    let hi = height.length - 1
    while (lo < hi){
        let width = hi - lo
        let length = Math.min(height[lo], height[hi])
        res = Math.max(res, width * length)
        if (height[lo] < height[hi]){
            lo += 1
        }
        else {
            hi -= 1
        }
    }
    
    return res
    
};

//solution #1
//brute force 

// let res = 0
    
//     for (let i = 0; i < height.length - 1; i++){
//         for (let j = i + 1; j < height.length; j++){
//             let width = j - i
//             let length = Math.min(height[i], height[j])
//             res = Math.max(res, width * length)
            
//         }
//     }
//     return res