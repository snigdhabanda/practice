//Implement an algorithm to test whether a string has all unique characters. What if you cannot use extra data structures?

//O(n) time; O(n) space; 
// var unique_str = function(str){
//     let s = new Set()
//     for (let i = 0; i < str.length; i++){
//         if (str[i] in s) return false 
//         else s.add(str[i])
//     }
//     return true 
// }

//O(nlog(n)) time; O(1) space;
// var unique_str = function(str){
//     let chars = str.split("").sort()

//     for (let i = 1; i < chars.length; i++){
//         if (str[i] === str[i - 1]) return false 
//     }
//     return true 
// }

//O(n) time; O(1) space 
var unique_str = function(str){
    let char  = ""
    let arr = new Array(128).fill(false)

    for (let i = 0; i < str.length; i++){
        char = str.charAt(i) 
        if (arr[char]) return false 
        else arr[char] = true 
    }
    return true 
}
console.log(unique_str("helo"))