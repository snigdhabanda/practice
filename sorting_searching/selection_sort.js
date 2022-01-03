
//opposite of bubblesort (moves smallest number front)
//have a min pointer and curr pointer; increment curr pointer
//compare curr with next number and move min only when number is smallest

var selectionSort = function(arr){
    let curr = 0
    let min = 0; 
    let part = 0
    let sorted = false 
    while (i < arr.length){
        //creates sorted portion of array
        j = i + 1
        
        while (j < arr.length){
            //handles unsorted portion 
            if (arr[curr] < arr[min]){
                min = curr
            }
            j += 1
        }
        let temp = arr[i]
        arr[i] = arr[min]
        arr[min] = temp 
        i += 1
    }
    return arr 
}
console.log(selectionSort([8,3,4, -1]))