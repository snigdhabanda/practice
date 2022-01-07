const { TreeNode } = require('./tree_node.js');

// function treeSum(root) {
//     if (!root) return 0 
//    let sum = 0 
//     let queue = [root]
//     while(queue.length){
//         let node = queue.shift()
//         sum += node.val

//         if (node.left) queue.push(node.left)
//         if (node.right) queue.push(node.right)
//     }
//     return sum 
// }

//dfs preorder inorder or post order all work (order doesn't matter for sum!)
function treeSum(root) {
    if (!root) return 0
    return  treeSum(root.left) + treeSum(root.right) + root.val
}


let a = new TreeNode(1)
let b = new TreeNode(2)
let c = new TreeNode(3)
let d = new TreeNode(4)
let e = new TreeNode(5)
let f = new TreeNode(6)

a.left = b 
b.left = c
a.right = d
c.left = e

console.log(treeSum(a))
module.exports = {
    treeSum
};