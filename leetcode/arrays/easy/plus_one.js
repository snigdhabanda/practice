var plusOne = function(digits) {
    let i = digits.length - 1
    while (i >= 0){
        if (digits[i] === 9){
            digits[i] = 0
            if (i === 0) digits.unshift(1)
            i -= 1
            
        }
        else{
            digits[i] += 1
            break; 
        }
    }
    
    return digits 
    
};