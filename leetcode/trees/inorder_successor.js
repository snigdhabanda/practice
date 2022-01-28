var inorderSuccessor = function(root, p) {
    
    let values = [] 
   
    var traverse = function(root){
        if (root === null) return; 
        
        traverse(root.left)
        values.push(root)
        traverse(root.right)
    }
    traverse(root)
    
    for (let i = 0; i < values.length; i++){
        if (values[i].val === p.val){
            return values[i + 1]
        }
    }
    
    return null 
    
    
};