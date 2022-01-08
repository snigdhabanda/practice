// View the full problem and run the test cases at:
//  https://leetcode.com/problems/balanced-binary-tree/


var isBalanced = function(root) {
    if (!root) return true 
    
    
    var getMaxHeight = function(root){
        //get the height of the largest tree
        if (!root) return -1 
        
        return 1 +  Math.max(getMaxHeight(root.left), getMaxHeight(root.right))
    }
    //gets result of first two nodes
    let heightDiff = Math.abs(getMaxHeight(root.left) - getMaxHeight(root.right)) <= 1
    //get result of subtrees 
    return heightDiff && isBalanced(root.left) && isBalanced(root.right)
    
};