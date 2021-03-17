// Question : Swapping Nodes in a Linked List

// You are given the head of a linked list, and an integer k.

// Return the head of the linked list after swapping the values of the kth node from the beginning and the kth node from the end (the list is 1-indexed).

 

// Example 1:


// Input: head = [1,2,3,4,5], k = 2
// Output: [1,4,3,2,5]
// Example 2:

// Input: head = [7,9,6,6,7,8,3,0,9,5], k = 5
// Output: [7,9,6,6,8,7,3,0,9,5]
// Example 3:

// Input: head = [1], k = 1
// Output: [1]
// Example 4:

// Input: head = [1,2], k = 1
// Output: [2,1]
// Example 5:

// Input: head = [1,2,3], k = 2
// Output: [1,2,3]
 

// Constraints:

// The number of nodes in the list is n.
// 1 <= k <= n <= 105
// 0 <= Node.val <= 100

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
 * @param {number} k
 * @return {ListNode}
 */
var swapNodes = function(head, k) {
    let length = 0;
    let array = [];
    let KthFromFront = -1;
    while(head !== null){
        if(length === k-1){
            array.push(-1);
            KthFromFront = head.val;
        }
        else{
            array.push(head.val);
        }
        length = length+1;
        head = head.next;
    }
    let KthFromBack = array[array.length-k];
    array[array.length-k] = -2
    let index = array.length-1;
    while(index >= 0){
        let currentVal = array[index];
        let newTempListNode;
        if(currentVal === -2){
            newTempListNode = new ListNode(KthFromFront, head);
        }
        else if(currentVal === -1){
            newTempListNode = new ListNode(KthFromBack, head);
        }
        else{
            newTempListNode = new ListNode(currentVal, head);
        }
        index = index-1;
        head = newTempListNode;
    }
    return head;
};