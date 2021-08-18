// Question : Valid Palindrome

// Given a string s, determine if it is a palindrome, considering only alphanumeric characters and ignoring cases.

 

// Example 1:

// Input: s = "A man, a plan, a canal: Panama"
// Output: true
// Explanation: "amanaplanacanalpanama" is a palindrome.
// Example 2:

// Input: s = "race a car"
// Output: false
// Explanation: "raceacar" is not a palindrome.
 

// Constraints:

// 1 <= s.length <= 2 * 105
// s consists only of printable ASCII characters.


// Solution:

/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    s = s.toLowerCase();
    
    let left=0, right=s.length-1;
    
    while(left < right){
        
        const asciiOfLeft = s.charAt(left).charCodeAt();
        const asciiOfRight = s.charAt(right).charCodeAt();
                
        if(!checkIsAlphaNumeric(asciiOfLeft)){
            left = left+1;
        }
        else if(!checkIsAlphaNumeric(asciiOfRight)){
            right = right-1;
        }
        else{
            
            if(asciiOfLeft !== asciiOfRight){
                return false;   
            }
            
            left = left+1;
            right = right-1;
        }
        
    }
    return true;    
};


const checkIsAlphaNumeric = (character) => {
    if(character < 48 || character > 122 || (character > 57 && character < 97) ){
        return false;   
    }
    return true;
}