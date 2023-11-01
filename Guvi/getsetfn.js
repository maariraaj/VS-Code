// class Animal{
//     constructor(){
//         this.name=true;
//     }
//     get message(){
//         return `This is from class Animal ${this.name}`;
//     }
//     set message(name){
//         this.name=name;
//     }
// }
// const animal= new Animal();
// console.log(animal.message);
// animal.message="Prabha";
// console.log(animal.message);
// animal.message="Raj";
// console.log(animal.message);


class Maths{
    constructor(){
        this.a=10;
        this.b=20;
        this.operation="add";
    }
    set message(operation){
        this.operation=operation;
    }
    calculation(){
        if(this.operation==="add"){
            console.log(this.a+this.b);
        } 
        if(this.operation==="sub"){
            console.log(this.a-this.b);
        }
    }
}
const maths=new Maths();
// maths.message="add";
maths.message="sub";
maths.calculation();