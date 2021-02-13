// Question: Find First and Last Position of Element in Sorted Array


// Given an array of integers nums sorted in ascending order, find the starting and ending position of a given target value.

// If target is not found in the array, return [-1, -1].

// Follow up: Could you write an algorithm with O(log n) runtime complexity?

 

// Example 1:

// Input: nums = [5,7,7,8,8,10], target = 8
// Output: [3,4]
// Example 2:

// Input: nums = [5,7,7,8,8,10], target = 6
// Output: [-1,-1]
// Example 3:

// Input: nums = [], target = 0
// Output: [-1,-1]
 

// Constraints:

// 0 <= nums.length <= 105
// -109 <= nums[i] <= 109
// nums is a non-decreasing array.
// -109 <= target <= 109



// Solution 1:

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {
    
    let result = [-1, -1];
    
    if(nums.length <= 1){
        if(nums[0] ==target){
            return [0,0];
        }
        return result
    }
    
    let firstElement = 0;
    let lastElement = nums.length;
    
    let elementIndex = -1;
    
    while(firstElement <= lastElement){
        const middle = parseInt((firstElement+lastElement)/2);
        
        if(nums[middle] == target){
            elementIndex = middle;
            break;
        }
        else if(nums[middle] > target){
            lastElement = middle-1;
        }
        else{
            firstElement = middle+1;
        }
    }
    
    if(elementIndex != -1){
        
        result = [elementIndex, elementIndex];
        let temporaryForward = elementIndex;
        let temporaryBackward = elementIndex;
        
        while(temporaryBackward > 0){
            if(nums[temporaryBackward-1] == target){
                result[0] = temporaryBackward-1;
            }
            else{
                break;
            }
            temporaryBackward--;
        }
        
        while(temporaryForward < nums.length-1){
            if(nums[temporaryForward+1] == target){
                result[1] = temporaryForward+1;
            }
            else{
                break;
            }
            temporaryForward++;
        }
    }
    return result;
};



// Solution 2:


/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {
    
    let result = [-1, -1];
    
    if(nums.length <= 1){
        if(nums[0] ==target){
            return [0,0];
        }
        return result
    }

    for(let i=0;i<nums.length;i++){
        if(nums[i] == target){
            if(result[0] ==-1){
                result= [i,i];
            }
            else{
                result = [result[0], i];
            }
        }
    }
    return result;
    
};



