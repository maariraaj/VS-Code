//Array Destructuring

const mob=["91", "98765", "43210"];
let country=mob[0];
let op=mob[1];
let sub=mob[2];

let [country1, op1, sub1]=mob;

console.log(country1);
console.log(op1);
console.log(sub1);



//Object Destructuring

const person={
    fName:"Mari",
    lName:"Muthu",
    age:28,
};
// person.fName="Prabha";
// person.lName="Raj";
// person.age="22";

console.log(person);