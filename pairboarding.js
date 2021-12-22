// #1 Write a method, digital_root(num). It should sum the digits of a positive integer. If it is greater than or equal to 10, sum the digits of the resulting number. Keep repeating until there is only one digit in the result, called the "digital root". Do not use string conversion within your method.

// non-recursive solution 
function digital_root_step(num){
    let root = 0
    while (num > 0 ) {
        root += num % 10 
        num = Math.floor(num / 10)
    }
    return root 
}


function digital_root(num) {
    while (num > 10){
        num = digital_root_step(num)
    }
    return num 
}

// //recursive solution 

const digital_root_recur = (num) => {
    if (num < 10) return num 
    
    return digital_root_recur( (num % 10) + Math.floor(num / 10))

}

// console.log(digital_root_recur(1000))

// //#2 Write a function that takes a message and an increment amount and outputs the same letters shifted by that amount in the alphabet. Assume lowercase and no punctuation. Preserve spaces.

const caesar_cipher = (message, inc) => {
    let newMessage = ""
    for (let i = 0; i < message.length; i ++) {
        message[i] === " " ? newMessage += " " : newMessage += String.fromCharCode(message[i].charCodeAt(0) + inc % 26)
    }
    
    return newMessage
}

// console.log(caesar_cipher("hi", 27))

// Write a function, longest_common_substring(str1, str2) that takes two strings and returns the longest common substring. A substring is defined as any consecutive slice of letters from another string.

// Bonus: solve it in O(m * n) using O(m * n) extra space. (Hint: the solution involves dynamic programming which will be introduced later in the course.)


const longest_common_substring = (str1, str2) => {
    let longest = ""

    let start_idx = 0;
    while (start_idx < str1.length){
        let end_idx = start_idx + 1
        let next = "" 
        while (end_idx < str1.length) {
            
            if (str2.includes(str1.slice(start_idx, end_idx + 1))){
                next = str1.slice(start_idx, end_idx + 1)
                if (next.length > longest.length){
                    longest = next; 
                }
            }
            end_idx += 1
        }
        start_idx += 1
    }

    return longest; 
    
}

// console.log(longest_common_substring ("llo", "hello"))

// Write a function that takes an array of integers and returns their sum. Use recursion.

var sum_rec = (arr) => {
    if (arr.length === 0) return 0
    
    return arr.pop() + sum_rec(arr)
}

// console.log(sum_rec([1,2,3,4]))

//recursive
var fibs = (n) => {
    if (n === 2) return [1, 1]
    if (n === 1) return [1]

    prevFibs = fibs(n - 1)
    prevFibs.push(prevFibs[prevFibs.length - 1] + prevFibs[prevFibs.length - 2])
    return prevFibs
}




//iterative 
var iter_fibs = (n) => {

    if (n === 1) return [1]
    if (n === 2) return [1, 1]
    let arr = [1, 1]
    
    while (n > 2) {
        arr.push(arr[arr.length - 1] + arr[arr.length - 2])
        n -= 1
    }
    return arr
}
// console.log(iter_fibs(5))

isPalindrome = (str) => {
    let start_idx = 0;
    let end_idx = str.length - 1

    while (end_idx - start_idx > 0){
        if (str[start_idx] !== str[end_idx]){
            return false 
        }
        start_idx += 1
        end_idx -= 1
    }
    return true; 
}
// console.log(isPalindrome("wow"))

const valid_ip = (str) => {
    if (!str.match(/^\d+(\.\d+){3}$/)) return false; 
    let nums = str.split(".")
    for (let i = 0; i < nums.length; i++){
        if (parseInt(nums[i]) < 0 || parseInt(nums[i]) > 255){

            return false
        }
    }

    return true; 
}

// console.log(valid_ip("2.3.4.5"))

var sum_from_file = function(filename){
    let lines = FileReader.readAsArrayBuffer(filename)
    let sum = 0; 
    for (let i = 0; i < lines.length; i++){
        if (lines[i][0] !== "#"){
            for (let j = 0; j < lines.length; j++){
                sum += lines[i][j]
        }
    }
    }
    return sum; 
}

var shuffle = (arr) => {
    let dup = [...arr]
    for (let i = 0; i < dup.length; i ++){
        let rand = Math.floor(Math.random() * dup.length)
        let temp = dup[i]
        dup[i] = dup[rand]
        dup[rand] = temp 
        
    }
    return dup 
}

console.log(shuffle([1,2,3,4]))

Array.prototype.myMap = function(callback){
    let newArr = []; 
    this.forEach((ele) => {
        newArr.push(callback(ele))
    })
    return newArr
}

//unsorted array: shortest runtime is O(n)
// var findSmallest = function(arr){

//     let smallest = arr[0]
//     for (let i = 0; i < arr.length; i++){
    
//         if (arr[i] < smallest){
//             smallest = arr[i]
//         }
//     }
//     let secondSmallest = arr[1] 

//     for (let i = 0; i < arr.length; i++){
    
//         if (arr[i] > smallest && arr[i] < secondSmallest){
//             secondSmallest = arr[i]
//         }
//     }
//     return secondSmallest; 
 
// }

// var findSmallest = function(arr){

//     let smallest = arr[0]
//     let secondSmallest = arr[1]
//     for (let i = 0; i < arr.length; i++){
    
//         if (arr[i] < smallest){
//             smallest = arr[i]
//         }
//         else if (arr[i] < secondSmallest){
//             secondSmallest = arr[i]
//         }
//     }
    
//     return secondSmallest; 
 
// }

// console.log(findSmallest([3,1,-1,1]))

//nthSmallest solve by doing mergesort, then find nth number - this is nlogn
// var findNthSmallest = function(arr, n){

//     //mergesort 
 

