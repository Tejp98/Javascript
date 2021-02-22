// Question : Jump Game

// Given an array of non-negative integers nums, you are initially positioned at the first index of the array.

// Each element in the array represents your maximum jump length at that position.

// Determine if you are able to reach the last index.

 

// Example 1:

// Input: nums = [2,3,1,1,4]
// Output: true
// Explanation: Jump 1 step from index 0 to 1, then 3 steps to the last index.
// Example 2:

// Input: nums = [3,2,1,0,4]
// Output: false
// Explanation: You will always arrive at index 3 no matter what. Its maximum jump length is 0, which makes it impossible to reach the last index.
 

// Constraints:

// 1 <= nums.length <= 3 * 104
// 0 <= nums[i] <= 105

// Solution:
/**
 * @param {number[]} nums
 * @return {boolean}
 */
 
const status = {
    notCheckedYet : -1,
    checkedCannotBeReached: 0,
}

let canReachArray = []
var canJump = function(nums) {
    canReachArray = Array(nums.length).fill(status.notCheckedYet);
    return recursion(nums, 0 )
};

const recursion = (array, currentIndex) => {
    
     if(
        (currentIndex > array.length-1) 
            || 
            canReachArray[currentIndex] === status.checkedCannotBeReached
    ){
        return false;
    }
    else if(currentIndex === array.length-1){
        return true;
    }
    
    let i = array[currentIndex];
    while(i>0){
        if(recursion(array, currentIndex+i)){
            return true;
        }
        i--;
    }
    canReachArray[currentIndex] = status.checkedCannotBeReached;
    return false;
}