//SPIRALMATRIX
//Given an m x n matrix, return all elements of the matrix in spiral order.
//O(m*n) time; O(1) space complexity
var spiralOrder = function(matrix) {
    let start_row = 0;
     let start_col = 0;
     let end_row = matrix.length - 1 
     let end_col = matrix[0].length - 1
     let newArr = []
     while(newArr.length < matrix[0].length * matrix.length){
         for (let i = start_col; i <= end_col; i ++){
             newArr.push(matrix[start_row][i])
         }
         
         for(let i = start_row + 1; i <= end_row; i ++){
             newArr.push(matrix[i][end_col])
         }
         
         if (start_row !== end_row){
             for (let i = end_col - 1; i >= start_col; i--){
                 newArr.push(matrix[end_row][i])
             }
         }
        
         if (start_col !== end_col){
             for (let i = end_row - 1; i > start_row; i-- ){
                 newArr.push(matrix[i][start_col])
             }
         }
         start_row += 1
         end_col -= 1
         start_col += 1
         end_row -= 1
     }
     return newArr
     
     
     
 };
