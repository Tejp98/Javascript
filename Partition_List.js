// Question : Partition List

// Given the head of a linked list and a value x, partition it such that all nodes less than x come before nodes greater than or equal to x.

// You should preserve the original relative order of the nodes in each of the two partitions.


// Example 1:


// Input: head = [1,4,3,2,5,2], x = 3
// Output: [1,2,2,4,3,5]
// Example 2:

// Input: head = [2,1], x = 2
// Output: [1,2]
 

// Constraints:

// The number of nodes in the list is in the range [0, 200].
// -100 <= Node.val <= 100
// -200 <= x <= 200


// Solution:

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} x
 * @return {ListNode}
 */
var partition = function(head, x) {
    let lessThanNumbers = [];
    let greaterThanNumbers = [];
    let result;
    
    while(head !== null){
        
        if(head.val < x){
            lessThanNumbers.push(head.val);
        }
        else{
            greaterThanNumbers.push(head.val);
        }
        
        head = head.next;
    }
    
    for(let i=greaterThanNumbers.length-1;i>=0;i--){
        result = new ListNode(greaterThanNumbers[i], result);
    }
    
    for(let i=lessThanNumbers.length-1; i>=0; i--){
        result = new ListNode(lessThanNumbers[i], result);
    }
    
    
    
    return result || null;
};