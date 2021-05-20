// Question : Minimum Moves to Equal Array Elements II

// Given an integer array nums of size n, return the minimum number of moves required to make all array elements equal.

// In one move, you can increment or decrement an element of the array by 1.

// Example 1:

// Input: nums = [1,2,3]
// Output: 2
// Explanation:
// Only two moves are needed (remember each move increments or decrements one element):
// [1,2,3]  =>  [2,2,3]  =>  [2,2,2]
// Example 2:

// Input: nums = [1,10,2,9]
// Output: 16
 

// Constraints:

// n == nums.length
// 1 <= nums.length <= 105
// -109 <= nums[i] <= 109

// Solution:

/**
 * @param {number[]} nums
 * @return {number}
 */
var minMoves2 = function(nums) {
     nums.sort((a,b)=>a-b);
    
    let median;
    let result = 0;
    
    if(nums.length%2 === 0){
        median = parseInt((nums[(nums.length/2)] + nums[(nums.length/2)-1])/2);
    }
    else{
        median = nums[parseInt(nums.length/2)];
    }
    
    for(let i=0;i<nums.length;i++){
        result = result + Math.abs(nums[i] - median);
    }
    
    return result;
};