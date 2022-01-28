var allPathsSourceTarget = function(graph) {
    //backtracking solution
    //run a dfs on the first index of the graph array 
    //dfs takes in a root, a path array, and a larger array 
    //iterate through values in the graph's subarray
        //push your current value into 
    //base cases:
        //if your root is equal to the n-1 val in graph
            //add your root value to an array and return 
        //if graph[root] = [] or !graph[root]
    //pop this previous value from the array 
    
    if (!graph) return []
    let ans = [] 
    
    
    
    var dfs = function(path, ans){
        let root = path[path.length - 1]
        
        if (root === graph.length - 1){
            ans.push([...path])
            return; 
        }
        if (!graph[root] || graph[root] === []) return; 
        
        for (let i = 0; i < graph[root].length; i++){
            path.push(graph[root][i])
            dfs(path, ans)
            path.pop()
        }
        
    }
    dfs([0], ans)
    return ans; 

};