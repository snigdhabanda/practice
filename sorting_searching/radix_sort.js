
//this version can only be used on integer data
//faster runtime than any other algorithm
//frequently used with binary numbers (this can handle images/strings)
var getDigitFrom = function(num, place){
    //-123, 2  --> 123/100 = Math.floor(1.23) = 1 % 10 = 1
    return Math.floor(Math.abs(num) / Math.pow(10, place)) % 10 
    
}

var getIntLength = function(num){
    //-123 --> Math.log10(123) = 
    return num === 0 ? 1 : Math.floor(Math.log10(Math.abs(num))) + 1
}

var getMaxDigits = function(nums){
    let maxDigits = 0
    for (let i = 0; i < nums.length; i++){
        maxDigits = Math.max(maxDigits, getIntLength(nums[i]))
    }
    return maxDigits
}
//find number of times you will have to sort numbers into buckets(this is the number of digits in the largest number)
//starting with 0, store numbers in their buckets based on last number (corresponds to bucket index (a 2D array))
//repeat with second last number
//so on and so forth until the last time and by this point all numbers should be in their respective buckets 
//this solution works on positive numbers only 
//worst runtime: O(n*k) where k is the length of the largest integer in the array 
//if all numbers are unique, runtime is O(n*log(k))/O(n*log(n)) - worst case runtime (as good as mergesort/quicksort )
//space: O(n+k) ==> each time you iterate until k, you create an array of 10 buckets; when you concatenate, you create an array of n length 
//use this when you don't know the largest element in the list 

var radixSort = function(arr){
    if (!Array.isArray(arr)) {
        return null;
    }
   
    let maxDigits = getMaxDigits(arr)
    for (let i = 0; i < maxDigits; i++){
        let buckets = Array.from({length: 10}, () => [])
        

        for (let j = 0; j < arr.length; j++){
            let digit = getDigitFrom(arr[j], i)
            buckets[digit].push(arr[j])
            
        }
        
        //this step excises empty arrays and concatenates only filled ones 
        arr = [].concat(...buckets)
        console.log(arr)
    }
    return arr
}
console.log(radixSort([100, 3, 4]))