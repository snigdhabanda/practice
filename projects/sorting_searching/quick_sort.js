
//true worst case is O(n^2) run time but much closer to O(nlog(n))
//runtime depends on how you choose the pivot 
//space: currently O(n) but there is a O(log(n)) version
//if you think your data is mostly sorted dont pick the first element as the pivot - randomize this! or use the 3-median approach 

var quickSort = function(arr){
    if (arr.length <= 1) return arr 
    //randomly select a pivot 
    //for greater efficiency you could find the sort the first, middle, and last values and the middle value can be the pivot (supposed to be around the median)
    
    //the following steps are O(n)
    
    let pivot = arr.shift()
    //an array of all elements less than the pivot 
    let left = arr.filter(el => el < pivot)
    //an array of all elements less than the pivot
    let right = arr.filter(el => el > pivot)

    //best case for picking the pivot (for recursion) is O(log(n)) if you select the median first 
    //worst case is O(log(n))
    let leftSorted = quickSort(left)
    let rightSorted = quickSort(right)
    
    //concatenation also works here
    return [...leftSorted, pivot, ...rightSorted]
}

console.log(quickSort([100, -1, 80, 4]))