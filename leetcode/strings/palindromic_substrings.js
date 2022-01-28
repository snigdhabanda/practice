var countSubstrings = function(s) {
    //loop over the string at count
        //loop over index at count + 1
            //check if string = string.reverse
        //increment the count
    
    let count = 0 
    let tracker = new Array(s.length).fill().map(() => new Array(s.length).fill().map(() => false))
    for (let i = 0; i < s.length; i++){
        tracker[i][i] = true; 
    }
    for (let i = 0; i < s.length - 1; i++){
        if (s[i] === s[i + 1]) tracker[i][i+1] = true; 
    }
    
    for (let i = 2; i < s.length; i ++){
        let start = 0
        let end = i 
        
        while (end < s.length){
            tracker[start][end] =  tracker[start + 1][end - 1] && s[start] === s[end]
            start += 1
            end += 1
        }
    }
    
    console.log(tracker); 
    
    for (let arr of tracker){
        count += arr.reduce((a, b) => a + b)
    }
    return count
   
}