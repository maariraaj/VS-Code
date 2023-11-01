const obj1={name:"Mari", age:28,sex:"male"};
const keys1=Object.keys(obj1).sort();
console.log(keys1);

const obj2={name:"Mari", age:28,sex:"male"};
const keys2=Object.keys(obj2).sort();
console.log(keys2);
if(JSON.stringify(keys1)===JSON.stringify(keys2)){
    console.log("Equal");
}else{
    console.log("not equal");
}