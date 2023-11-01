// Function to check if a string is a palindrome
function isPalindrome(str) {
    const reversedStr = str.split('').reverse().join('');
    return str === reversedStr;
}

// Function to find and print palindromes in an array
function findPalindromesInArray(arr) {
    const palindromes = arr.filter(item => isPalindrome(item));
    console.log('Palindromes in the array: ', palindromes);
}

// Example usage
const inputArray = ['level', 'hello', 'radar', 'world', 'deified', 'javascript'];

findPalindromesInArray(inputArray);





function findPalindromesInArray(arr) {
    const palindromes = arr.filter(str =>
        {
        const reversedStr = str.split('').reverse().join('');
        return str === reversedStr;
        }
        );
    console.log('Palindromes in the array: ', palindromes);
    }
findPalindromesInArray(['level', 'hello', 'radar', 'world', 'deified', 'javascript']);
