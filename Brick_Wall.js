// Question : Brick Wall

// There is a brick wall in front of you. The wall is rectangular and has several rows of bricks. The bricks have the same height but different width. You want to draw a vertical line from the top to the bottom and cross the least bricks.

// The brick wall is represented by a list of rows. Each row is a list of integers representing the width of each brick in this row from left to right.

// If your line go through the edge of a brick, then the brick is not considered as crossed. You need to find out how to draw the line to cross the least bricks and return the number of crossed bricks.

// You cannot draw a line just along one of the two vertical edges of the wall, in which case the line will obviously cross no bricks.


// Example:

// Input: [[1,2,2,1],
//         [3,1,2],
//         [1,3,2],
//         [2,4],
//         [3,1,2],
//         [1,3,1,1]]

// Output: 2 

// Note:

// The width sum of bricks in different rows are the same and won't exceed INT_MAX.
// The number of bricks in each row is in range [1,10,000]. The height of wall is in range [1,10,000]. Total number of bricks of the wall won't exceed 20,000.

// Solution:

/**
 * @param {number[][]} wall
 * @return {number}
 */
var leastBricks = function(wall) {
    let gapLocationToCount = new Map();
    let result = 0;
  
    for(let i=0;i<wall.length;i++){
        for(let j=0;j<wall[i].length-1;j++){
            if(j === 0){
                wall[i][j] =  wall[i][j];
            }
            else{
                wall[i][j] = wall[i][j-1] + wall[i][j]; 
            }
            if(gapLocationToCount.get(wall[i][j])){
                gapLocationToCount.set(wall[i][j], gapLocationToCount.get(wall[i][j]) +1); 
            }
            else{
                gapLocationToCount.set(wall[i][j], 1);
            }
        }
    }
    
    for(let [key, value] of gapLocationToCount){
        result = Math.max(result, value);
    }
    
    result = wall.length-result;
    
    
    return result;
};