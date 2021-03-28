// Question : Palindromic Substrings

// Given a string, your task is to count how many palindromic substrings in this string.

// The substrings with different start indexes or end indexes are counted as different substrings even they consist of same characters.

// Example 1:

// Input: "abc"
// Output: 3
// Explanation: Three palindromic strings: "a", "b", "c".
 

// Example 2:

// Input: "aaa"
// Output: 6
// Explanation: Six palindromic strings: "a", "a", "a", "aa", "aa", "aaa".
 

// Note:

// The input string length won't exceed 1000.

// Solution:

/**
 * @param {string} s
 * @return {number}
 */
var countSubstrings = function(s) {
    let count = s.length;
    let map = new Map();
    
    for(let i =0;i<s.length;i++){
        let tempString = s.charAt(i);
        for(let j=i+1;j<s.length;j++){
            tempString =s.substring(i,j+1);
            if(map.get(tempString)){
                count = count+1;
            }
            else{
                 const isPalidrome = checkPalidrome(tempString);
                if(isPalidrome){
                    count = count+1;
                }
                map.set(tempString, isPalidrome);
            }
        }
    }
    return count;
};

const checkPalidrome = (string) => {
    for(let i=0;i<parseInt(string.length/2); i++){
        if(string.charAt(i) !== string.charAt(string.length-1-i)){
            return false;
        }
    }
    return true;
}