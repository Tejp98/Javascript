// Question : Average of Levels in Binary Tree

// Given a non-empty binary tree, return the average value of the nodes on each level in the form of an array.
// Example 1:
// Input:
//     3
//    / \
//   9  20
//     /  \
//    15   7
// Output: [3, 14.5, 11]
// Explanation:
// The average value of nodes on level 0 is 3,  on level 1 is 14.5, and on level 2 is 11. Hence return [3, 14.5, 11].
// Note:
// The range of node's value is in the range of 32-bit signed integer.

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
 * @return {number[]}
 */
var averageOfLevels = function(root) {
    let result = [];
    let map = new Map();
    recursion(0, root, map);
    for(let [key, value] of map){
        result.push(value[1]/value[0])
    }
    return result;
};

const recursion = (level, root, map) => {
    if(!root){
        return;
    }
    if(map.get(level)){
        const tempVal = map.get(level);
        map.set(level, [tempVal[0]+1, tempVal[1]+root.val]);
    }
    else{
        map.set(level, [1, root.val])
    }
    recursion(level+1, root.left, map);
    recursion(level+1, root.right, map)
    return;
}