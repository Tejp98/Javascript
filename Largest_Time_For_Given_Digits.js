// Question : Largest Time for Given Digits

// Given an array arr of 4 digits, find the latest 24-hour time that can be made using each digit exactly once.

// 24-hour times are formatted as "HH:MM", where HH is between 00 and 23, and MM is between 00 and 59. The earliest 24-hour time is 00:00, and the latest is 23:59.

// Return the latest 24-hour time in "HH:MM" format.  If no valid time can be made, return an empty string.

 

// Example 1:

// Input: arr = [1,2,3,4]
// Output: "23:41"
// Explanation: The valid 24-hour times are "12:34", "12:43", "13:24", "13:42", "14:23", "14:32", "21:34", "21:43", "23:14", and "23:41". Of these times, "23:41" is the latest.
// Example 2:

// Input: arr = [5,5,5,5]
// Output: ""
// Explanation: There are no valid 24-hour times as "55:55" is not valid.
// Example 3:

// Input: arr = [0,0,0,0]
// Output: "00:00"
// Example 4:

// Input: arr = [0,0,1,0]
// Output: "10:00"
 

// Constraints:

// arr.length == 4
// 0 <= arr[i] <= 9

// Solution:

/**
 * @param {number[]} arr
 * @return {string}
 */

var largestTimeFromDigits = function(arr) {
    
  let maxMinutes = -1;
    
    
    for(let i = 0;i<arr.length;i++){
        for(let i2 = 0;i2<arr.length;i2++){
             for(let i3 = 0;i3<arr.length;i3++){
                if(i == i2 || i2 == i3 || i == i3){
                    continue;
                }
                const check = getValidMinutesFromDigits(arr[i], arr[i2], arr[i3], arr[6-i-i2-i3]);     
                     if(check !== -1){
                         maxMinutes = Math.max(check, maxMinutes);
                     }
                }
        } 
    }
    if(maxMinutes === -1){
        return '';
    }
    const HH = String(parseInt(maxMinutes/60)).padStart(2, '0');
    const MM = String(maxMinutes%60).padStart(2, '0');
    
    return HH + ':' + MM;
    
};

const getValidMinutesFromDigits = (one, two, three, four) => {
    const hours = (one*10 + two);
    const minutes = three*10 + four;
    
    if(hours <= 23 && minutes <= 59){
        return (hours*60)+minutes
    }
    return -1
}