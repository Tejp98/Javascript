// Question: Unique Paths II


// A robot is located at the top-left corner of a m x n grid (marked 'Start' in the diagram below).

// The robot can only move either down or right at any point in time. The robot is trying to reach the bottom-right corner of the grid (marked 'Finish' in the diagram below).

// Now consider if some obstacles are added to the grids. How many unique paths would there be?

// An obstacle and space is marked as 1 and 0 respectively in the grid.

// Example 1:


// Input: obstacleGrid = [[0,0,0],[0,1,0],[0,0,0]]
// Output: 2
// Explanation: There is one obstacle in the middle of the 3x3 grid above.
// There are two ways to reach the bottom-right corner:
// 1. Right -> Right -> Down -> Down
// 2. Down -> Down -> Right -> Right
// Example 2:


// Input: obstacleGrid = [[0,1],[0,0]]
// Output: 1
 

// Constraints:

// m == obstacleGrid.length
// n == obstacleGrid[i].length
// 1 <= m, n <= 100
// obstacleGrid[i][j] is 0 or 1.


// Solution:


/**
 * @param {number[][]} obstacleGrid
 * @return {number}
 */
var uniquePathsWithObstacles = function(obstacleGrid) {
    let dp = new Array(obstacleGrid.length);
    
    for(let i =0;i<obstacleGrid.length;i++){
        dp[i] = Array(obstacleGrid[0].length).fill(0);
    }
    
    if(obstacleGrid[0][0] === 0){
        dp[0][0] = 1;   
    }
    
    for(let i = 1;i<obstacleGrid.length;i++){
        if(obstacleGrid[i][0] === 0){
            dp[i][0] = dp[i-1][0];
        }
    }
    
    for(let i = 1;i<obstacleGrid[0].length;i++){
        if(obstacleGrid[0][i] === 0){
                    dp[0][i] = dp[0][i-1];

        }
    }
    
     for(let i =1;i<obstacleGrid.length;i++){
            for(let j=1;j<obstacleGrid[i].length;j++){
                if(obstacleGrid[i][j] === 0 ){
                    dp[i][j] = dp[i-1][j]+dp[i][j-1];
                 }
            }
        }
    
    
    return dp[dp.length-1][dp[0].length-1];
};