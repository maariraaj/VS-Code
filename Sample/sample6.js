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
