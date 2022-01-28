var cloneGraph = function(node) {
    //pass in current node to dfs
    //clone node 
    //iterate through the original node's neighbors
        //run a dfs on each neighbor 
        //if you've never seen the neighbor of this neighbor 
        //keep traversing 
        //else return the node (this means that you've already seen current node's neighbor)
    //the data structure you use to track visited nodes should be a map because you need to return the actual node 
    if (!node) return null
    
    let visited = new Map()
    
    var dfs = function(node){
         //if !node.neighbors.length return node 
        if (visited.has(node.val)) return visited.get(node.val); 
        
        let cloned = new Node(node.val, [])
        visited.set(cloned.val, cloned)
        
        for (let neighbor of node.neighbors){
            cloned.neighbors.push(dfs(neighbor))
        }
        
        return cloned 
        

    }
    
    return dfs(node)
    

};