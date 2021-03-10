// Question : HTML Entity Parser

// HTML entity parser is the parser that takes HTML code as input and replace all the entities of the special characters by the characters itself.

// The special characters and their entities for HTML are:

// Quotation Mark: the entity is &quot; and symbol character is ".
// Single Quote Mark: the entity is &apos; and symbol character is '.
// Ampersand: the entity is &amp; and symbol character is &.
// Greater Than Sign: the entity is &gt; and symbol character is >.
// Less Than Sign: the entity is &lt; and symbol character is <.
// Slash: the entity is &frasl; and symbol character is /.
// Given the input text string to the HTML parser, you have to implement the entity parser.

// Return the text after replacing the entities by the special characters.

// Example 1:

// Input: text = "&amp; is an HTML entity but &ambassador; is not."
// Output: "& is an HTML entity but &ambassador; is not."
// Explanation: The parser will replace the &amp; entity by &
// Example 2:

// Input: text = "and I quote: &quot;...&quot;"
// Output: "and I quote: \"...\""
// Example 3:

// Input: text = "Stay home! Practice on Leetcode :)"
// Output: "Stay home! Practice on Leetcode :)"
// Example 4:

// Input: text = "x &gt; y &amp;&amp; x &lt; y is always false"
// Output: "x > y && x < y is always false"
// Example 5:

// Input: text = "leetcode.com&frasl;problemset&frasl;all"
// Output: "leetcode.com/problemset/all"
 

// Constraints:

// 1 <= text.length <= 10^5
// The string may contain any possible characters out of all the 256 ASCII characters.


//****************************************************************************

// Approach Straight Forward:

// For this approach, we use '&' and ';', these two characters as our references, 
// we maintain a boolean value (in this case addInTemporaryString) whosse value we update as we 
// encounter '&' and ';' ,

// In simple words, if we encounter '&' (start of the special character),
//  we start adding characters of the text in some temporary string and once we encounter ';'(end of special character)
//   we determine which special character temporary string represents and add it to the actual result string,
//  and while we have not encounter '&' we keep on adding characters to result.

//  more detailed explanation and edge cases handling in Algorithm


// Algorithm:

// --> go through each character of text and maintain three variables (result, temporaryString, addInTemporaryString)

//     -where result stores the actual result of the function
//     -value of addInTemporaryString changes as we encounter '&' and ';'
//     -temporaryString stores string between '&' and ';' and adds to result on the basis of above boolean.

// --> if current character of text is '&',

//     -if the value of addInTemporaryString boolean is true 
//     as we have encounter the start of a special character HTML code 
//     then we have encounter a edge ccase where another '&' occurs before ';',
//     so in this case we update result with & and temporaryString and set temporaryString to ''
//     -else
//         set addInTemporaryString boolean to true and continue with next character of the text.

// --> else if current character of text is ';' and addInTemporaryString boolean is true,

//     -using getCharacter function, get the special character value from temporary string and add it to result
//     -set temporaryString to '', as current temporary string is parsed for special character and added to result
//     -set addInTemporaryString boolean to false as we have encounter the end of a special character HTML code

// --> else we store the current character to result ot temporaryString on the basis of addInTemporaryString boolean.

// -Finally, once we go through all the characters of text, we need to check if temporaryString is empty or not, 
// so that if there is some string in temporaryString then we should add it to result. 
// (this case happen when there is a '&' but no ';' for it)(Edge Case)


// Complexity Analysis:

// Time: O(n), where n is the length of text, as we're parsing through and checking each character of the text

// Space: O(1) (self-explanatory)


//**************************************************************************************


// Solution:

/**
 * @param {string} text
 * @return {string}
 */
var entityParser = function(text) {
    let result = '';
    let temporaryString = ''
    let addInTemporaryString = false;
    for(let i =0;i<text.length;i++){
        if(text.charAt(i) === '&'){
            if(addInTemporaryString){
                result =result + '&' +temporaryString;
                temporaryString = '';
            }
            else{
                addInTemporaryString = true;
                
            }
        }
        else if(text.charAt(i) === ';' && addInTemporaryString){
            result = result+getCharacter(temporaryString);
            temporaryString = '';
            addInTemporaryString = false;
        }
        else{
            if(addInTemporaryString){
                temporaryString= temporaryString+text.charAt(i)
            }
            else{
                result = result+ text.charAt(i)
            }
        }
    }
    if(temporaryString !== ''){
        result =result + '&' +temporaryString;
    }
    return result;
};

const getCharacter = (string) => {
    switch(string){
        case 'quot':
            return '"';
        case 'apos':
            return "'";
        case 'amp':
            return '&';
        case 'gt':
            return '>';
        case 'lt':
            return '<';
        case 'frasl':
            return '/';
        default:
            return '&'+string+';';
    }
}