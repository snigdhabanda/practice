//should return the max value 
function maxValue(node, visited=new Set()) {
    //need to return -infinity if you've see a value because it will be compared to other numbers
    if (visited.has(node)) return -Infinity; 
    
    visited.add(node)

    //this stores the results of the subgraphs 
    let maxNeighbors = node.neighbors.map(neighbor => maxValue(node, visited))
    //this return the result of comparing the current node to the subgraphs 
    return Math.max(node.val, ...maxNeighbors)

    


}

module.exports = {
    maxValue
};