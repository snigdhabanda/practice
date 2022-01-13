var validPath = function(n, edges, start, end) {
    //[[0,1],[1,2],[2,0]]
    //create a hashmap 
    let hash = {}
    //iterate over edges 
    for (let i = 0; i < edges.length; i++){
        let first = edges[i][0]
        let second = edges[i][1]
            //if edge[i] not in map, add it
            if (!(first in hash)){
                hash[first] = [second]
            }
            //add edge[i+1] to that array (neighbors)
            else{
                hash[first].push(second)
            }
        //repeat last two steps for edge[i+1] --> {0: [1, 2], 1: [0, 2],    2: [0, 1]}
            if (!(second in hash)){
                hash[second] = [first]
            }
            else{
                hash[second].push(first)
            }
    }
    console.log(hash)
    //queue = [start]
    let queue = [start]
    if (!(start in hash)) return false
    
    //visited = new Set 
    let visited = new Set()
    
    //while queue.length
    while (queue.length){
        //pop off val from queue 
        let curr = queue.shift()
        //return true if value === end 
        if (curr === end) return true
        
        //if val not in visited 
        if (!visited.has(curr)){
            visited.add(curr)
            //push the neighbors (map[start]) onto the queue
            queue.push(...hash[curr])
        }
        
    }
    return false 
}

let n = 3
let edges = [[0,1],[1,2],[2,0]]
let start = 0
let end = 2
console.log(validPath(n, edges, start, end))
