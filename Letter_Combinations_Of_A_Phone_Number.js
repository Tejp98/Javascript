// Question : Letter Combinations of a Phone Number

// Given a string containing digits from 2-9 inclusive, return all possible letter combinations that the number could represent. Return the answer in any order.

// A mapping of digit to letters (just like on the telephone buttons) is given below. Note that 1 does not map to any letters.

// Example 1:

// Input: digits = "23"
// Output: ["ad","ae","af","bd","be","bf","cd","ce","cf"]
// Example 2:

// Input: digits = ""
// Output: []
// Example 3:

// Input: digits = "2"
// Output: ["a","b","c"]
 

// Constraints:

// 0 <= digits.length <= 4
// digits[i] is a digit in the range ['2', '9'].

// Solution:

/**
 * @param {string} digits
 * @return {string[]}
 */

var letterCombinations = function(digits) {
    if(digits === ''){
        return [];
    }
    let result = [];
    let map = new Map([
        ['2', ['a','b','c']],
        ['3', ['d','e','f']],
        ['4', ['g','h','i']],
        ['5', ['j','k','l']],
        ['6', ['m','n','o']],
        ['7', ['p','q','r','s']],
        ['8', ['t','u','v']],
        ['9', ['w','x','y','z']],
    ]);
    let possibleCombinations = 1;

    for(let i=0;i<digits.length;i++){
        if(['9', '7'].includes(digits.charAt(i))){
            possibleCombinations = possibleCombinations * 4;
        }
        else{
            possibleCombinations = possibleCombinations * 3;
        }
    }

    result = Array(possibleCombinations).fill('');

    for(let i=0;i<digits.length;i++){
        let repeatNumber = possibleCombinations / (['9', '7'].includes(digits.charAt(i)) ? 4 : 3);
        let index = 0;
        let count = 0;
        for(let j=0;j<result.length;j++){

            result[j] = result[j] + map.get(digits.charAt(i))[index];

            count = count+1;
            if(count == repeatNumber){
                if(index == map.get(digits.charAt(i)).length-1){
                    index = 0;
                }
                else{
                    index = index +1;
                }
                count = 0;

            }
        }
        possibleCombinations = repeatNumber;   
    }
    
    return result;
};