//String

// let x="Mariraj";

// console.log(x);
// console.log(x[1]);
// console.log(x.length);
// console.log(x.substring(2,5));

// for(let i=0;i<x.length;i++){
//     console.log(x[i]);
// };
// // to know ASCII value of a character
// let a=x.charCodeAt(0);
// console.log(a);

// let y="Muthuprabha";
// console.log(y+" "+x);


//reverse the order of the words.
// let s="the sky is blue";
// let words = s.trim().split(/\s+/).reverse().join(' ');
// console.log(words);



//Return the maximum number of words

// let s= ["alice and bob love leetcode", "i think so too", "this is great thanks very much"];

// let max=0;
// for(let i=0;i<s.length;i++){
//     let arr=s[i].split(' ')
//     if(arr.length>max){
//         max=arr.length;
//     }
// }console.log(max);



//erase it if s[i] is equal to s[i-1] in the string.

// const s = "aabaab";
// let str="";
// for(let i=0;i<s.length;i++){
//     if(s[i] != s[i+1]){
//         str += s[i];
//     }
// }console.log(str);



//find the longest common prefix string amongst an array of strings.If there is no common prefix, return an empty string "".

// let strs = ["flower", "blow", "flight"];
// let prefix = strs[0];
// for (let i = 1; i < strs.length; i++) {
//     let j = 0;
//     while (j < prefix.length && j < strs[i].length && prefix[j] === strs[i][j]) {
//         j++;
//     }
//     prefix = prefix.slice(0, j);
// }
// console.log(prefix);


//Given a string s, return true if it is a palindrome, or false otherwise. After converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters.

// let str="A man, a plan, a canal: Panama";
// str=str.toLowerCase().replace(/[^a-z0-9]/g,'');
// let ans=str.split('').reverse().join('');
// console.log(ans===str);



//return the index of the first occurrence of needle in haystack, or -1 if needle is not part of haystack.

// let strStr = function (haystack, needle) {
//     for (let i = 0; i <= haystack.length - needle.length; i++) {
//         if (haystack.substring(i, i + needle.length) === needle) {
//             return i;
//         }
//     }
//     return -1;
// };
// console.log(strStr('butsad', 'sad'));
// console.log(strStr('leetcode', 'leeto'));



//Extract numbers from a string

// let s="I have 3 apples and 5 oranges, totaling 88 fruits.";
// let a = ["1","2","3","4","5","6","7","8","9","0"];
// let b = "";
// let c = [];
// for(let i=0;i<s.length;i++){
//     if(a.includes(s[i]) && a.includes(s[i+1])){
//         b=b+s[i];
//     }else if(a.includes(s[i]) && a.includes(s[i+1])==false) {
//         b=b+s[i];
//         c.push(b);
//         b = "";
//     }
// }
// console.log(c);

//Another Method

// let str = "I have 35 apples and 655 oranges, totaling 690 fruits69";
// let arr = [];
// let currentNumber = '';

// // Iterate through each character of the input string
// for (let i = 0; i < str.length; i++) {
//     let char = str.charAt(i);
//     //console.log("char", char);
//     // Check if the character is a digit
//     if (!isNaN(parseInt(char))) {
//         currentNumber += char; // Add the digit to the current number string
//         //console.log("currentNumber", currentNumber);
//     } else if (currentNumber !== '')
//         // If the current number string is not empty, add it to the arr
//         {
//             arr.push(currentNumber);
//            // console.log("array", arr);
//             currentNumber = ''; // Reset the current number string
//         }

// }

// // Add the last number if the string ends with a number
// if (currentNumber !== '') {
//     arr.push(currentNumber);
// }

// console.log(arr);


//find the number of characters required to add to make it a palindrome

// const str = "abcd";

// if (isPalindrome(str)) {
//     console.log(0);
// } else {
//     console.log(minCharsToAdd(str));
// }

// function isPalindrome(s) {
//     return s === s.split('').reverse().join('');
// }

// function minCharsToAdd(s) {
//     let count = 0;
//     while (!isPalindrome(s)) {
//         s = s.slice(0, -1);
//         count++;
//     }
//     return count;
// }



