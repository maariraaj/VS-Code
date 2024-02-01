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


//Class without using constructor:
//conditions:
//1 - 'getInfo()' which takes the salary, number of hours of work per day of employee as parameter and initializes the attributes. (Note there is no constructor instead getInfo method is used)

// 2 - 'AddSal()' which adds 10 to salary of the employee if it is less than 500. (note you don't have to print or return anything)

// 3 - 'AddWork()' which adds 5 to salary of employee if the working_hours is more than 6 hours. (note you don't have to print or return anything)

// class Employee
// {
//     //Write the code here
//     getInfo(sal, wh){
//        this.salary=sal;
//        this.wh=wh; 
//     }
//     AddSal(){
//         if(this.salary<500){
//             this.salary += 10;
//         }
//     }
//     AddWork(){
//         if(this.wh>5){
//             this.salary += 5;
//         }
//     }
// }
// let t=new Employee();
// t.getInfo(400,7);
// t.AddSal();
// t.AddWork();
// console.log(t.salary);
// let x=new Employee();
// x.getInfo(600,8);
// x.AddSal();
// x.AddWork();
// console.log(x.salary);

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


// class car{

// }
// car.company_name="Hyundai";  //static methot

// let obj= new car();
// obj.color="red";
// console.log(obj.color);
// console.log(obj.company_name);  // it will not work for static method.
// obj.company_name="Maruti Suzuki";
// console.log(car.company_name);  //it will work for static method.


// class car{
//     static company_name="Maruti";
//     print_details(){
//         console.log(car.company_name);
//         console.log(this.color);
//     }
// }
// //car.company_name="Hyundai";
// let obj=new car();
// obj.color="red";
// obj.print_details();


//calculate the no.of objects that has been created in realtime.

// class count_objects
// {
//     constructor(){
//         count_objects.i++;
//     }
    
// }

// count_objects.i=0;

// let a = new count_objects();
// let b = new count_objects();
// let c = new count_objects();
// console.log(count_objects.i);
// let d = new count_objects();
// console.log(count_objects.i);
// let e = new count_objects();
// console.log(count_objects.i);


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


//method of parent class by object of child class

// class PARENT{
//     print(){
//         console.log("this is a parent class")
//     }
// }  
// class CHILD extends PARENT{
//     print(){
//         console.log("this is a child class");
//         super.print();
//     }
// }
// let obj_parent = new PARENT();
// obj_parent.print();

// let obj_child = new CHILD();
// obj_child.print();


//BINARY SEARCH

// let search = function(nums, target) {
//     let l=0, h=nums.length-1;
    
//     while(l<=h){
//         let  mid=Math.floor((l+h)/2);
//         if(target==nums[mid]){
//            return(mid);
//         }else if(target<nums[mid]){
//             h=mid-1;
//         }else{
//             l=mid+1;
//         }
//     }return(-1);
// };
// console.log(search([1,3,6,12,14,17,25,29,31,36,42,47,53,55,62],42));


//find a peak element, and return its index. If the array contains multiple peaks, return the index to any of the peaks.

// function findPeakElement(nums){
//     let l=0, h=nums.length-1;
//     while(l<h){
//         let mid=Math.floor((l+h)/2);
//         if(nums[mid]>nums[mid+1]){
//             h=mid;
//         }else{
//             l=mid+1;
//         }
//     }
//     // At the end of the loop, l==h and points to a peak
//     return l;
// }
// const nums = [1,2,1,3,5,6,4];
// console.log(findPeakElement(nums));


//Find the Starting and ending Position of a given Target value

// function searchRange(nums, target) {
//     let l = findFirstOccurrence(nums, target);
//     if (l === -1) {
//         return [-1, -1];
//     }
    
//     let h = findLastOccurrence(nums, target);
//     return [l, h];
// }

// function findFirstOccurrence(nums, target){
//     let l=0;
//     let h=nums.length-1;
//     let firstOccurrence=-1;
    
//     while(l<=h){
//         let mid=Math.floor((l+h)/2);
        
//         if(nums[mid]>=target){
//             if(nums[mid]===target){
//                 firstOccurrence=mid;
//             }
//             h=mid-1;
//         }else{
//             l=mid+1;
//         }
//     }
    
//     return firstOccurrence;
// }

// function findLastOccurrence(nums, target){
//     let l=0;
//     let h=nums.length-1;
//     let lastOccurrence=-1;
    
//     while (l<=h) {
//         let mid=Math.floor((l+h)/2);
        
//         if(nums[mid]<=target){
//             if(nums[mid]===target){
//                 lastOccurrence=mid;
//             }
//             l=mid+1;
//         }else{
//             h=mid-1;
//         }
//     }
    
//     return lastOccurrence;
// }
// console.log(searchRange([5, 7, 7, 8, 8, 10], 8));


//Given the array nums after the possible rotation and an integer target, return the index of target if it is in nums, or -1 if it is not in nums.

// function search(nums, target){
//     let l=0;
//     let h=nums.length-1;

//     while(l<=h) {
//         let mid=Math.floor((l+h)/2);

//         if(nums[mid]===target){
//             return mid;
//         }
//         if(nums[l]<=nums[mid]){
//             if(target>=nums[l] && target<=nums[mid]){
//                 h=mid-1;
//             }else{
//                 l=mid+1;
//             }
//         }else{
//             if(target>nums[mid] && target<=nums[h]){
//                 l=mid+1;
//             }else{
//                 h=mid-1;
//             }
//         }
//     }
//     return -1;
// }

// console.log(search([6,7,0,1,2,4,5], 6));