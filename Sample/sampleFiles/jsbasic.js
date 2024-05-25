// let num=5/0;
// let num1=5.6;
// let s="Raj";

// console.log(typeof(num1));
// console.log(typeof(s));
// console.log(num);
// console.log(Number.MAX_VALUE);
// console.log(1e5);

// //Big Integer
// let bnum=13213213213256542132132n;
// console.log(bnum+2n);


// // Constructor function for Person objects
function Person(first, last, age, eye) {
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.eyeColor = eye;
  }
  
  // Create 2 Person objects
  const myFather = new Person("John", "Doe", 50, "blue");
  const myMother = new Person("Sally", "Rally", 48, "green");
  
  // Add nationality to first object
  myFather.nationality = "English";
  myMother.age=99;

  console.log(myMother);






// let input='name';

// let alien={
//     name:'Prabha',
//     tech:'JS',
//     'work exp':4
// }
// console.log(alien);
// console.log(alien['work exp']);
// console.log(alien[input]);
// console.log(alien.name);


//Map

let map=new Map();

map.set("Mari", "JS");
map.set("Raj","HTML");
map.set("Prabha", "CSS");

map.set("Mari","C++");

for(let [key,val] of map){
    console.log(key, " : ", val);
}

map.forEach((val,key)=>{    //it gets first value then key
    console.log(key, " : ",val);
})

// let nums=[11,21,31,41,51,61,71,12,32,88];

// // nums.forEach(n=>{
// //     console.log(n);
// // });

// console.log(nums.filter(n=>n%2===0)
//     .map(n=>n*2)
//     .forEach(n=>console.log(n)));



let nums=[1,2,3,4,5,6];
let result=nums.filter(n=>n%2===0)
    .map(n=>n*2)
    .reduce((a,b)=>a+b);
console.log(result);





