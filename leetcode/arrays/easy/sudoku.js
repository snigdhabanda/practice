var isValidSudoku = function(board) {
    //initialize 3 list of 9 sets for rows, cols, box 
    //each set's index in the list repesents the row col or box it represents
    
    let rows = new Array(board.length).fill().map(() => new Set())
    let cols = new Array(board.length).fill().map(() => new Set())
    let grid = new Array(board.length).fill().map(() => new Set())
    
    for (let row = 0; row < board.length; row++){
        for (let col = 0; col < board[0].length; col++){
            console.log(cols)
            let val = board[row][col]
            if (val === ".") continue; 
            
            if (rows[row].has(val)) return false 
            else (rows[row].add(val))
                
            if (cols[col].has(val)) return false 
            else (cols[col].add(val))
                
            if (grid[Math.floor(col / 3) + Math.floor(row / 3)].has(val)) return false 
            else (grid[Math.floor(col / 3) + Math.floor(row / 3)].add(val))
        }
    }
    return true; 
        
    
    
    
};
console.log(isValidSudoku([["5","3",".",".","7",".",".",".","."],["6",".",".","1","9","5",".",".","."],[".","9","8",".",".",".",".","6","."],["8",".",".",".","6",".",".",".","3"],["4",".",".","8",".","3",".",".","1"],["7",".",".",".","2",".",".",".","6"],[".","6",".",".",".",".","2","8","."],[".",".",".","4","1","9",".",".","5"],[".",".",".",".","8",".",".","7","9"]]))