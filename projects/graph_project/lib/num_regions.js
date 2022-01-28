function numRegions(graph) {
    //created a visited set
    let visited = new Set()
    let count = 0 
    //run a dfs on that graph(graph, visited, node) 
    var depthFirstSearch = function(graph, visited, node ){
        //dfs returns false when your node is already in visited
        if (visited.has(node)) return false 
        
        
        visited.add(node)
        console.log(node, visited)
        graph[node].forEach(neighbor => depthFirstSearch(graph, visited, neighbor))
        return true 
    }
    
    
    //iterate through graph
    for (node in graph){
        let boolean = (depthFirstSearch(graph, visited, node )) 
        console.log(boolean)
        if (boolean) count += 1

    }
    return count; 
    
}

let graph1 = {
    'a': ['b'],
    'b': ['a'],
    'c': ['d'],
    'd': ['e', 'c'],
    'e': ['d'],
};
console.log(numRegions(graph1))

module.exports = {
    numRegions
};