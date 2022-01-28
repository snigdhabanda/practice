var findSmallestSetOfVertices = function(n, edges) {
       
    //build an adjacency matrix 
        //traverse array 
        
        let startpoints = []
        let endpoints = new Set() 
        for (let [a, b] of edges){
            if (!startpoints.includes(a)) startpoints.push(a)
            endpoints.add(b)
        }
    
        let res = [] 
        for (let node of startpoints) {
        
            if (!endpoints.has(node)) res.push(node)
    
        }
    
    return res; 	

};