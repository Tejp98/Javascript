// Question : Verifying an Alien Dictionary

// In an alien language, surprisingly they also use english lowercase letters, but possibly in a different order. The order of the alphabet is some permutation of lowercase letters.

// Given a sequence of words written in the alien language, and the order of the alphabet, return true if and only if the given words are sorted lexicographicaly in this alien language.

 

// Example 1:

// Input: words = ["hello","leetcode"], order = "hlabcdefgijkmnopqrstuvwxyz"
// Output: true
// Explanation: As 'h' comes before 'l' in this language, then the sequence is sorted.
// Example 2:

// Input: words = ["word","world","row"], order = "worldabcefghijkmnpqstuvxyz"
// Output: false
// Explanation: As 'd' comes after 'l' in this language, then words[0] > words[1], hence the sequence is unsorted.
// Example 3:

// Input: words = ["apple","app"], order = "abcdefghijklmnopqrstuvwxyz"
// Output: false
// Explanation: The first three characters "app" match, and the second string is shorter (in size.) According to lexicographical rules "apple" > "app", because 'l' > '∅', where '∅' is defined as the blank character which is less than any other character (More info).
 

// Constraints:

// 1 <= words.length <= 100
// 1 <= words[i].length <= 20
// order.length == 26
// All characters in words[i] and order are English lowercase letters.


// Solution 1:

/**
 * @param {string[]} words
 * @param {string} order
 * @return {boolean}
 */
var isAlienSorted = function(words, order) {
    
    for(let i=0;i<words.length-1;i++){
        if(checkWordsAreSorted(words[i], words[i+1], order) === false){
            return false;
        }
    }
    return true;
};

const checkWordsAreSorted = (a,b,order) => {

    for(let i=0;i<a.length;i++){
        if(a.charAt(i) === b.charAt(i)){
            continue;
        }
        else{
            if(!b.charAt(i)){
                return false;
            }
            let aIndex = order.indexOf(a.charAt(i));
            let bIndex = order.indexOf(b.charAt(i));
            if((aIndex-bIndex) > 0){
                return false;
            }
            else{
                return true;
            }
        }
    }
        
    return true;
}


// Solution 2:

/**
 * @param {string[]} words
 * @param {string} order
 * @return {boolean}
 */
var isAlienSorted = function(words, order) {
    
    let clone = [...words];
    words.sort((a,b)=>{
        for(let i=0;i<a.length;i++){
            try{
                if(a.charAt(i) === b.charAt(i)){
                    continue;
                }
                else{
                    let aIndex = order.indexOf(a.charAt(i));
                    let bIndex = order.indexOf(b.charAt(i));
                    return aIndex-bIndex;
                }
            }
            catch(error){ 
               return 1;
            }
        }
        
        return -1;
    })
    
    for(let i=0;i<words.length;i++){
        if(words[i]  !== clone[i]){
            return false;
        }
    }
    return true;
};