//moves the largest number to the end
//makes another pass until no numbers are rearranged 
//time: O(n^2); space: O(1) excluding array passed in 

var bubbleSort = function(arr){
    let sorted = false 
    let i = 0
    while (!sorted){
        i = 0
        sorted = true
        while (i < arr.length - 1){
            if (arr[i] > arr[i+1]){
                sorted = false 
                let temp = arr[i+1]
                arr[i+1] = arr[i]
                arr[i] = temp 
                
            }
            i += 1 
        }
    }
    return arr
}

