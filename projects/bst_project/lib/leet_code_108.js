// View the full problem and run the test cases at:
//  https://leetcode.com/problems/convert-sorted-array-to-binary-search-tree/

const { TreeNode } = require("./bst")


function sortedArrayToBST(nums) {
    if (!nums.length) return null 
    let mid = Math.floor(nums.length / 2)
    
    let root = new TreeNode(nums[mid])
    let left = sortedArrayToBST(nums.slice(0, mid))
    let right = sortedArrayToBST(nums.slice(mid + 1))

    root.left = left
    root.right = right 


    return root; 

}