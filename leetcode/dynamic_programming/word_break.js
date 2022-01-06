//Given a string s and a dictionary of strings wordDict, return true if s can be segmented into a space-separated sequence of one or more dictionary words.

// Note that the same word in the dictionary may be reused multiple times in the segmentation.
//T: O(n^2) S: O(n) 
var wordBreak = function(s, wordDict) {
    let tab = new Array(s.length + 1).fill(false)
    tab[0] = true
    
    for (let i = 0; i < tab.length -1; i++){
        if (tab[i] === false) continue
        for (let j = i + 1; j < tab.length; j++){
            let word = s.slice(i, j)
            if (wordDict.includes(word))
            {
                tab[j] = true; 
            }
        }
    }
    
    return tab[tab.length - 1]
};

console.log(wordBreak("leetcode", ["leet","code"]))