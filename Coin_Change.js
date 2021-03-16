// Question : Coin Change

// You are given coins of different denominations and a total amount of money amount. Write a function to compute the fewest number of coins that you need to make up that amount. If that amount of money cannot be made up by any combination of the coins, return -1.

// You may assume that you have an infinite number of each kind of coin.

 

// Example 1:

// Input: coins = [1,2,5], amount = 11
// Output: 3
// Explanation: 11 = 5 + 5 + 1
// Example 2:

// Input: coins = [2], amount = 3
// Output: -1
// Example 3:

// Input: coins = [1], amount = 0
// Output: 0
// Example 4:

// Input: coins = [1], amount = 1
// Output: 1
// Example 5:

// Input: coins = [1], amount = 2
// Output: 2
 

// Constraints:

// 1 <= coins.length <= 12
// 1 <= coins[i] <= 231 - 1
// 0 <= amount <= 104

// Solution:

/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function(coins, amount) {
    
    coins.sort(function(a,b){
        return a-b;
    })
    const map = {}
    
    return recursion(coins, amount, map);
};

const recursion = (coins, amount, map) => {
    if(amount === 0){
        return 0
    }
   
    if(map[amount]){
        return map[amount];
    }
    
    let result = -1
    
    for(let i = coins.length-1; i>=0; i--){
        if(coins[i] <= amount){
         const check = recursion(coins, amount-coins[i], map);
            if(check >= 0){
                if(result >= 0){
                    result = Math.min(result, 1+check);
                }
                else{
                    result = 1 + check;
                }
            }
        }
    }
    
    map[amount] = result;
    return result;
}

