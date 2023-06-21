const {reverseString, isPalindrome} = require('./stringFunctions')
test('reverseString(str) Takes a string str and returns the reversed string', () => {
    expect(reverseString('Hello')).toBe('olleH')
});
test('isPalindrome(str) Takes a string str and returns true if it is a palindrome, and false otherwise', () => {
    expect(isPalindrome('rAcecar')).toBe(true)
});
