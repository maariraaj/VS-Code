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



//arrange all the roll numbers in ascending order and Find the number of changes required to do so that number should be minimum

// let arr=[10, 19, 6, 5, 3]
// let changes=0;
// for(let i=0;i<arr.length;i++){
//     let min=arr[i];
//     let index=i;
//     for(let j=i+1;j<arr.length;j++){
//         if(arr[j]<min){
//             min=arr[j];
//             index=j;
//         }
//     }
//     if(index !== i){
//         let temp=arr[i];
//         arr[i]=arr[index];
//         arr[index]=temp;
//         changes++;
//     }
// }
// console.log(changes);

