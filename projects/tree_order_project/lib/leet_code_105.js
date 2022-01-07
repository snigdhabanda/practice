// View the full problem and run the test cases at:
//  https://leetcode.com/problems/construct-binary-tree-from-preorder-and-inorder-traversal/

const { TreeNode } = require('./tree_node.js');

//preorder has the pattern of self all left all right 
//inorder has the pattern of all left self right 
//the root will always be the first val of preorder
//create a treenode with the first val 
//grab all the values until you reach that root val in the inorder array; add these to the leftInorder
//repeat for the right and set this to rightInorder
//preorder: filter everything that is in the left and right and create a leftPre and rightPre array
//repeat with recursion (base case: length of either array = 0) with leftPre and leftIn and vice versa
//set the root right and root left to be the rest of recursion this will be null when it reaches the base case and will built the tree upwards
function buildTree(preorder, inorder) {
    if (preorder.length === 0 && inorder.length === 0) return null 
    let rootVal = preorder[0]
    let root = new TreeNode(rootVal)

    let index = inorder.indexOf(rootVal)
    let inorderLeft = inorder.slice(0, index)
    let inorderRight = inorder.slice(index + 1)

    let preorderLeft = preorder.filter((val) => inorderLeft.includes(val))
    let preorderRight = preorder.filter((val) => inorderRight.includes(val))

    let leftTree = buildTree(preorderLeft, inorderLeft)
    let rightTree = buildTree(preorderRight, inorderRight)

    root.left = leftTree
    root.right = rightTree 
    
    return root 
}

preorder = [3,9,20,15,7]
inorder = [9,3,15,20,7]
console.log(buildTree(preorder, inorder))
