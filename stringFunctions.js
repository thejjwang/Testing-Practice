function reverseString(str) {
    let reversedStr = '';
    for (let i = str.length - 1; i >= 0; i--) {
        reversedStr += str[i];
    }
    return reversedStr;
}
function isPalindrome(str) {
    let reversedStr = ''; 
    str = str.toLowerCase();
    for (let i = str.length - 1; i >= 0; i--) {
        reversedStr += str[i];
    }
    if (str === reversedStr) {
        return true;
    } 
}

module.exports = {reverseString, isPalindrome};