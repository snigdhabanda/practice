var lengthOfLongestSubstring = function(s) {
    if (s.length === 0) return 0 
    // if (s.length === 1) return 1 
    
    let maxLength = 0; 
    let sliced = ""
    for (let i = 0; i < s.length; i++){
        let visited = new Set()
        for (let j = i + 1; j <= s.length; j ++){
            sliced = s.slice(i, j)
            console.log(sliced)
            if (!visited.has(sliced[sliced.length - 1])){
                maxLength = Math.max(maxLength, sliced.length)
                visited.add(sliced[sliced.length - 1])
            }
            else{
                break 
            }
            
        }
    
    }
    return maxLength; 
}; 

console.log(lengthOfLongestSubstring(" ")) 
    