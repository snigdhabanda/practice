var setZeroes = function(matrix) {
    let zeroRows = new Set()
    let zeroCols = new Set()
    //make pass over matrix
    for (let row = 0; row < matrix.length; row++){
        for (let col = 0; col < matrix[0].length; col++){
            //i, j: if any elements in sub are a 0, mark the first element of that array 0 
            if (matrix[row][col] === 0){
                //add j position to a set 
                zeroCols.add(col)
                zeroRows.add(row)
            }
        }
    }
    //second pass over  matrix 
    for (let row = 0; row < matrix.length; row++){
        for (let col = 0; col < matrix[0].length; col++){
            //compare with modified array 
            //if j is in set, then change this number to 0 
            //if first element 0, then change number to 0 
            if (zeroRows.has(row) || zeroCols.has(col)){
                matrix[row][col] = 0 
            }
        }
    }
    
    
    return matrix 
   
};

console.log(setZeroes([[0,1,2,0],[3,4,5,2],[1,3,1,5]]))