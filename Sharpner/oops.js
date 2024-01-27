//CLASS

// class Car{
//     constructor(year){
//         this.year=year;
//     }
//     color="";
//     travelling(){
//         console.log("Travelling");    
//     }
//     get_no_of_years=function(x){
//         console.log(x-this.year);
//     }
//     get_no_of_years=function(x,y){  //Polymorphism(in JS is function overwriting)
//         console.log(x+y-this.year);
//     }
// }

// let myCar1= new Car(2019);
// myCar1.color="red";
// console.log(myCar1.color);
// myCar1.travelling();
// myCar1.get_no_of_years(2024);
// myCar1.get_no_of_years(5,2024);


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


//STATIC

// class College{
//     static c_name="IIT";
//     constructor(cgpa){
//         this.cgpa=cgpa;
//     }
// }
// let Prabha=new College(9.5);
// let Mari=new College(6.9);

// console.log(College.c_name);
// College.c_name="VIT Chennai";
// console.log(College.c_name);


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

// class abc{
//     constructor(a,b){
//         this.y=a;
//         this.z=b;
//     }
//     print(){
//         console.log(this.y);
//     }
// }
// class child extends abc{
//     constructor(m,n,d){
//         super(m,n);
//     }
//     print(){
//         console.log("Print child method");
//         super.print();
//     }
// }
// let x=new child(3,4,5);
// x.print();


// class A{
//     constructor(c,d){
//         this.c=c;
//         this.d=d;
//     }
//     display(){
//         console.log("A is invoked");
//         console.log(this.c, this.d);
//     }
// }
// class B extends A{
//     constructor(a,b,c,d){
//         super(c,d);
//         this.a=a;
//         this.b=b;
//     }
//     hello(){
//         console.log("Hello, You are in class B...");
//     }
//     display(){
//         super.display();
//         console.log("B is invoked");
//         console.log(this.a, this.b, this.c, this.d);
//     }
// }

// let b=new B(1,2,3,4);
// b.display();
