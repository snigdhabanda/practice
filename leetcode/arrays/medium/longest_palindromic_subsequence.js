var longestPalindrome = function(s) {
    if (s.length === 0) return ""
    let longest = s[0]
    for (let i = 0; i < s.length; i++){
        for (let j = i + 1; j <= s.length; j++){
            let sliced = s.slice(i, j)
            let reversed = sliced.split("").reverse().join("")
            if (sliced === reversed && sliced.length > longest.length) longest = sliced 
        }
    }
    return longest; 
};