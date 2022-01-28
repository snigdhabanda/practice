var kthSmallest = function(root, k) {
    //inorder traversal
     
    //return element when count === k 
    
    count = 0
    let values = []
    var traverse = function(root){
        if (root === null) return
       
        
        traverse(root.left)
        values.push(root.val)
        traverse(root.right)
       
    }
    
    traverse(root)
    return values[k - 1]
    
};