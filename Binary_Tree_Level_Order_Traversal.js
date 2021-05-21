// Question : Binary Tree Level Order Traversal

// Given the root of a binary tree, return the level order traversal of its nodes' values. (i.e., from left to right, level by level).

// Example 1:

// Input: root = [3,9,20,null,null,15,7]
// Output: [[3],[9,20],[15,7]]
// Example 2:

// Input: root = [1]
// Output: [[1]]
// Example 3:

// Input: root = []
// Output: []
 

// Constraints:

// The number of nodes in the tree is in the range [0, 2000].
// -1000 <= Node.val <= 1000

// Solution:

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function(root) {
    let result = [];
    
    parseTree(root, 0, result);
    
    return result;
};

const parseTree = (root, index, result) => {
    if(root){
        if(result[index]){
            result[index].push(root.val)
        }
        else{
            result[index] = [root.val];
        }
        
        if(root.left){
            parseTree(root.left, index+1, result);
        }
        
        if(root.right){
            parseTree(root.right, index+1, result);
        }
        
    }
}