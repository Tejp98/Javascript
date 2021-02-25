// Question : Search a 2D Matrix II

// Write an efficient algorithm that searches for a target value in an m x n integer matrix. The matrix has the following properties:

// Integers in each row are sorted in ascending from left to right.
// Integers in each column are sorted in ascending from top to bottom.
 

// Example 1:


// Input: matrix = [[1,4,7,11,15],[2,5,8,12,19],[3,6,9,16,22],[10,13,14,17,24],[18,21,23,26,30]], target = 5
// Output: true
// Example 2:


// Input: matrix = [[1,4,7,11,15],[2,5,8,12,19],[3,6,9,16,22],[10,13,14,17,24],[18,21,23,26,30]], target = 20
// Output: false
 

// Constraints:

// m == matrix.length
// n == matrix[i].length
// 1 <= n, m <= 300
// -109 <= matix[i][j] <= 109
// All the integers in each row are sorted in ascending order.
// All the integers in each column are sorted in ascending order.
// -109 <= target <= 109


// Solution:

//#1
var searchMatrix = function(matrix, target) {
    if(!matrix.length){
       return false; 
    } 
    
    let row = 0;
    let col = matrix[0].length-1;
    
    while(row < matrix.length && col >= 0) {
        if(matrix[row][col] === target){
            return true;
        } 
        if(matrix[row][col] > target){
             col--;
        }
        else{
            row++;
        }
    }
    return false;
};

const binarySearch = (array, number) => {
    let left = 0;
    let right = array.length;
    while(left < right-1){
        let middle = ((left+right)%2) === 0 ? (left+right)/2 : (left+right-1)/2;
        if(array[middle] == number ){
            return true;
        }
        else if(array[middle] < number){
            left = middle;
        }
        else{
            right = middle;
        }
    }
    if(array[left] == number){
        return true;
    }
    return false;
}


//# 2
/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
    

    if(matrix.length === 1){
        return binarySearch(matrix[0], target);
    }
    else if(matrix[0].length === 1){
        let array = matrix.map((row)=>{
            return row;
        });
        return binarySearch(array, target)
    }
    else{
        
        for(let i=0;i<matrix.length;i++){
            if(binarySearch(matrix[i], target)){
                return true;
            }
        }
        return false;
    }
};


//# 3
/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
    let rows=matrix.length;
    let cols = matrix[0].length;
    let maxRowToCheck = matrix.length;
    let maxColToCheck = matrix[0].length;
    if(rows.length === 1){
        return binarySearch(matrix[0], target);
    }
    else if(cols.length === 1){
        let array = matrix.map((row)=>{
            return row;
        });
        return binarySearch(array, target)
    }
    else{
        for(let i =0;i<rows;i++){
            if(i >= maxRowToCheck){
                break;
            }
            for(let j=0;j<cols;j++){
                if(j >= maxColToCheck){
                    break;
                }
                if(matrix[i][j] == target){
                    return true;
                }
                else if(matrix[i][j] > target){
                    maxColToCheck = j;
                    
                }    
            }
        }
        return false;
    }
};
