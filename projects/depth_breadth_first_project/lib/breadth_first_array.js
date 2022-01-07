function breadthFirstArray(root) {
    let visited = []
    let queue = [root]
    while(queue.length){
        let node = queue.shift()

        visited.push(node.val)

        if (node.left) queue.push(root.left)
        if (node.right) queue.push(root.right)
    }
    return visited
}

module.exports = {
    breadthFirstArray
};