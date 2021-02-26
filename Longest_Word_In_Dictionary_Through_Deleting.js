//Question : Longest Word in Dictionary through Deleting

// Given a string and a string dictionary, find the longest string in the dictionary that can be formed by deleting some characters of the given string. If there are more than one possible results, return the longest word with the smallest lexicographical order. If there is no possible result, return the empty string.

// Example 1:
// Input:
// s = "abpcplea", d = ["ale","apple","monkey","plea"]

// Output: 
// "apple"
// Example 2:
// Input:
// s = "abpcplea", d = ["a","b","c"]

// Output: 
// "a"
// Note:
// All the strings in the input will only contain lower-case letters.
// The size of the dictionary won't exceed 1,000.
// The length of all the strings in the input won't exceed 1,000.



// Solution

/**
 * @param {string} s
 * @param {string[]} d
 * @return {string}
 */
var findLongestWord = function(s, d) {
    let result = '';
    for(let word of d){
        if(word.length >= result.length && checkWordCanBeMade(s, word)){
            if(word.length === result.length){
                result = [result, word].sort()[0];
            }
            else{
                result = word;
            }
        }
    }
    return result;
};

const checkWordCanBeMade = (inputString, word) => {
    let inputStringIndex = 0;
    let wordIndex = 0;
    while(wordIndex < word.length && inputStringIndex < inputString.length ){
        if(word.charAt(wordIndex) === inputString.charAt(inputStringIndex)){
            wordIndex++;
        }
        inputStringIndex++;
    }
    if(wordIndex === word.length){
        return true;
    }
    return false;
}