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


//find the pair whose sum is eq to k, others will be stored in b

// let x=[1,6,4,9,12,14,16];
// let k=16;
// let b=new Set();

// for(let i=0;i<x.length;i++){
//     let new_ele=x[i];
//     a=k-new_ele;
//     if(b.has(a)){
//         console.log(a, new_ele);
//         break;
//     }else{
//         b.add(new_ele);
//     }
// }
// console.log(b);


