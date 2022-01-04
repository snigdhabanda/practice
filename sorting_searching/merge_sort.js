

//first function is O(log(n)) since you're dividing the array in 1/2
//a length of 32 takes 5 passes to reach the base case so 2^5 = 32
//total time: O(nlog(n)); total space: O(n) (arrays used to store left + right values)
//this is the best runtime for sorting algos but there is a tradeoff for space 
var mergeSort = function(arr){
    if (arr.length <= 1) return arr 
    
    let mid = Math.floor(arr.length / 2)
    let left = arr.slice(0, mid)
    let right = arr.slice(mid)

    //this is hit first and runs until base case 
    let sortedLeft = mergeSort(left)
    //this is hit second and runs until base case 
    let sortedRight = mergeSort(right)

    //this runs last but is NOT the final step! 
    //this simply returns the smallest sorted array for one side of the recursion tree
    //ie) the return for [1, 3, 2] is [1,2,3]; the result is the passed up the recursive call stack and merge happens again
    return merge(sortedLeft, sortedRight)
}

//O(n) time where n is the combined length of both arrays 

var merge = function(left, right){
    let merged = []
    //always compare first elements of both arrays and push into the merged array
    //if one array runs out of elements then set that first value to be infinity
    //so all the elements from the other array get added 
    while (left.length || right.length){
        let leftElem = left.length ? left[0] : Infinity
        let rightElem = right.length ? right[0] : Infinity
        let next 
        if (leftElem < rightElem){
            next = left.shift()
        }
        else next = right.shift()

        merged.push(next)
    }

    return merged 
}

