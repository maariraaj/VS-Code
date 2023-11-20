//Print the largest number 

// let a=5, b=6, c=3;
// if(a>=b && a>=c){
//     console.log("A is the largest");
// }else if(b>=c){
//     console.log("B is the largest");
// }else{
//     console.log("C is the largest");
// }


//Print the even numbers using while loop

// let x=2;
// let n=10
// while(x<=10){
//     console.log(x);
//     x+=2;
// }


//Print the following series using while loop 1 4 9 16 25 36 …. n

// let x=1;
// let n=49;
// let i=3;
// while(x<=49){
//     console.log(x);
//     x+=i;
//     i+=2;
// }

// let i=1;
// let n=49;
// while(i*i<=n){
//     console.log(i*i);
//     i=i+1;
// }

//whether a person has failed or passed using ternary Operator.

// let x, marks=32;
// x=marks>=40 ? "pass" : "fail";
// console.log(x);

//Switch case

// let n=2;
// switch(n){
//     case 1: 
//         console.log("monday");
//         break;
//     case 2:
//         console.log("tuesday");
//         break;
//     case 3:
//         console.log("wednesday");
//         break;
//     case 4:
//         console.log("thursday");
//         break;
//     case 5:
//         console.log("friday");
//         break;
//     case 6:
//         console.log("saturday");
//         break;
//     case 7:
//         console.log("sunday");
//         break;
//     default: console.log("invalid");
//}

//Print all number from 1 to n but then it should not be divisible by 5

// let i=1, n=17;
// while(i<=n){
//     if(i%5==0){
// }  
// else{
//     console.log(i);
// }
// i=i+1;
// }

//another method using "continue"

// let n=17;
// for(let i=1;i<=n;i++){
//     if(i%5==0){
//        continue;
// }  
// else{
//     console.log(i);
// }
// }

//Break the loop if the number is divisible by 5

// let n=17;
// for(let i=1;i<=n;i++){
//     if(i%5==0){
//        break;
// }  
// else{
//     console.log(i);
// }
// }

//print the digits of a number 
// let x, n=153;
// while(n>0){
//     x=n%10;
//     console.log(x);
//     n-=x;
//     n/=10;
// }

// Armstrong number: a number in which all the sum of cubes of digits is equal to the number

// let x, n=153, sum=0;
// let temp=n;
// while(temp>0){
//     x=temp%10;
//     sum+=x*x*x;
//     temp-=x;
//     temp/=10;  //instead of using temp-=x; and temp/=10; we can use   temp = Math.floor(temp/10);
// }
// if(sum==n){
//     console.log("It is an Armstrong number");
// }else{
//     console.log("It is not an Armstrong number");
// }


//return the reverse of a number

// let n=123456, x, sum=0;
// while(n>0){
//     x=n%10;
//     sum=(sum*10)+x;
//     n=Math.floor(n/10);
// }
// console.log(sum);

