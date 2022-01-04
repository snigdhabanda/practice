
//Return true if the array contains the target 
//time: O(log(n)); space: O(n)
var binarySearch = function(arr, target){
    if (arr.length === 0) return false; 

    let mid = Math.floor(arr.length / 2)
    let left = arr.slice(0, mid)
    let right = arr.slice(mid + 1)

    if (arr[mid] === target) return true 
    else if (arr[mid] > target){
        return binarySearch(left, target)
    }
    else{
        let rightHalf = binarySearch(right, target)
        return rightHalf ? rightHalf : false 
    }

}

console.log(binarySearch([11,1,10,5], 6))