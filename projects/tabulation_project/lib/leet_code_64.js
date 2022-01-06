// Work through this problem on https://leetcode.com/problems/minimum-path-sum/ and use the specs given there.
// Feel free to use this file for scratch work.

//using dp: create a table dup of grid of infinity values
//iterate over each of the rows from left to right 
//set the neighbor to the right and the neighbor down to previous value in the table + curr value in the grid (you're essentially just summing the values)
//on the second pass of a row (that has already been set with sums), the current sum may be less than the sum it is about to be set to (this will happen for values that are not at the edges) --> you must do min(curr value, and new sum) (on the first pass, all values are infinity so values will be reset)
//return the bottom most right value in the table 
//you have to add the conditional instead of just the for loops to be col.length - 1 because you still want to iterate over the value and change the next right/down value
 //O(m * n) time; space: O(m*n)
var minPathSum = function(grid) {
    let table = new Array(grid.length).fill().map(() => new Array(grid[0].length).fill(Infinity))
    let col = grid.length
    let row = grid[0].length 
    table[0][0] = grid[0][0]
    
    for (let i = 0; i < col; i++){
        for (let j = 0; j < row; j++){
           
            //right value
            if (j < row - 1){
            table[i][j + 1] = Math.min(table[i][j+1], grid[i][j+1] + table[i][j])
            }
            {
            //down value
            if (i < col - 1){
            table[i+1][j] = Math.min(table[i+1][j], grid[i+1][j] + table[i][j])
            
            }
        }
    }
    }
    return table[col - 1][row - 1]
};