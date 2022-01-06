
//make one pass through the entire array 
//compare the curr element with the previous one 
//instead of stopping at just the previous element (as in selection sort), compare it with all elements till the 0th index 
//while loop has 2 conditionals: make min >= 0 and the curr element has to be less than the previous one 
//if those are met, then your current element shifts to the previous one (remember that your curr val pointer is holding the shifting element) 
    //no replacement as in selection sort 
//place the value of your current pointer to the element position where your loop breaks 
//repeat process at the value greater than the curr pointer (not at the element greater than where the replacement happened)
//O(n^2) time; O(1) space 
//insertion sort (online algorithm) great for incoming/streaming data
//amortized run time is (O(n)) - you have one unsorted element and it is the last most one
//if new data coming in is entering a mostly sorted array, bam! linear runtime 
var insertionSort = function(arr){
    let i = 0
    let j = 0;
    let min = 0; 
    //i is the current pointer (keeps curr position in place)
    //j is the current value 

    while (i < arr.length){
        j = i; 
        min = j - 1

        while (arr[j] < arr[min] && min >= 0){
            arr[min + 1] = arr[min]
            min -= 1
        }
        //need to do min - 1 because min subtracted above and then loop broke 
        arr[min + 1] = arr[j]
        i += 1
    }
    return arr
}
