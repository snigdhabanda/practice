var buildTree = function(preorder, inorder) {
    //pop preorder and push into array
    //pop all values until you reach root in inorder and push into left array 
    //pop all values till end from inorder into right 
    if (preorder.length === 0 && inorder.length === 0) return null 
    let rootVal = preorder[0]
    let root = new TreeNode(rootVal)

    let index = inorder.indexOf(rootVal)
    let inorderLeft = inorder.slice(0, index)
    let inorderRight = inorder.slice(index + 1)

    let preorderLeft = preorder.filter(val => inorderLeft.includes(val))
    let preorderRight = preorder.filter(val => inorderRight.includes(val))

    let leftTree = buildTree(preorderLeft, inorderLeft)
    let rightTree = buildTree(preorderRight, inorderRight)

    root.left = leftTree
    root.right = rightTree 
    
    return root
};