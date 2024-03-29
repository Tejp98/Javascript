// Question : Find Duplicate File in System

// Given a list paths of directory info, including the directory path, and all the files with contents in this directory, return all the duplicate files in the file system in terms of their paths. You may return the answer in any order.

// A group of duplicate files consists of at least two files that have the same content.

// A single directory info string in the input list has the following format:

// "root/d1/d2/.../dm f1.txt(f1_content) f2.txt(f2_content) ... fn.txt(fn_content)"
// It means there are n files (f1.txt, f2.txt ... fn.txt) with content (f1_content, f2_content ... fn_content) respectively in the directory "root/d1/d2/.../dm". Note that n >= 1 and m >= 0. If m = 0, it means the directory is just the root directory.

// The output is a list of groups of duplicate file paths. For each group, it contains all the file paths of the files that have the same content. A file path is a string that has the following format:

// "directory_path/file_name.txt"
 

// Example 1:

// Input: paths = ["root/a 1.txt(abcd) 2.txt(efgh)","root/c 3.txt(abcd)","root/c/d 4.txt(efgh)","root 4.txt(efgh)"]
// Output: [["root/a/2.txt","root/c/d/4.txt","root/4.txt"],["root/a/1.txt","root/c/3.txt"]]
// Example 2:

// Input: paths = ["root/a 1.txt(abcd) 2.txt(efgh)","root/c 3.txt(abcd)","root/c/d 4.txt(efgh)"]
// Output: [["root/a/2.txt","root/c/d/4.txt"],["root/a/1.txt","root/c/3.txt"]]
 

// Constraints:

// 1 <= paths.length <= 2 * 104
// 1 <= paths[i].length <= 3000
// 1 <= sum(paths[i].length) <= 5 * 105
// paths[i] consist of English letters, digits, '/', '.', '(', ')', and ' '.
// You may assume no files or directories share the same name in the same directory.
// You may assume each given directory info represents a unique directory. A single blank space separates the directory path and file info.


// Solution:

/**
 * @param {string[]} paths
 * @return {string[][]}
 */
var findDuplicate = function(paths) {
   
    let contentToFilePath = new Map();
    
    for(let i=0;i<paths.length;i++){
        const split = paths[i].split(' ');
        const directoryPath = split[0];
        
        for(let i=1;i<split.length;i++){
            const content = split[i].split('(')[1];
            
            const fileName = split[i].split('(')[0];
            const filePath = directoryPath + '/' + fileName;
            
            if(contentToFilePath.get(content)){
                contentToFilePath.get(content).push(filePath) ;
            }
            else{
                contentToFilePath.set( content, [filePath])
            }
        }
    }
    
    let result = []
    for(let [key, value] of contentToFilePath){
        if(value.length > 1){
            result.push(value);
        }
        
    }
    
    
    return result
};