//Given a sentence in the form of a string, convert it into its equivalent mobile numeric keypad sequence.

// let s="HELLO WORLD";
// let keypadMap={
//     'a': '2', 'b': '22', 'c': '222',
//     'd': '3', 'e': '33', 'f': '333',
//     'g': '4', 'h': '44', 'i': '444',
//     'j': '5', 'k': '55', 'l': '555',
//     'm': '6', 'n': '66', 'o': '666',
//     'p': '7', 'q': '77', 'r': '777', 's': '7777',
//     't': '8', 'u': '88', 'v': '888',
//     'w': '9', 'x': '99', 'y': '999', 'z': '9999',
//     ' ': '0'
// };
// let seq = '';
// for(let i=0;i<s.length;i++) {
//     let char=s[i].toLowerCase();
//     if(keypadMap.hasOwnProperty(char)){
//     seq += keypadMap[char];
//     }
// }
// console.log(seq);



//Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

// var isValid = function (s) {
//     const stack = [];
//     const obj = {
//         ')': '(',
//         '}': '{',
//         ']': '['
//     };
//     for (let char of s) {
//         if (char === '(' || char === '{' || char === '[') {
//             stack.push(char);
//         } else if (char === ')' || char === '}' || char === ']') {
//             if (stack.length === 0 || stack.pop() !== obj[char]) {
//                 return false;
//             }
//         }
//     } return stack.length === 0;
// };
// const inputString = "}{";
// console.log(isValid(inputString));



//Given two strings s and t, return true if t is an anagram of s, and false otherwise. An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

// function isAnagram(s, t) {
//     if (s.length !== t.length) {
//         return false;
//     }
//     const charCount = {};
//     for (let char of s) {
//         charCount[char] = (charCount[char] || 0) + 1;
//     }
//     console.log(charCount)
//     for (let char of t) {
//         if (!charCount[char]) {
//             return false;
//         }
//         charCount[char]--;
//     }
//     return true;
// }
// const s = "anagram";
// const t = "nagaram";
// console.log(isAnagram(s, t));



//You have to perform a single swap operation to make these strings similar. If it is possible then the strings are pro strings. If pro strings are formed then return True otherwise return False. If initially two equal strings are there then \those will not be considered pro strings.

// let str1 = "SHARPENER";
// let str2 = "S3P3R";
// let i=0, j=0;

// while(i<str1.length && j<str2.length){
//     if(str1[i]===str2[j]){
//         i++;
//         j++;
//     }else if(!isNaN(parseInt(str2[j]))){
//         let count=parseInt(str2[j]);
//         i += count;
//         j++;
//     } else {
//         return false;
//     }
// }
// console.log(i===str1.length && j===str2.length);


//vowels in the given string

// let s = "a1e@i2o!u"
// s = s.toLowerCase().replace(/[^a-z]/g, '');
// let vow = ["a", "e", "i", "o", "u"];
// let count = 0;
// for (let i = 0; i < s.length; i++) {
//     if (vow.includes(s[i])) {
//         count++;
//     }
// }
// console.log(count);



//Given a string paragraph and a string array of the banned words banned, return the most frequent word that is not banned. It is guaranteed there is at least one word that is not banned, and that the answer is unique. The words in paragraph are case-insensitive and the answer should be returned in lowercase.

// const paragraph = "Bob hit a ball, the hit BALL flew far after it was hit.", banned = ["hit"];
// const bannedSet = new Set(banned);
// const words = paragraph.toLowerCase().match(/\b\w+\b/g);
// const wordCounts = new Map();

// for (let word of words) {
//     if (!bannedSet.has(word)) {
//         wordCounts.set(word, (wordCounts.get(word) || 0) + 1);
//     }
// }

// let mostCommon = '';
// let maxCount = 0;

// for (let [word, count] of wordCounts) {
//     if (count > maxCount) {
//         mostCommon = word;
//         maxCount = count;
//     }
// }

// console.log(mostCommon);



//return true if ransomNote can be constructed by using the letters from magazine and false otherwise.

