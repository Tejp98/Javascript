// Question: Valid Anagram


// Given two strings s and t , write a function to determine if t is an anagram of s.

// Example 1:

// Input: s = "anagram", t = "nagaram"
// Output: true
// Example 2:

// Input: s = "rat", t = "car"
// Output: false
// Note:
// You may assume the string contains only lowercase alphabets.

// Solution:



/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    
    if(s.length !== t.length){
        return false;
    }
    
    let result = [];
    for(let i=0;i<s.length;i++){
        const temporaryS = (s.charAt(i))
        const temporaryT = (t.charAt(i))
        result[temporaryS] = (result[temporaryS] || 0)-1;
        result[temporaryT] = 1+(result[temporaryT] || 0);
    }
    
    for(let i in result){
        if(result[i] != 0){
            return false
        }
    }
    return true;
};