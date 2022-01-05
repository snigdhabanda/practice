
var groupAnagrams = function(strs) {
    let hash = {}
    
    let i = 0;
   
    while (i < strs.length){
        
        let word = strs[i].split("").sort().join("")
        if (!(word in hash)){
            console.log(strs[i], hash)
            hash[word] = [strs[i]]
            for (let j = i + 1; j < strs.length; j++){
                let word2 = strs[j].split("").sort().join("")
                if (word2 in hash){
                    hash[word2].push(strs[j])
                }
            }
            console.log(hash)

           
        }
        i++
    }
    return Object.values(hash)
};

// var groupAnagrams = function(strs) {
//     let i = 0; 
//     let j = i
//     let s = new Set()
//     let arr = []
//     let word; 
//     if (strs.length === 1) return [[strs[0]]]
    
//     while (i < strs.length - 1){
//         word = strs[i]
        
//         if (!s.has(word)){
//             //this is the hash to store the word you'll compare to
//             let hash = {}
//             for (let char = 0; char < word.length; char++){
//                 if (word[char] in hash){
//                     hash[word[char]] += 1
//                 }
//                 else{
//                     hash[word[char]] = 1; 
//                 }
//             }
//             //selecting the next word 
//             j = i + 1
//             //this is the sub array
//             let sub = []
            
//             while (j < strs.length){
//                 let dup = Object.assign({}, hash)
//                 let word2 = strs[j]
                
//                 for (let char2 = 0; char2 < word2.length; char2++){
//                     if (word2[char2] in dup){
//                         dup[word2[char2]] -= 1
//                     }
//                 }
//                 if (Object.values(dup).filter(val => val === 0).length === word.length && word !== ""){
//                     sub.push(word2)
//                     s.add(word2)
//                 }
//                 j++
//             }

//             arr.push(sub.concat([word]))
            
//         }
       
//         i++
//     }
//     if (!s.has(strs[strs.length - 1])) arr.push([strs[strs.length - 1]])
//     return arr 
// };

strs = ["eat","tea","tan","ate","nat","bat"]

console.log(groupAnagrams(strs))
