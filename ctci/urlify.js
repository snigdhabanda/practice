//Replace all spaces in a string with %20, given the true length of the string and space in the string 
//('Mr John Smith    ', 13), 'Mr%20John%20Smith'
//shift letters right in an array 
var urlify = function(str, len){
    let chars = str.split("")
    let i = 0; 
    let count = 1; 
    while (i < chars.length){
        if (chars[i] === " "){
           
            for (let j = len + 2; j > i + 2; j--){
                console.log(chars, chars[j], j, str[j - 2])
                chars[j] = str[(j- 2)*count]
            }
            
            chars[i] = "%"
            chars[i+1] = "2"
            chars[i + 2] = "0" 
            count += 1
            len +=2 
            
        }
        i++
    }
    return chars.join("")
    
}

console.log(urlify('Mr John Smith    ', 13))