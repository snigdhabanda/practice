var numIslands = function(grid) {
    //iterate through grid 
    //currPos = grid[row][col]
    //store(row + col in visited set)
    //pass currPos to a recursive function 
    //check 4 dirs adjacent to currentPos 
    //if any of these are a 0 return early 
    //increment islands counter
    
    if (grid.length === 0 || grid === null) return 0 
    let visited = new Set()
    let islands = 0 
    
    var traverse = function(row, col){
        
        // if (visited.has(pos[0] + pos[1])) 
        if ( row < 0 || row >= grid.length || col < 0 || col >= grid[0].length || grid[row][col] === "0" ) return; 
        
        grid[row][col] = "0"
        
        
        
        traverse(row, col - 1)
        traverse(row, col + 1)
        traverse(row - 1, col)
        traverse(row + 1, col)
        
    }
    
   
    for (let row = 0; row < grid.length; row++){
        for (let col = 0; col < grid[0].length; col++){
            
            if (grid[row][col] === "1" && !visited.has(row + col)){
                islands += 1
                traverse(row, col)
            }            
        }
        
    }
    return islands; 
    
};