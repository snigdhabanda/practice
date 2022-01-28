function breadthFirstSearch(startingNode, targetVal) {

    let queue = [startingNode]
    let visited = {}
    while (queue.length){
        let curr = queue.shift()
        if (curr.val === targetVal) return curr.val 
        if (!visited.has(curr)){
            queue.push(...curr.neighbors)
            visited.add(curr)
        }
    }
    return null 
}

module.exports = {
    breadthFirstSearch
};