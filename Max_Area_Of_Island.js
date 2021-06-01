// Question : Max Area of Island

// You are given an m x n binary matrix grid. An island is a group of 1's (representing land) connected 4-directionally (horizontal or vertical.) You may assume all four edges of the grid are surrounded by water.

// The area of an island is the number of cells with a value 1 in the island.

// Return the maximum area of an island in grid. If there is no island, return 0.

// Example 1:


// Input: grid = [[0,0,1,0,0,0,0,1,0,0,0,0,0],[0,0,0,0,0,0,0,1,1,1,0,0,0],[0,1,1,0,1,0,0,0,0,0,0,0,0],[0,1,0,0,1,1,0,0,1,0,1,0,0],[0,1,0,0,1,1,0,0,1,1,1,0,0],[0,0,0,0,0,0,0,0,0,0,1,0,0],[0,0,0,0,0,0,0,1,1,1,0,0,0],[0,0,0,0,0,0,0,1,1,0,0,0,0]]
// Output: 6
// Explanation: The answer is not 11, because the island must be connected 4-directionally.
// Example 2:

// Input: grid = [[0,0,0,0,0,0,0,0]]
// Output: 0
 

// Constraints:

// m == grid.length
// n == grid[i].length
// 1 <= m, n <= 50
// grid[i][j] is either 0 or 1.

// Solution:

/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxAreaOfIsland = function(grid) {
    let result = 0;
    
    for(let i =0;i<grid.length;i++){
        for(let j=0;j<grid[i].length;j++){
            if(grid[i][j] === 1){
                result = Math.max(result, parseForIsland(i, j, grid));
            }
        }
    }

    return result;
};

const parseForIsland = (row, col, matrix,) => {
    if(row >= matrix.length || row < 0 || col >= matrix[0].length || col < 0 ){
        return 0;
    }
    
    if(matrix[row][col] === 0){
        return 0;
    }
    
    let result = 1;
    matrix[row][col] = 0;
    
    if(row > 0){
        result = result + parseForIsland(row-1, col, matrix);
    }
    
     if(col > 0){
        result = result + parseForIsland(row, col-1, matrix);
    }
    
     if(row < matrix.length-1){
        result = result + parseForIsland(row+1, col, matrix);
    }
    
     if(col < matrix[row].length-1){
        result = result + parseForIsland(row, col+1, matrix);
    }
    
    return result;
}