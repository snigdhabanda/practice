// You are given an integer array prices where prices[i] is the price of a given stock on the ith day.

// On each day, you may decide to buy and/or sell the stock. You can only hold at most one share of the stock at any time. However, you can buy it then immediately sell it on the same day.

// Find and return the maximum profit you can achieve.

var maxProfit = function(prices) {
    let peak = prices[0]
    let valley = prices[0]
    let max = 0
    let i = 0
    // [7,1,0,3,6,4]
    //key here is to draw a diagram! 
    //simple formula: buy when low; sell when high (valleys & peaks)
    //sum up profits from these peaks & valleys 
    
    while (i < prices.length - 1){
       
       while (prices[i] >= prices[i + 1] && i < prices.length - 1){
           i += 1
       }
        valley = prices[i]
       while (prices[i] <= prices[i + 1] && i < prices.length - 1){
           i += 1
       } 
        peak = prices[i]
        max += peak - valley
    }
     return max 
 };