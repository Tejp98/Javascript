// Question : Remove Nth Node From End of List

// Given the head of a linked list, remove the nth node from the end of the list and return its head. 

// Example 1:


// Input: head = [1,2,3,4,5], n = 2
// Output: [1,2,3,5]
// Example 2:

// Input: head = [1], n = 1
// Output: []
// Example 3:

// Input: head = [1,2], n = 1
// Output: [1]
 

// Constraints:

// The number of nodes in the list is sz.
// 1 <= sz <= 30
// 0 <= Node.val <= 100
// 1 <= n <= sz


// First Solution
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
    
    let result = 0;
    let reverseClone = 0;
    
    while(head !== null){
        reverseClone = new ListNode(head.val, reverseClone === 0 ? null : reverseClone);
        head = head.next;
    }
    let i = 1;
    
    while(reverseClone !== null){
        if(i !== n){
            result = new ListNode(reverseClone.val, result === 0 ? null : result);
        }
        reverseClone = reverseClone.next;
        i++
    }
    return (result === 0 ? null : result);
    
};


// Second Solution


/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */

var removeNthFromEnd = function(head, n) {
    return recursion(head, n)[0]
};

const recursion = (head, n) => {
    
    if(head.next === null){
        if(n === 1){
            return [null, 1]
        }
        return [head, 1];
    }
    let array = recursion(head.next, n);
    console.log(array, array[1]+1 == n, array[1]+1, n)
    if(array[1] == n-1){
        return [array[0], array[1]+1];
    }
    else{
        return[ new ListNode(head.val, array[0]), array[1]+1];
    }
}