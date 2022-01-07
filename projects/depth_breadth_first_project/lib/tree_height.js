const { TreeNode } = require('./tree_node.js');

// function treeHeight(root) {
//     if (!root) return -1
//     let queue = [root]
   
//     let totalEdges = 0
//     while (queue.length){
//         let node = queue.shift()
        
//         if (node.left) queue.push(node.left)
//         if (node.right) queue.push(node.right)

//         if (node.left || node.right) totalEdges += 1
//     }

//     return totalEdges - 1
// }

//recursive 

function treeHeight(root) {
    if (!root) return -1 
    console.log(Math.max(treeHeight(root.left), treeHeight(root.right)))
    return 1 + Math.max(treeHeight(root.left), treeHeight(root.right))
}

let a = new TreeNode("a")
let b = new TreeNode("b")
let c = new TreeNode("c")
let d = new TreeNode("d")
let e = new TreeNode("e")
let f = new TreeNode("f")

a.left = b 
b.left = c
a.right = d
c.left = e

console.log(treeHeight(a))


module.exports = {
    treeHeight
};