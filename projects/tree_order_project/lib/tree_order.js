const { TreeNode } = require('./tree_node.js');

function inOrderArray(root) {
    if (!root) return []

    
    return [...inOrderArray(root.left),
    root.val,
    ...inOrderArray(root.right)]

    
}






function postOrderArray(root) {
    if (!root) return []

    
    return [...postOrderArray(root.left),
    ...postOrderArray(root.right), root.val]
}

let root = new TreeNode(3)
let left1 = new TreeNode(5)
let right1 = new TreeNode(6)
root.left = left1 
root.right = right1

console.log(postOrderArray(root))


module.exports = {
    inOrderArray,
    postOrderArray
};