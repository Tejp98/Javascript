// Question : Word Subsets


// We are given two arrays A and B of words.  Each word is a string of lowercase letters.

// Now, say that word b is a subset of word a if every letter in b occurs in a, including multiplicity.  For example, "wrr" is a subset of "warrior", but is not a subset of "world".

// Now say a word a from A is universal if for every b in B, b is a subset of a. 

// Return a list of all universal words in A.  You can return the words in any order.

 

// Example 1:

// Input: A = ["amazon","apple","facebook","google","leetcode"], B = ["e","o"]
// Output: ["facebook","google","leetcode"]
// Example 2:

// Input: A = ["amazon","apple","facebook","google","leetcode"], B = ["l","e"]
// Output: ["apple","google","leetcode"]
// Example 3:

// Input: A = ["amazon","apple","facebook","google","leetcode"], B = ["e","oo"]
// Output: ["facebook","google"]
// Example 4:

// Input: A = ["amazon","apple","facebook","google","leetcode"], B = ["lo","eo"]
// Output: ["google","leetcode"]
// Example 5:

// Input: A = ["amazon","apple","facebook","google","leetcode"], B = ["ec","oc","ceo"]
// Output: ["facebook","leetcode"]
 

// Note:

// 1 <= A.length, B.length <= 10000
// 1 <= A[i].length, B[i].length <= 10
// A[i] and B[i] consist only of lowercase letters.
// All words in A[i] are unique: there isn't i != j with A[i] == A[j].


// Solution 1:

/**
 * @param {string[]} A
 * @param {string[]} B
 * @return {string[]}
 */
var wordSubsets = function(A, B) {
    const map = new Map();
    const result = [];
    for(let i = 0;i<B.length;i++){
        const insideMap = new Map(); 
        for(let j=0;j<B[i].length;j++){
            const elementCount = insideMap.get(B[i].charAt(j));
            if(elementCount){
                insideMap.set(B[i].charAt(j) , elementCount+1)
            }
            else{
                insideMap.set(B[i].charAt(j) ,1)
            }
        }
        for(let [key, value] of insideMap){     
            map.set(key, Math.max(value, map.get(key) || 0))
        }
    }
 
    for(let i = 0;i < A.length;i++){
        let isUniversal = true;
        for(let [key, value] of map){     
            const length = A[i].split(key).length;
            if(value > length-1){
                isUniversal = false;
                break;
            }
        }

        if(isUniversal === true){
            result.push(A[i]);
        }
    }
    
    return result;
};


// Solution 2:

/**
 * @param {string[]} A
 * @param {string[]} B
 * @return {string[]}
 */
var wordSubsets = function(A, B) {
    const map = new Map();
    const result = [];
    for(let i = 0;i<B.length;i++){
        const insideMap = new Map(); 
        for(let j=0;j<B[i].length;j++){
            const elementCount = insideMap.get(B[i].charAt(j));
            if(elementCount){
                insideMap.set(B[i].charAt(j) , elementCount+1)
            }
            else{
                insideMap.set(B[i].charAt(j) ,1)
            }
        }
        for(let [key, value] of insideMap){     
                map.set(key, Math.max(value, map.get(key) || 0))
            }
    }
 
    for(let i = 0;i < A.length;i++){
        let mapClone = _.cloneDeep(map);
        let isUniversal = true;
        for(let j=0;j<A[i].length;j++){
            const elementCount = mapClone.get(A[i].charAt(j));
            if(elementCount){
                mapClone.set(A[i].charAt(j) , elementCount-1)
            }
            else if(elementCount < 0){
                isUniversal = false;
                break;
            }
        }
        if(isUniversal === true){
            for(let [key, value] of mapClone){     
                if(value !== 0){
                    isUniversal = false;
                    break;
                }
            }
        }

        if(isUniversal === true){
            result.push(A[i]);
        }
    }
    
    return result;
};