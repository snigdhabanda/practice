//Find all permutations of a smaller string in a larger string. Print the location of each permutation

var strPermutations = function(str1, str2){
    let locs = [] 
    let perms = []
    let window = ""
    let max = Math.max(str1.length, str2.length)
    if (str1.length === max) {[str1, str2] = [str2, str1]}
    
    
    for(let i = 0; i < str2.length; i++){
        window = str2.slice(i, str1.length)
        for (let j = i; j < window.length; j++){
            if (!str1.includes(str2[j])){
                break 
            }
            if (j === window.length - 1){
                locs.push(i)
            }
        }
    }
    return locs 
}
let str1 = "abbc"
let str2 = "cbabadcbbabbcbabaabccbabc"

console.log(strPermutations(str1, str2))