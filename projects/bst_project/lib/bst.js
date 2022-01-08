class TreeNode {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}


class BST {

   insert(root, val){ 

    if (!this.root){
        let newNode = new TreeNode(val)
        this.root = newNode
    }
    else if(val < this.root.val){
        if (!this.root.left){
            let newNode = new TreeNode(val)
            this.root.left = newNode
        }
        else{
            this.insert(this.root.left, val)
        }
    }
    else if (val > this.root){
        if (!this.root.right){
            let newNode = new TreeNode(val)
            this.root.right = newNode
        }
        else{
            this.insert(this.root.right, val)
        }
    }
    return this.root 
   }
}

module.exports = {
    TreeNode,
    BST
};