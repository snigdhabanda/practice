class TreeNode {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}


class BST {

   insert(root, val){ 

    if (!root){
        let newNode = new TreeNode(val)
        root = newNode
    }
    else if(val < root.val){
        if (!root.left){
            let newNode = new TreeNode(val)
            root.left = newNode
        }
        else{
            this.insert(val, root.left)
        }
    }
    else if (val > root){
        if (!root.right){
            let newNode = new TreeNode(val)
            root.right = newNode
        }
        else{
            this.insert(root.right, val)
        }
    }
    return this.root 
   }
}

var searchRecur = function(val, root = this.root){
    if (!root) return false 

    if (val < root){
        this.searchRecur(val, root.left)
    }
    else if (val > root.val){
        return this.searchRecur(val, root.right)
    }
    else{
        return root; 
    }
}
module.exports = {
    TreeNode,
    BST
};