// var canConstruct = function (ransomNote, magazine) {
//     let charCount = {};
//     for (let char of magazine) {
//         if (!charCount[char]) {
//             charCount[char] = 1;
//         } else {
//             charCount[char]++;
//         }
//     }
//     for (let char of ransomNote) {
//         if (!charCount[char]) {
//             return false;
//         } else {
//             charCount[char]--;
//         }
//     }
//     return true;
// };
// console.log(canConstruct("aa", "aab"));



//Given two strings s and t, determine if they are isomorphic. Two strings s and t are isomorphic if the characters in s can be replaced to get t.

// var isIsomorphic = function (s, t) {
//     let mapS = new Map();
//     let mapT = new Map();
//     for (let i = 0; i < s.length; i++) {
//         let charS = s[i];
//         let charT = t[i];
//         if (mapS.has(charS) && mapS.get(charS) !== charT) {
//             return false;
//         }
//         if (mapT.has(charT) && mapT.get(charT) !== charS) {
//             return false;
//         }
//         mapS.set(charS, charT);
//         mapT.set(charT, charS);
//     } return true;
// };
// console.log(isIsomorphic("paper", "title"));



//Given a pattern and a string s, find if s follows the same pattern.

// var wordPattern = function (pattern, s) {
//     const words = s.split(' ');
//     let charToWord = new Map();
//     let wordToChar = new Map();
//     if (pattern.length !== words.length) {
//         return false;
//     }
//     for (let i = 0; i < words.length; i++) {
//         let char = pattern[i];
//         let word = words[i];
//         if (charToWord.has(char) && charToWord.get(char) !== word) {
//             return false;
//         } else {
//             charToWord.set(char, word);
//         }
//         if (wordToChar.has(word) && wordToChar.get(word) !== char) {
//             return false;
//         } else {
//             wordToChar.set(word, char);
//         }
//     } return true;
// };
// console.log(wordPattern("abba", "dog cat cat dog"));



//Given a string licensePlate and an array of strings words, find the shortest completing word in words. A completing word is a word that contains all the letters in licensePlate. Ignore numbers and spaces in licensePlate, and treat letters as case insensitive. If a letter appears more than once in licensePlate, then it must appear in the word the same number of times or more.

// const licensePlate = "1s3 456", words = ["looks", "pest", "stew", "show"];
// let result = null;

// const alphabets = licensePlate.toLowerCase().match(/[a-z]/g);

// for (let word of words) {
//     let target = word;
//     for (let char of alphabets) {
//         if (target.includes(char)) {
//             target = target.replace(char, "0");
//         } else {
//             target = null;
//             break;
//         }
//     }
//     if (target && (!result || target.length < result.length)) {
//         result = word;
//     };
// }
// console.log(result);



//You are given a 0-indexed string blocks of length n, where blocks[i] is either 'W' or 'B', representing the color of the ith block. The characters 'W' and 'B' denote the colors white and black, respectively.You are also given an integer k, which is the desired number of consecutive black blocks.In one operation, you can recolor a white block such that it becomes a black block. Return the minimum number of operations needed such that there is at least one occurrence of k consecutive black blocks. (LC 2379).

// let blocks = "WBBWWBBWBW", k = 7;
// let min = k;
// let whiteCount = 0;
// for (let i = 0; i < k; i++) {
//     if (blocks[i] === 'W') {
//         whiteCount++;
//     }
// }
// min = whiteCount;
// for (let i = k; i < blocks.length; i++) {
//     if (blocks[i - k] === 'W') {
//         whiteCount--;
//     }
//     if (blocks[i] === 'W') {
//         whiteCount++;
//     }
//     min = Math.min(min, whiteCount);
// }
// console.log(min);



//Given two strings s and t, return true if s is a subsequence of t, or false otherwise. A subsequence of a string is a new string that is formed from the original string by deleting some (can be none) of the characters without disturbing the relative positions of the remaining characters. (i.e., "ace" is a subsequence of "abcde" while "aec" is not). (LC 392)

// const s = "abc", t = "ahbgdc";
// let i = 0, j = 0;
// while (i < s.length && j < t.length) {
//     if (s[i] === t[j]) {
//         i++;
//     }
//     j++;
// } console.log(i === s.length);