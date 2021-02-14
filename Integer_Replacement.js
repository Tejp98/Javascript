// Question: Integer Replacement

// Given a positive integer n, you can apply one of the following operations:

// If n is even, replace n with n / 2.
// If n is odd, replace n with either n + 1 or n - 1.
// Return the minimum number of operations needed for n to become 1.

 

// Example 1:

// Input: n = 8
// Output: 3
// Explanation: 8 -> 4 -> 2 -> 1
// Example 2:

// Input: n = 7
// Output: 4
// Explanation: 7 -> 8 -> 4 -> 2 -> 1
// or 7 -> 6 -> 3 -> 2 -> 1
// Example 3:

// Input: n = 4
// Output: 2
 

// Constraints:

// 1 <= n <= 231 - 1


// Solution:

/**
 * @param {number} n
 * @return {number}
 */
var integerReplacement = function(number) {
    if(number === 1){
        return 0;
    }
    if(number%2 == 0){
        return 1+integerReplacement(number/2)
    }
    else{
        const plusOneResult = integerReplacement((number+1)/2);
        const minusOneResult = integerReplacement((number-1)/2);
        if(plusOneResult > minusOneResult){
            return minusOneResult+2;
        }
        return plusOneResult+2;
    }
};
