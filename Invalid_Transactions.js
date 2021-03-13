// Question : Invalid Transactions

// A transaction is possibly invalid if:

// the amount exceeds $1000, or;
// if it occurs within (and including) 60 minutes of another transaction with the same name in a different city.
// You are given an array of strings transaction where transactions[i] consists of comma-separated values representing the name, time (in minutes), amount, and city of the transaction.

// Return a list of transactions that are possibly invalid. You may return the answer in any order.

 

// Example 1:

// Input: transactions = ["alice,20,800,mtv","alice,50,100,beijing"]
// Output: ["alice,20,800,mtv","alice,50,100,beijing"]
// Explanation: The first transaction is invalid because the second transaction occurs within a difference of 60 minutes, have the same name and is in a different city. Similarly the second one is invalid too.
// Example 2:

// Input: transactions = ["alice,20,800,mtv","alice,50,1200,mtv"]
// Output: ["alice,50,1200,mtv"]
// Example 3:

// Input: transactions = ["alice,20,800,mtv","bob,50,1200,mtv"]
// Output: ["bob,50,1200,mtv"]
 

// Constraints:

// transactions.length <= 1000
// Each transactions[i] takes the form "{name},{time},{amount},{city}"
// Each {name} and {city} consist of lowercase English letters, and have lengths between 1 and 10.
// Each {time} consist of digits, and represent an integer between 0 and 1000.
// Each {amount} consist of digits, and represent an integer between 0 and 2000.


// Solution:

/**
 * @param {string[]} transactions
 * @return {string[]}
 */
var invalidTransactions = function(transactions) {
    let result = [];
    let modifiedTransactions = [];

    for(let i=0;i<transactions.length;i = i+1){
        let transaction = transactions[i];
        transaction = transaction.split(',');
        modifiedTransactions.push(transaction);
    }
    
    
    modifiedTransactions.sort(
        (a, b) => {
            if (a[0] > b[0]){
                return 1;
            }
            else if (a[0] < b[0]){
                return -1;
            }
            else{
                return parseInt(a[1])-parseInt(b[1]);
            }
        }

    const invalidTxn = [];
    for(let i =0;i<modifiedTransactions.length;i++){
        let index = i+1;
        if(modifiedTransactions[i][2] > 1000){
            if(!invalidTxn.includes(i)){
                result.push(modifiedTransactions[i].reduce(function(a,b){
                    return a.toString()+ ',' + b.toString();
                }));
                invalidTxn.push(i);
            }
        }
        while(index < modifiedTransactions.length && modifiedTransactions[i][0] == modifiedTransactions[index][0]){
            if(modifiedTransactions[index][3] != modifiedTransactions[i][3] && ( modifiedTransactions[index][1] - modifiedTransactions[i][1]) <= 60){
                if(!invalidTxn.includes(index)){
                    result = [...result, modifiedTransactions[index].reduce(function(a,b){
                        return a.toString()+ ',' + b.toString();
                    })];
                    invalidTxn.push(index);
                }
                if(!invalidTxn.includes(i)){
                    result = [...result, modifiedTransactions[i].reduce(function(a,b){
                        return a.toString()+ ',' + b.toString();
                    })];
                    invalidTxn.push(i);
                }
            }
        index = index+1;
        }
    }
    
    return result;
};