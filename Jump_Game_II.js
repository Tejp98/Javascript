// Question : Jump Game II

// Given an array of non-negative integers nums, you are initially positioned at the first index of the array.

// Each element in the array represents your maximum jump length at that position.

// Your goal is to reach the last index in the minimum number of jumps.

// You can assume that you can always reach the last index.

 

// Example 1:

// Input: nums = [2,3,1,1,4]
// Output: 2
// Explanation: The minimum number of jumps to reach the last index is 2. Jump 1 step from index 0 to 1, then 3 steps to the last index.
// Example 2:

// Input: nums = [2,3,0,1,4]
// Output: 2
 

// Constraints:

// 1 <= nums.length <= 1000
// 0 <= nums[i] <= 105

// Solution:

/**
 * @param {number[]} nums
 * @return {number}
 */
var jump = function(nums) {
    let dp = Array(nums.length).fill(-1);
    let result = Number.MAX_SAFE_INTEGER;
    
    dp[nums.length-1] = 0;
    
    for(let i=nums.length-2;i>=0;i--){
        
        let jumps = Number.MAX_SAFE_INTEGER;
        
        for(let j=nums[i];j>0;j--){
            if(i+j >= nums.length-1){
                jumps = 0;
                break;
            }
            else if(dp[j+i] !== -1){
                jumps = Math.min(jumps, dp[i+j])
            }
        }
        
        dp[i] = jumps+1;
    }
    return dp[0];
};