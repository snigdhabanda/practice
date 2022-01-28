var removeDuplicates = function(s, k) {
    if (k > s.length) return s
    
    //build stack: [[char, count]]
    //iterate over string, and check if val == prev val in stack
    //if yes, then increment count
        //if count === k 
    //else push char and count of 1 
    //at the end build resulting string by using the char counts and .repeat()
    //this run on in O(n) time! super neat 
        //dfs but iterative 
    
    let stack = [] 
    
    for (let char of s){
        if (stack.length && char === stack[stack.length - 1][0]){
            stack[stack.length - 1][1] += 1
            if (stack[stack.length - 1][1] === k){
                stack.pop()
            }
        }
        else{
            stack.push([char, 1])
        }
    }
    
    let res = ""
    for (let [char,count] of stack){
        res += char.repeat(count)
    }
        
    return res; 
   
    
};