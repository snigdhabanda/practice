var connect = function(root){
    //if (!root) return root 
    if (!root) return root 
    let head = root 
    
    let leftMost = root 
    while (leftMost.left){
        //inner loop: (traversal on same level)  
        head = leftMost
        while (head){
            head.left.next = head.right
            if ( head.next){
                head.right.next = head.next.left 
            }
            //root = root.next  
            head = head.next 
        }
        leftMost = leftMost.left 
    }
    return root; 
}
    
