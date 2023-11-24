class Person{
    constructor(fName, lName){
        this._firstName=fName;
        this._lastName=lName;
    }
    get fullName(){
        return `${this._firstName} ${this._lastName}`
    }
    get firstName(){
        return this._firstName;
    }
    get lastName(){
        return this._lastName;
    }
    set fullName(name){
        [this._firstName, this._lastName]=name.split(" ");
    }
}

let person=new Person("Muthuprabha", "Mariraj");

console.log(person.fullName);
person.fullName="Thirumalai Kumar";
console.log(person.firstName);
console.log(person.lastName);