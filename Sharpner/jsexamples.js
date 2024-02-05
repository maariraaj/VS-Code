//JAVASCRIPT EXAMPLES:

//Print the largest number 

// let a=5, b=6, c=3;
// if(a>b && a>c){
//     console.log("A is the largest");
// }else if(b>c){
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
//     n=Math.floor(n/10);
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

// const arr=[5,5,4,-1];
// let max=arr[0];
// for(let i=0;i<arr.length;i++){
//     if(arr[i]>max){
//         max=arr[i];
//     }
// }console.log(max);


//store first n no. of prime numbers in an array

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


//store first n prime number

// let arr=[];

// for(let num=2;num<10;num++){
//     let flag=true;
//     for(let i=2;i<num;i++){
//         if(num%i===0){
//             flag=false;
//             break;
//         }
//     }if(flag){
//         arr.push(num)
//     }
// }

// console.log(arr);

//return the number of prime numbers that are strictly less than n. Using the Sieve of Eratosthenes algorithm to efficiently find prime numbers up to n.

// const n = 12;
// const isPrime=[];
// for(let i=2;i<n;i++){
//     isPrime[i]=true;
// }
// isPrime[0] = false;
// isPrime[1] = false;
// for (let i=2;i*i<n;i++) {
//     if(isPrime[i]){
//         for(let j=i*i;j<n;j+=i) {
//             isPrime[j]=false;
//         }
//     }
// }
// let count=0;
// for (let i=2;i<n;i++){
//     if(isPrime[i]){
//         count++;
//     }
// }
// console.log(count);
 

//write the code to print all the subarrays possible

// let arr=[1,2,3,4,5];

// for(let i=0;i<arr.length;i++){
//     for(let j=i;j<arr.length;j++){
//         let str="";
//         // let str=[];
//         for( let k=i;k<=j;k++){
//             str=str+arr[k];
//             // str.push(arr[k]);
//         }console.log(str);
//     }
// }

//another method wthout using k loop

// const arr = [1, 2, 3, 4];

// for (let i = 0; i < arr.length; i++) {
//     for (let j = i; j < arr.length; j++) {
//     const subarray = arr.slice(i, j + 1);
//     console.log(subarray);
//     }
// }
  


//find the maximum sum subarray

// let arr=[5,2,-4,-5, 3,-1,2,3,1];
// let max=arr[0];
// for(let i=0;i<arr.length;i++){
//     for(let j=i;j<arr.length;j++){
//         let sum=0;
//         for( let k=i;k<=j;k++){
//             sum=sum+arr[k];
//         }
//         if(sum>max){
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

// let arr=[5,7,-3,43,6,-4,3];

// for(let i=1;i<arr.length;i++){
//     let temp=arr[i];
//     let j=i-1;
//     while(j>=0 && temp<arr[j]){
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


//Rotate the array to the right by k steps, where k is non-negative.
//(try to solve in time complexity 0(n) with extra space)

// let arr = [1, 2, 3, 4,5];
// let k = 5;


// // Check if array is empty or if rotation is not needed
// if (arr.length === 0 || k % arr.length === 0) {
//     console.log(arr); ;
// }

// // Normalize rotation if it's greater than array length
// k = k % arr.length;

// // Reverse the entire array
// reverse(arr, 0, arr.length - 1);
// console.log(arr);

// // Reverse the first part up to K
// reverse(arr, 0, k - 1);
// console.log(arr);

// // Reverse the remaining part from K to end
// reverse(arr, k, arr.length - 1);

// console.log("Rotated Array:", arr);


// function reverse(arr, start, end) {
//     while (start < end) {
//         let temp = arr[start];
//         arr[start] = arr[end];
//         arr[end] = temp;
//         start++;
//         end--;
//     }
// }

//String

// let x="Mariraj";

// console.log(x);
// console.log(x[1]);
// console.log(x.length);
// console.log(x.substring(2,5));

// for(let i=0;i<x.length;i++){
//     console.log(x[i]);
// };
// // to know ASCII value of a character
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
// //console.log(arr);


//Extract numbers from a string

// let s="I have 3 apples and 5 oranges, totaling 8 fruits.";
// let a = ["1","2","3","4","5","6","7","8","9","0"];
// let b = "";
// let c = [];
// for(let i=0;i<s.length;i++){
//     if(a.includes(s[i]) && a.includes(s[i+1])){
//         b=b+s[i];
//     }else if(a.includes(s[i]) && a.includes(s[i+1])==false) {
//         b=b+s[i];
//         c.push(b);
//         b = "";
//     }
// }
// console.log(c);

//Another Method

// let str = "I have 35 apples and 655 oranges, totaling 690 fruits69";
// let arr = [];
// let currentNumber = '';

// // Iterate through each character of the input string
// for (let i = 0; i < str.length; i++) {
//     let char = str.charAt(i);
//     //console.log("char", char);
//     // Check if the character is a digit
//     if (!isNaN(parseInt(char))) {
//         currentNumber += char; // Add the digit to the current number string
//         //console.log("currentNumber", currentNumber);
//     } else if (currentNumber !== '') 
//         // If the current number string is not empty, add it to the arr
//         {
//             arr.push(currentNumber);
//            // console.log("array", arr);
//             currentNumber = ''; // Reset the current number string
//         }
    
// }

// // Add the last number if the string ends with a number
// if (currentNumber !== '') {
//     arr.push(currentNumber);
// }

// console.log(arr);


//find the number of characters required to add to make it a palindrome

// const str = "abcd";

// if (isPalindrome(str)) {
//     console.log(0); 
// } else {
//     console.log(minCharsToAdd(str));
// }

// function isPalindrome(s) {
//     return s === s.split('').reverse().join('');
// }

// function minCharsToAdd(s) {
//     let count = 0;
//     while (!isPalindrome(s)) {
//         s = s.slice(0, -1);
//         count++;
//     }
//     return count;
// }



//Find no. of set bits(1's) in a number:
// let num=19;
// let count=0;
// for(let i=0;i<32;i++){
//     if(((num>>i)&1)==1){
//         count += 1;
//     }
// }console.log(count);


//find alternating bit (if two adjacent bits will always have different values)

// let n=5;
// let flag=1;
// while(n>0){
//     let x=n&1;
//     let y=((n>>1)&1);
//     if(x ^ y ==0){
//         flag=0;
//         console.log(false);
//     }
//     n=n>>1;
// }
// if(flag==1){
//     console.log(true);
// }


// first, by the number of set bits (1s) in the binary representation of each element (with fewer set bits coming first), and second, if there's a tie in the bit count, by the numerical value (with smaller values coming first)

// let arr=[5, 3, 7, 10, 15];
// for (let i = 0; i < arr.length; i++){
//     for (let j = i + 1; j < arr.length; j++){
//         let count1 = 0, n1 = arr[i];
//         while (n1 > 0) {
//             count1 += n1 & 1;
//             n1= n1>> 1;
//         }
//         let count2 = 0, n2 = arr[j];
//         while (n2 > 0) {
//             count2 += n2 & 1;
//             n2= n2 >> 1;
//         }
//         if (count1 > count2 || (count1 == count2 && arr[i] > arr[j])) {
//             let temp = arr[i];
//             arr[i] = arr[j];
//             arr[j] = temp;
//         }
//     }
// }
// console.log(arr); 


