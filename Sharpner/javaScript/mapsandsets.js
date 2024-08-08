//MAP

// let a={};
// let b=new Map();

// b.set(1,5);
// if(b.get(4)==undefined){
//     b.set(4,1);
// }
// b.set("abcd",7);

// console.log(b);
// console.log(b.get(1));
// console.log(b.get(4));
// console.log(b.get("abcd"));

// let myMap=new Map();

// myMap.set(1, "I");
// myMap.set(2, "Love");
// myMap.set(3, "You");

// console.log(myMap);

// for(let k of myMap.keys()){
//     console.log(`Key is ${k}`);
// }
// for(let v of myMap.values()){
//     console.log(`Value is ${v}`);
// }
// for(let [ke, va] of myMap){
//     console.log(`Key is : ${ke} and Value is : ${va}`);
// }
// myMap.forEach((val, key)=>console.log(`${key} : ${val}`));

// myMap.delete(3);
// console.log(myMap);


//SET

// let c=new Set();

// c.add(5);
// console.log(c);


// let mySet=new Set();

// mySet.add(69);
// mySet.add(96);
// mySet.add({
//     name: 'Prabha',
//     age:22
// });
// mySet.add("Mariraj");
// mySet.add(69.69);

// console.log(mySet);
// console.log("Size of my set is", mySet.size);
// console.log("Does the set has the number 25?", mySet.has(25));
// console.log("Does the set has the number 69?", mySet.has(69));

// mySet.delete(96);

// for(let i of mySet){
//     console.log(i);
// }

// let arr=Array.from(mySet);
// console.log(arr);


//remove repetitive elements

// let x="abcddcabxyzhfiiyuhlhhhf";
// let m=new Map();

// for(let i=0;i<x.length;i++){
//     if(m.get(x[i])==undefined){
//         m.set(x[i], 1);
//     }else{
//         m.set(x[i], m.get(x[i])+1);
//     }
// }
// let str="";
// for(let j=0;j<x.length;j++){
//     if(m.get(x[j])==1){
//         str += x[j];
//     }
// }
// console.log(m);
// console.log(str);


//return true if sentence is a pangram, or false otherwise. A pangram is a sentence where every letter of the English alphabet appears at least once.

// let sen="thequickbrownfoxjumpsoverthelazydog";
// let s=new Set();
// let count=0;
// for(let i=0;i<sen.length;i++){
//     if(!s.has(sen[i])){
//         s.add(sen[i]);
//         count ++;
//     }
// }if(count==26){
//     console.log(true);
// }else{
//     console.log(false);
// }


//Return the number of consistent strings in the array words.A string is consistent if all characters in the string appear in the string allowed.

// let allowed="ab";
// let words=["ad","bd","aaab","baa","badab"];
// let s=new Set(allowed);
// let count=0;

// for(let word of words){
//     let consistent=true;
//     for(let char of word){
//         if(!s.has(char)){
//             consistent=false;
//             break;
//         }
//     }
//     if(consistent){
//         count++;
//     }
// }console.log(count);



//Given an array nums of size n, return the majority element. The majority element is the element that appears more than ⌊n / 2⌋ times. You may assume that the majority element always exists in the array.

// var majorityElement = function (nums) {
//     let m = new Map();
//     for (let num of nums) {
//         m.set(num, (m.get(num) || 0) + 1)
//     }
//     for (let num of nums) {
//         if (m.get(num) >= Math.ceil(nums.length / 2)) {
//             return num;
//         }
//     }
// };
// console.log(majorityElement([2, 2, 1, 1, 1, 2, 2]));


//Return the largest lucky integer in the array. If there is no lucky integer return -1, a lucky integer is an integer that has a frequency in the array equal to its value.

// let x=[2,2,3,3,3,3,3];
// let a={};
// let b=new Map();
// let arr=[];
// for(let i=0; i<x.length;i++){
//     if(b.get(x[i])==undefined){
//         b.set(x[i], 1);
//     }else{
//         b.set(x[i], b.get(x[i])+1)
//     }
// }
// for(let [k, v] of b){
//     if(k==v){
//         arr.push(k);
//     }
// }
// if(arr.length==0){
//     console.log(-1);
// }else{
//     let max=arr[0];
//     for(let i=0;i<arr.length;i++){
//         if(arr[i]>max){
//             max=arr[i];
//         }
//     }console.log(max);
// }


//find the pair whose sum is eq to k

// let x=[1,6,4,9,12,14,16];
// let k=16;
// let s=new Set();

// for(let i=0;i<x.length;i++){
//     let a=x[i];
//     let b=k-a;
//     if(s.has(b)){
//         console.log(b, a);
//         break;
//     }else{
//         s.add(a);
//     }
// }
// //console.log(s);



//Given an unsorted array and a number n, find if there exists a pair of elements in the array whose difference is n.

