// Question : To Lower Case

// Given a string s, return the string after replacing every uppercase letter with the same lowercase letter.

// Example 1:

// Input: s = "Hello"
// Output: "hello"
// Example 2:

// Input: s = "here"
// Output: "here"
// Example 3:

// Input: s = "LOVELY"
// Output: "lovely"
 

// Constraints:

// 1 <= s.length <= 100
// s consists of printable ASCII characters.

// Note:

// Most languages support lowercase conversion for a string data type. However, that is certainly not the purpose of the problem. Think about how the implementation of the lowercase function call can be done easily.

// Solution:

/**
 * @param {string} s
 * @return {string}
 */
var toLowerCase = function(s) {
    let result = '';
    
    for(let i=0;i<s.length;i++){
        const c = s.charAt(i);
        const cAscii = c.charCodeAt(0);
        
        if(cAscii <= 90 && cAscii >= 65){
            result = result + String.fromCharCode(cAscii+32);
        }
        else{
            result = result + c;
        }
        
    }
    
    return result;
};