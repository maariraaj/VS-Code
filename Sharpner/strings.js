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

// let strs=["flower", "flow", "flight"];
// if(!strs || strs.length === 0){
//     console.log("");
// }

// let prefix=strs[0];
// for (let i=1;i<strs.length;i++){
//     let j=0;
//     while(j<prefix.length && j<strs[i].length && prefix[j]===strs[i][j]){
//         j++;
//     }
//     prefix=prefix.slice(0, j);
//     if(prefix===""){
//         console.log("");
//     }
// }
// console.log(prefix);


//Given a string s, return true if it is a palindrome, or false otherwise. After converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters.

// let str="A man, a plan, a canal: Panama"; 
// str=str.toLowerCase().replace(/[^a-z0-9]/g,'');
// let ans=str.split('').reverse().join('');
// console.log(ans===str);

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

// function isValid(s){
//     const stack=[];
//     const openBrackets=['(', '{', '['];
//     const closingBrackets=[')', '}', ']'];
//     const bracketMap={
//       ')': '(',
//       '}': '{',
//       ']': '['
//     };
  
//     for(let i=0; i<s.length; i++){
//       const char=s[i];
//       if(openBrackets.includes(char)){
//         stack.push(char);
//       }else if(closingBrackets.includes(char)){
//         if(stack.length===0 || stack.pop() !== bracketMap[char]){
//           return false;
//         }
//       }
//     }
  
//     return stack.length===0;
//   }
//   const inputString="{[()]}";
//   console.log(isValid(inputString));
  


//Given two strings s and t, return true if t is an anagram of s, and false otherwise. An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

// function isAnagram(s, t){
//     if(s.length !== t.length){
//       return false;
//     }
//     const charCount={}; 
//     for(let char of s){
//       charCount[char]=(charCount[char] || 0) + 1;
//     }
//     for(let char of t){
//       if(!charCount[char]){
//         return false;
//       }
//       charCount[char]--;
//     }
//     return true;
//   }
//   const s="anagram";
//   const t="nagaram";
//   console.log(isAnagram(s, t));
  


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