function depthFirstSearch(root, targetVal) {
    let stack = [root] 

    while (stack.length){
        let node = stack.shift()
        if (node.val === targetVal) return node.val 
        
        if (node.left) stack.unshift(node.left)
        if (node.right) stack.unshift(node.right)

        
    }

    return null; 
}



module.exports = {
    depthFirstSearch
};