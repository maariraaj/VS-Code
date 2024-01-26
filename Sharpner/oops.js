//CLASS

// class car{
//     print_attributes(){
//         console.log(this.name);
//         console.log(this.color);
//         console.log(this.speed);
//         console.log(this.tyres);
//     }
// }

// let my_santro= new car();
// my_santro.name="Santro"
// my_santro.color="red";
// my_santro.speed=100;
// my_santro.tyres=4;
// my_santro.print_attributes();

// let my_nexon= new car();
// my_nexon.name="Nexon"
// my_nexon.color="black";
// my_nexon.speed=200;
// my_nexon.tyres=4;
// my_nexon.print_attributes();


//CONSTRUCTOR

// class car{
//     constructor(n,c="white",s=50,ty=4){
//         this.name=n;
//         this.color=c;
//         this.speed=s;
//         this.tyres=ty;
//     }
//     print_attributes(){
//         console.log(this.name);
//         console.log(this.color);
//         console.log(this.speed);
//         console.log(this.tyres);
//     }
//     calculate_distance(time=69){
//         console.log(this.speed * time);
//     }
// }

// let my_santro= new car("Santro", "red", 100, 4);
// my_santro.print_attributes();
// my_santro.calculate_distance();

// let my_nexon= new car("Nexon", "Black", 200, 4);
// my_nexon.print_attributes();
// my_nexon.calculate_distance(96);

// let my_alto= new car("Alto");
// my_alto.print_attributes();


//INHERITANCE

class abc{
    constructor(a,b){
        this.y=a;
        this.z=b;
    }
    print(){
        console.log(this.y);
    }
}
class child extends abc{
    constructor(m,n,d){
        super(m,n);
    }
    print(){
        console.log("Print child method");
        super.print();
    }
}
let x=new child(3,4,5);
x.print();