//JAVASCRIPT EXAMPLES:

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



//Print the numbers from 1 to n in an array

// let a=Array();  //or let a=[];
// let n=50;
// for(let i=1;i<=n;i++){
//     a.push(i);
// }console.log(a);


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


//Maximum in an array

// const arr=[5,4,-1,8,12,54,6];
// let max=arr[0];
// for(let i=0;i<arr.length;i++){
//     if(arr[i]>max){
//         max=arr[i];
//     }
// }console.log(max);


//store first n prime numbers in an array

// let n=20;
// let arr=[];
// let x=2;
// while(arr.length<n){
//     let flag=true;
//     for(let i=2;i<x;i++){
//         if(x%i==0){
//             flag=false;
//             break;
//         }
//     }if(flag){
//         arr.push(x);  
//     }x+=1;
// }console.log(arr);


//find the maximum sum subarray

// let arr=[5,2,-4,-5, 3,-1,2,3,1];
// let max=arr[0];
// for(let i=0;i<arr.length;i++){
//     for(let j=i;j<arr.length;j++){
//         let sum=0;
//         for( let k=i;k<=j;k++){
//             sum=sum+arr[k];
//         }
//         if(max<sum){
//             max=sum;
//         }
//     }
// }console.log("Maximum Sum Subarray:",max);

//another method without using j and k loop

// function maxSubarraySum(arr) {
//     let maxEndingHere = arr[0];
//     let maxSoFar = arr[0];

//     for (let i = 1; i < arr.length; i++) {
//         maxEndingHere = Math.max(arr[i], maxEndingHere + arr[i]);
//         maxSoFar = Math.max(maxSoFar, maxEndingHere);
//     }

//     return maxSoFar;
// }

// // Example usage:
// const array = [5,2,-4,-5, 3,-1,2,3,1];
// const result = maxSubarraySum(array);
// console.log("Maximum Sum Subarray:", result);


//Find the running sum of an array

// let arr=[1,2,3,4];
// let ans=[], sum=0;
// for(let i=0;i<arr.length;i++){
//     sum+=arr[i];
//     ans.push(sum);
// }console.log(ans);


//Find the max in an 2D array

// let arr=[[1,2,3],[3,4],[5,6,7,8]];
// let ans=[];
// for(let i=0;i<arr.length;i++){
//     let sum=0;
//     for(let j=0;j<arr[i].length;j++){
//         sum+=arr[i][j];       
//     }ans.push(sum);
// }
// let max=ans[0];
// for(let k=0;k<ans.length;k++){
//     if(ans[k]>max){
//         max=ans[k];
//     }
// }console.log(max);

//another simple method without using k loop

// let arr=[[1,2,3],[3,4],[5,6,7,8]];
// let max=0;
// for(let i=0;i<arr.length;i++){
//     let sum=0;
//     for(let j=0;j<arr[i].length;j++){
//         sum+=arr[i][j];       
//     }
//     if(sum>max){
//         max=sum;
//     }
// }console.log(max);


//Find the sum of all possible odd-length subarrays of an array

// let arr = [1,4,2,5,3];
// let ans = 0;
// for (let i=0;i<arr.length;i++){
//     for (let j=i;j<arr.length;j++){
//         if ((j-i+1)%2==1){
//             let currentSum=0;
//             for (let k=i;k<j+1;k++){
//                 currentSum += arr[k];
//             }
//             ans += currentSum;
//         }
//     }
// }
// console.log(ans);


//Bubble Sort

// let arr=[5,7,-3,43,69,96,-69];

// for(let i=0;i<arr.length;i++){
//     let swap=0;
//     for(let j=0;j<arr.length-1;j++){
//         if(arr[j+1]>arr[j]){
//             let temp=arr[j];
//             arr[j]=arr[j+1];
//             arr[j+1]=temp;
//             swap += 1;
//         }
//     }
//     if(swap==0){
//         break;
//     }
// }console.log(arr);


//Insertion Sort

// let arr=[5,7,-3,43,69,96,-69];

// for(let i=1;i<arr.length;i++){
//     let temp=arr[i];
//     let j=i-1;
//     while(j>=0 && temp>arr[j]){
//         temp=arr[j+1];
//         arr[j+1]=arr[j];
//         arr[j]=temp;
//         j -= 1;
//     }arr[j+1]=temp;
// }console.log(arr);


//Selection Sort

// let arr=[5,7,-3,43,69,96,-69];

// for(let i=0;i<arr.length;i++){
//     let max=arr[i];
//     let index=i;
//     for(let j=i+1;j<arr.length;j++){
//         if(arr[j]>max){
//             max=arr[j];
//             index=j;
//         }
//     }
//     let temp=arr[i];
//     arr[i]=arr[index];
//     arr[index]=temp;
// }console.log(arr);


//String

// let x="Mariraj";

// console.log(x);
// console.log(x[1]);
// console.log(x.length);
// console.log(x.substring(2,5));

// for(let i=0;i<x.length;i++){
//     console.log(x[i]);
// };
//to know ASCII value of a character
// let a=x.charCodeAt(0);
// console.log(a);

// let y="Muthuprabha";
// console.log(y+" "+x);


//Return the maximum number of words

// let str= ["alice and bob love leetcode", "i think so too", "this is great thanks very much"];
// let max=0, arr=[];

// for(let i=0;i<str.length;i++){
//     arr[i]=str[i].split(" ");
//     if(arr[i].length>max){
//         max=arr[i].length;
//     }
// }console.log(max);

