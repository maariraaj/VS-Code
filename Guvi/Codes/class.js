class Person{
    constructor(fullName){
        this.name=fullName;
    }
    getName(){
        return this.name;
    }
}

class Employee extends Person{
    constructor(fName,id){
        super(fName);
        this.id=id;
    }
    getID(){
        return this.id;
    }

    getSum(a,b,c){
        return a+b+c;
    }
}
let emp=new Employee("Mariraj","7");
console.log(emp.getName());
console.log(emp.getID());

let arr=[10,20,30];
console.log(emp.getSum(...arr));



obj1={a:1, b:2, c:3};

obj2= Object.assign({},obj1);

console.log(obj2);

obj1.a=7

obj3={...obj1};
console.log(obj3);

obj1.a=8;
console.log("new1",obj2);
console.log("new1",obj3);


function foo(...args){
    console.log(args);
}
foo(100,200,300,400,500);
