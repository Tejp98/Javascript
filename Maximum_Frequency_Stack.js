// Question : Maximum Frequency Stack


// Implement FreqStack, a class which simulates the operation of a stack-like data structure.

// FreqStack has two functions:

// push(int x), which pushes an integer x onto the stack.
// pop(), which removes and returns the most frequent element in the stack.
// If there is a tie for most frequent element, the element closest to the top of the stack is removed and returned.
 

// Example 1:

// Input: 
// ["FreqStack","push","push","push","push","push","push","pop","pop","pop","pop"],
// [[],[5],[7],[5],[7],[4],[5],[],[],[],[]]
// Output: [null,null,null,null,null,null,null,5,7,5,4]
// Explanation:
// After making six .push operations, the stack is [5,7,5,7,4,5] from bottom to top.  Then:

// pop() -> returns 5, as 5 is the most frequent.
// The stack becomes [5,7,5,7,4].

// pop() -> returns 7, as 5 and 7 is the most frequent, but 7 is closest to the top.
// The stack becomes [5,7,5,4].

// pop() -> returns 5.
// The stack becomes [5,7,4].

// pop() -> returns 4.
// The stack becomes [5,7].
 

// Note:

// Calls to FreqStack.push(int x) will be such that 0 <= x <= 10^9.
// It is guaranteed that FreqStack.pop() won't be called if the stack has zero elements.
// The total number of FreqStack.push calls will not exceed 10000 in a single test case.
// The total number of FreqStack.pop calls will not exceed 10000 in a single test case.
// The total number of FreqStack.push and FreqStack.pop calls will not exceed 150000 across all test cases.

// Solution:


var FreqStack = function() {
  this.maxFreq = new Map();
  this.stack = [null];
};

/**
 * @param {number} x
 * @return {void}
 */

FreqStack.prototype.push = function(x) {
  const freq = this.maxFreq.get(x)+1 || 1;
  let stack = this.stack[freq];
  if (!stack) {
    this.stack[freq] = stack = [x];
  } else {
    stack.push(x);
  }
  this.maxFreq.set(x, freq);
};

/**
 * @return {number}
 */

FreqStack.prototype.pop = function() {
  const freq = this.stack.length-1;
  const stack = this.stack[freq];
  const x = stack.pop();
  if (stack.length === 0) { this.stack.pop(); }
  if (freq > 1) { this.maxFreq.set(x, freq-1); } else { this.maxFreq.delete(x); }
  return x;
};