// function findPairWithDifference(arr, n) {
//     arr.sort((a, b) => a - b);
//     let i = 0;
//     let j = 1;
//     while (j < arr.length) {
//         const diff = arr[j] - arr[i];
//         if (diff === n) {
//             return [arr[i], arr[j]];
//         } else if (diff < n) {
//             j++;
//         } else {
//             i++;
//             // Ensure i is always less than j
//             if (i === j) {
//                 j++;
//             }
//         }
//     }
//     return "No such pair";
// }
// const arr = [5, 20, 3, 2, 50, 80];
// const n = 78;
// const pair = findPairWithDifference(arr, n);
// if (pair !== "No such pair") {
//     console.log(`Pair with difference ${n}:`, pair);
// } else {
//     console.log("No such pair with difference", n);
// }

//Return indices of the two numbers such that they add up to target.

// let x=[2, 7, 11, 15];
// let k=26;

// let m=new Map();

// for(let i=0; i<x.length; i++){
//     let a=x[i];
//     let b=k-a;

//     if(m.has(b)){
//         console.log([m.get(b), i]);
//     }
//     m.set(x[i], i);
// }

//Return the toltal no.of jewels in stones

// let jewels="aA";
// let stones="aAAbbbb";

// let jSet=new Set(jewels);
// let count=0;

// for(let stone of stones){
//     if(jSet.has(stone)){
//         count++;
//     }
// }
// console.log(count);



//Return the output should be true if subarray present in array whose sum is 0 and return false if not.

// let arr=[4, 2, -3, 1, 6];
// function hasZeroSumSubarray(arr){
//     let sum=0;
//     let sumMap=new Map();
//     for(let i=0; i<arr.length;i++){
//         sum += arr[i];
//         if(sum===0 || sumMap.has(sum) || arr[i]===0){
//             return true;
//         }
//         sumMap.set(sum, i);
//     }
//     return false;
// }
// console.log(hasZeroSumSubarray(arr));



//Every student have different id but twins have same id . Task is to find whether twins are present in given array or not.

// let containsTwins = function (nums) {
//     let s = new Set();
//     for (let num of nums) {
//         if (s.has(num)) {
//             return true;
//         }
//         s.add(num);
//     }
//     return false;
// };
// console.log(containsTwins([1, 2, 3, 1]));


//find the Super hill and return its index if more then one Super hills are there return any one of index .
//The Super hill is the hill which is taller than its neighbors hills .

// let arr = [1, 2, 1, 3, 5, 6, 4];
// let m = new Map();
// let max = arr[0];
// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] >= max) {
//         max = arr[i];
//         m.set(max, i);
//     }
// }
// console.log(m.get(max));



// find the first non-repeating character in it and return its index. If it does not exist, return -1.

// function firstUniqChar(s) {
//     const charCount = new Map();

//     for (const char of s) {
//         charCount.set(char, (charCount.get(char) || 0) + 1);
//     }

//     for (let i = 0; i < s.length; i++) {
//         if (charCount.get(s[i]) === 1) {
//             return i;
//         }
//     }

//     return -1;
// }
// console.log(firstUniqChar("loveleetcode"));



//Determine if a 9 x 9 Sudoku board is valid.

// let isValidSudoku = function (board) {
//     let rowSets = Array.from({ length: 9 }, () => new Set());
//     let colSets = Array.from({ length: 9 }, () => new Set());
//     let boxSets = Array.from({ length: 9 }, () => new Set());

//     for (let i = 0; i < 9; i++) {
//         for (let j = 0; j < 9; j++) {
//             let cell = board[i][j];

//             if (cell !== '.') {
//                 let boxIndex = Math.floor(i / 3) * 3 + Math.floor(j / 3);
//                 if (rowSets[i].has(cell) || colSets[j].has(cell) || boxSets[boxIndex].has(cell)) {
//                     return false;
//                 }

//                 rowSets[i].add(cell);
//                 colSets[j].add(cell);
//                 boxSets[boxIndex].add(cell);
//             }
//         }
//     }
//     return true;
// };

// const board = [
//     ["5", "3", ".", ".", "7", ".", ".", ".", "."],
//     ["6", ".", ".", "1", "9", "5", ".", ".", "."],
//     [".", "9", "8", ".", ".", ".", ".", "6", "."],
//     ["8", ".", ".", ".", "6", ".", ".", ".", "3"],
//     ["4", ".", ".", "8", ".", "3", ".", ".", "1"],
//     ["7", ".", ".", ".", "2", ".", ".", ".", "6"],
//     [".", "6", ".", ".", ".", ".", "2", "8", "."],
//     [".", ".", ".", "4", "1", "9", ".", ".", "5"],
//     [".", ".", ".", ".", "8", ".", ".", "7", "9"]
// ];
// console.log(isValidSudoku(board));



//Starting with any positive integer, replace the number by the sum of the squares of its digits. Repeat the process until the number equals 1 (where it will stay), or it loops endlessly in a cycle which does not include 1. Those numbers for which this process ends in 1 are happy. Return true if n is a happy number, and false if not.

// var isHappy = function (n) {
//     const seen = new Set();
//     while (n !== 1 && !seen.has(n)) {
//         seen.add(n);
//         n = getNext(n);
//     }

//     return n === 1;
// };
// function getNext(n) {
//     let sum = 0;
//     while (n > 0) {
//         let digit = n % 10;
//         sum += digit * digit;
//         n = Math.floor(n / 10);
//     }
//     return sum;
// };
// console.log(isHappy(19));