
//nonDP: time: O(n^3); space: O(1)
var countSubstrings = function(s) {
    let count = 0; 
    var helper = function(lo, hi, s){
        while (s[lo] === s[hi] && lo >= 0 && hi <= s.length){
            lo -= 1
            hi += 1
            count += 1
        }
    }
    for (let i = 0; i < s.length; i++){
        helper(i, i, s)
        helper(i, i+1, s)
    }
    return count 
}

//DP: time: O(N^2); space:(O(n^2))
// var countSubstrings = function(s) {
//     const n = s.length;
//     const dp = [...Array(n)].map(() => Array(n).fill(false));
//     let count = 0;
    
//     // Base case: single letter substrings
//     for(let i = 0; i < n; i++) {
//         dp[i][i] = true;
//         count++
//     }
    
//     // Base case: double letter substrings
//     for(let i = 0; i < n-1; i++) {
//         dp[i][i+1] = (s[i] === s[i+1]);
//         dp[i][i+1] && count++;
//     }
    
//     // substrings longer than 2 chars
//     for(let len = 3; len <= n; len++) {
//         let start = 0, end = start+len-1;
        
//         while(end < n) {
//             dp[start][end] = (dp[start+1][end-1] && s[start] === s[end]);
//             dp[start][end] && count++;
//             start++; end++;
//         }
//     }
//     return count;
// };