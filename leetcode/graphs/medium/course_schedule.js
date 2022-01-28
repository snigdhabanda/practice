var canFinish = function(numCourses, prerequisites){
    //build an adjacency list 
    let adjList = {}
    let visited = new Set()
    let seen = new Set()
    
    for (let [a, b] of prerequisites){
        if (!adjList[b]){
            adjList[b] = [a]
        }
        else{
            adjList[b].push(a)
        }
    }
        
    
    var dfs = function(node){
        //this is to prevent traversing a sequence of nodes you've already explored 
        if (seen.has(node)) return true 
        //check if this is a visited node 
            //yes --> return false 
        if (visited.has(node)) return false 
        
        //add current node to set 
        visited.add(node)
        
        //traverse over neighbors of node 
        if (adjList[node]){
            for (let neighbor of adjList[node]){
                //dfs call to each of its neighbors 
                if (!dfs(neighbor)) return false 

            }
        }
        //this is the key to backtracking
        //{course: [all prereqs]}
        //you want to traverse through all neighbors of the prereqs
        //but you want to start afresh on the next course in the map  
        //SO, use backtracking when you want to fully explore all connected nodes  
        visited.delete(node)
        seen.add(node)
        return true; 
    }
    
    
    
    //make a dfs call traversing over values in adj matrix 
    for (let course in adjList){
        //if this val hasn't already been added to visited 
        
        if (!visited.has(course)){
            //if a dfs call is false break 
            if (!dfs(course)) return false; 
        }
        
    }
    
    //length of set === numCourses && dfs call must be true
    return true; 
    
     
};
