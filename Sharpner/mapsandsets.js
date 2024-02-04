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
// let a={};
// let b=new Map();

// for(let i=0;i<x.length;i++){
//     if(b.get(x[i])==undefined){
//         b.set(x[i], 1);
//     }else{
//         b.set(x[i], b.get(x[i])+1);
//     }
// }
// let str="";
// for(let j=0;j<x.length;j++){
//     if(b.get(x[j])==1){
//         str += x[j];
//     }
// }
// console.log(b);
// console.log(str);


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


//Return indices of the two numbers such that they add up to target.

// let x=[2, 7, 11, 15];
// let k=9;

// let m=new Map();

// for(let i=0; i<x.length; i++){
//     let a=x[i];
//     let b=k-a;
    
//     if(m.has(b)){
//         console.log([m.get(b), i]);
//     }   
//     m.set(x[i], i);
// }
