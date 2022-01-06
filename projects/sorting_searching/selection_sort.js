
//opposite of bubblesort (moves smallest number front)
//make a pass over the array and compare the first number to every other number 
//replace the first position with the smallest number
//then start at the second smallest number and repeat 
//this creates a sorted portion at the left and an unsorted portion on ther right 
//O(n^2) time; O(1) space (using pointers)
//first loop is O(n) time; second loop is O(n/2 time - makes one less pass than the parent loop)
//fewer swaps than bubble sort so more efficient in that regard; bubble sort makes multiple swaps one each pass; selection only once in each pass 

var selectionSort = function(arr){
    let min = 0;
    let i = 0; 
    let j = 0;  
    
    while (i < arr.length){
        //creates sorted portion of array
        min = i
        j = i + 1
        while (j < arr.length){
            //handles unsorted portion 
            if (arr[j] < arr[min]){
                min = j
            }
            j += 1
        }
        //replace the first element of the unsorted portion with the minimum 
        let temp = arr[i]
        arr[i] = arr[min]
        arr[min] = temp 
        i += 1
        
    }
    return arr 
}
console.log(selectionSort([100, 4,3,2,1]))