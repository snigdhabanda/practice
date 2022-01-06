// Work through this problem on https://leetcode.com/problems/coin-change-2/ and use the specs given there.
// Feel free to use this file for scratch work.

//time: O(n); space: O(amount)
var change = function(amount, coins) {
    let memo = Array(amount + 1).fill(0)
    memo[0] = 1
    
    for (let coin of coins){
        for (let i = coin; i < amount + 1; i++){
            memo[i] = memo[i] + memo[i - coin]
        }
        
    }
    
   return memo[amount]; 
};

