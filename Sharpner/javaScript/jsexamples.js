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
//     temp=Math.floor(temp/10);
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

// let n = 20;
// let arr = [];
// let x = 2;
// while (arr.length < n) {
//     let flag = true;
//     for (let i = 2; i < x; i++) {
//         if (x % i == 0) {
//             flag = false;
//             break;
//         }
//     } if (flag) {
//         arr.push(x);
//     } x += 1;
// } console.log(arr);


//store first n prime number

// let arr = [];

// for (let num = 2; num < 10; num++) {
//     let flag = true;
//     for (let i = 2; i < num; i++) {
//         if (num % i === 0) {
//             flag = false;
//             break;
//         }
//     } if (flag) {
//         arr.push(num)
//     }
// }

// console.log(arr);

//return the number of prime numbers that are strictly less than n. Using the Sieve of Eratosthenes algorithm to efficiently find prime numbers up to n.

// const n=12;
// const isPrime=[];
// for(let i=2;i<n;i++){
//     isPrime[i]=true;
// }
// isPrime[0]=false;
// isPrime[1]=false;
// for (let i=2;i*i<n;i++){
//     if(isPrime[i]){
//         for(let j=i*i;j<n;j+=i){
//             isPrime[j]=false;
//         }
//     }
// }
// let count=0;
// for(let i=2;i<n;i++){
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



//to add two Matrices ( 2d Array). Return the resultant Array. Both the 2d Array will be of the same size.

// let arr1 = [[1, 1, 1], [2, 2, 2], [3, 3, 3]], arr2 = [[4, 4, 4], [5, 5, 5], [6, 6, 6]];
// let ans = [];
// for (let i = 0; i < arr1.length; i++) {
//     let temp = [];
//     for (let j = 0; j < arr1[i].length; j++) {
//         temp.push(arr1[i][j] + arr2[i][j]);
//     }
//     ans.push(temp);
// }
// console.log(ans);



//find the maximum sum subarray

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

// let arr = [[1, 2, 3], [3, 4], [5, 6, 7, 8]];
// let max = 0;
// for (let i = 0; i < arr.length; i++) {
//     let sum = 0;
//     for (let j = 0; j < arr[i].length; j++) {
//         sum += arr[i][j];
//     }
//     if (sum > max) {
//         max = sum;
//     }
// } console.log(max);


//Given a 2D integer array matrix, return the transpose of matrix.

// let matrix = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
// let arr = [];
// for (let i = 0; i < matrix[0].length; i++) {
//     arr[i] = [];
//     for (let j = 0; j < matrix.length; j++) {
//         arr[i][j] = matrix[j][i];
//     }
// }
// console.log(arr);



//Find the sum of all possible odd-length subarrays of an array. (LC 1588)

// let arr = [1, 2, 3];
// let totalSum = 0;
// for (let i = 0; i < arr.length; i++) {
//     let totalSb = (i + 1) * (arr.length - i);
//     let oddSb = Math.floor((totalSb + 1) / 2);
//     totalSum += arr[i] * oddSb;
// } console.log(totalSum);



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
//         if(arr[j]<max){
//             max=arr[j];
//             index=j;
//         }
//     }
//     let temp=arr[i];
//     arr[i]=arr[index];
//     arr[index]=temp;
// }console.log(arr);



//given two integer arrays nums1 and nums2, sorted in non-decreasing order, and two integers m and n, representing the number of elements in nums1 and nums2 respectively. Merge nums1 and nums2 into a single array sorted in non-decreasing order. The final sorted array should not be returned by the function, but instead be stored inside the array nums1. To accommodate this, nums1 has a length of m + n, where the first m elements denote the elements that should be merged, and the last n elements are set to 0 and should be ignored. nums2 has a length of n.

// function merge(nums1, m, nums2, n) {
//     let p1 = m - 1; // Pointer for nums1
//     let p2 = n - 1; // Pointer for nums2
//     let p = m + n - 1; // Pointer for the end of nums1
//     // Merge nums1 and nums2 starting from the end
//     while (p1 >= 0 && p2 >= 0) {
//         if (nums1[p1] > nums2[p2]) {
//             nums1[p] = nums1[p1];
//             p1--;
//         } else {
//             nums1[p] = nums2[p2];
//             p2--;
//         }
//         p--;
//     }
//     // Copy any remaining elements from nums2
//     while (p2 >= 0) {
//         nums1[p] = nums2[p2];
//         p2--;
//         p--;
//     }
// }
// const nums1 = [1, 2, 3, 0, 0, 0];
// const m = 3;
// const nums2 = [2, 5, 6];
// const n = 3;

// merge(nums1, m, nums2, n);
// console.log(nums1);


//another method

// var merge = function (nums1, m, nums2, n) {
//     nums1.splice(m, n, ...nums2)
//     nums1.sort((a, b) => a - b)
// };

// const nums1 = [1, 2, 3, 0, 0, 0];
// const m = 3;
// const nums2 = [2, 5, 6];
// const n = 3;

// merge(nums1, m, nums2, n);
// console.log(nums1);



//return an array of their intersection. Each element in the result must be unique and you may return the result in any order. (LC 349)

// const nums1 = [4, 9, 5], nums2 = [9, 4, 9, 8, 4];
// let set = new Set(nums1);
// let arr = [];
// for (let num of nums2) {
//     if (set.has(num) && !arr.includes(num)) {
//         arr.push(num);
//     }
// } console.log(arr);


//another method

// const nums1 = [4, 9, 5], nums2 = [9, 4, 9, 8, 4];
// const set1 = new Set(nums1);
// const set2 = new Set(nums2);
// console.log([...set1].filter(num => set2.has(num)));



//Return a list of the target indices of nums after sorting nums in non-decreasing order. If there are no target indices, return an empty list. The returned list must be sorted in increasing order. (LC 2089)

// let nums = [1, 2, 5, 2, 3], target = 2;
// nums = nums.sort((a, b) => a - b);
// let arr = [];
// for (let i = 0; i < nums.length; i++) {
//     if (nums[i] === target) {
//         arr.push(i);
//     }
// } console.log(arr);



//return an array answer such that answer[i] is equal to the product of all the elements of nums except nums[i]. (LC 238)

// const nums = [1, 2, 3, 4];
// const result = new Array(nums.length).fill(1);
// let leftProduct = 1;
// for (let i = 0; i < nums.length; i++) {
//     result[i] = leftProduct;
//     leftProduct *= nums[i];
// }
// let rightProduct = 1;
// for (let i = nums.length - 1; i >= 0; i--) {
//     result[i] *= rightProduct;
//     rightProduct *= nums[i];
// }
// console.log(result);



//You are given a 0-indexed 2D integer matrix grid of size n * n with values in the range [1, n2]. Each integer appears exactly once except a which appears twice and b which is missing. The task is to find the repeating and missing numbers a and b. Return a 0-indexed integer array ans of size 2 where ans[0] equals to a and ans[1] equals to b. (LC 2965)

// const grid = [[9, 1, 7], [8, 9, 2], [3, 4, 6]];
// const n = grid.length;
// const nSqr = n * n;
// const sumExp = (nSqr * (nSqr + 1)) / 2;
// const sumSqrExp = (nSqr * (nSqr + 1) * (2 * nSqr + 1)) / 6;

// let sumAct = 0;
// let sumSqrAct = 0;
// for (let row of grid) {
//     for (let num of row) {
//         sumAct += num;
//         sumSqrAct += num * num;
//     }
// }
// const diff = sumAct - sumExp;
// const sumDiff = (sumSqrAct - sumSqrExp) / diff;

// const repeated = (diff + sumDiff) / 2;
// const missing = sumDiff - repeated;

// console.log([repeated, missing]);



//Given a 2D integer array moves where moves[i] = [rowi, coli] indicates that the ith move will be played on grid[rowi][coli]. return the winner of the game if it exists (A or B). In case the game ends in a draw return "Draw". If there are still movements to play return "Pending". You can assume that moves is valid (i.e., it follows the rules of Tic-Tac-Toe), the grid is initially empty, and A will play first.(LC 1275).

// var tictactoe = function (moves) {
//     const board = Array.from({ length: 3 }, () => Array(3).fill(''));
//     for (let i = 0; i < moves.length; i++) {
//         const [row, col] = moves[i];
//         board[row][col] = i % 2 === 0 ? 'X' : 'O';
//         if (checkWinner(board, row, col)) {
//             return i % 2 === 0 ? 'A' : 'B';
//         }
//     }
//     return moves.length === 9 ? 'Draw' : 'Pending';
// };
// function checkWinner(board, row, col) {
//     const player = board[row][col];
//     if (board[row].every(cell => cell === player)) {
//         return true
//     };
//     if (board.every(r => r[col] === player)) {
//         return true
//     };
//     if (row === col && board.every((r, i) => r[i] === player)) {
//         return true
//     };
//     if (row + col === 2 && board.every((r, i) => r[2 - i] === player)) {
//         return true
//     };
//     return false;
// }
// console.log(tictactoe([[0, 0], [1, 1], [2, 0], [1, 0], [1, 2], [2, 1], [0, 1], [0, 2], [2, 2]]));


//remove all occurrences of val in nums in-place. The order of the elements may be changed. Then return the number of elements in nums which are not equal to val.

// const nums = [0, 1, 2, 2, 3, 0, 4, 2], val = 2;
// let i = 0, k = 0;
// for (let i = 0; i < nums.length; i++) {
//     if (nums[i] !== val) {
//         nums[k] = nums[i];
//         k++;
//     }
// }
// console.log(k);



//arrange all the roll numbers in ascending order and Find the number of changes required to do so that number should be minimum

// let arr=[10, 19, 6, 5, 3]
// let changes=0;
// for(let i=0;i<arr.length;i++){
//     let min=arr[i];
//     let index=i;
//     for(let j=i+1;j<arr.length;j++){
//         if(arr[j]<min){
//             min=arr[j];
//             index=j;
//         }
//     }
//     if(index !== i){
//         let temp=arr[i];
//         arr[i]=arr[index];
//         arr[index]=temp;
//         changes++;
//     }
// }
// console.log(changes);



//Rotate the array to the right by k steps, where k is non-negative.
//(try to solve in time complexity 0(n) with extra space)

// let rotate = function (nums, k) {
//     k = k % nums.length;
//     if (k === 0) {
//         return nums;
//     };

//     function reverse(arr, start, end) {
//         while (start < end) {
//             let temp = arr[start];
//             arr[start] = arr[end];
//             arr[end] = temp;
//             start++;
//             end--;
//         }
//     }
//     reverse(nums, 0, nums.length - 1);
//     reverse(nums, 0, k - 1);
//     reverse(nums, k, nums.length - 1);
//     return nums;
// };
// console.log(rotate([1, 2, 3, 4, 5, 6, 7], 3));


//You are given an n x n 2D matrix representing an image, rotate the image by 90 degrees (clockwise).

// let matrix = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
// const n = matrix.length;

// for (let i = 0; i < n; i++) {
//     for (let j = i + 1; j < n; j++) {
//         [matrix[i][j], matrix[j][i]] = [matrix[j][i], matrix[i][j]];
//     }
// }

// for (let i = 0; i < n; i++) {
//     matrix[i].reverse();
// }
// console.log(matrix);



//Given an integer num, repeatedly add all its digits until the result has only one digit, and return it. (LC 258)

// var addDigits = function (num) {
//     if (num == 0) {
//         return 0;
//     } return (num % 9) === 0 ? 9 : (num % 9);
// };
// console.log(addDigits(38));



// 1th student can give 4 pens to 0th student, total work needed 4*(1-0) = 4, new arr[] = 1,0,1,-3,1 now 3rd student can give pens to 0th, 2th and 4th. so total work needed = 1*(3-0)+1*(3-2)+1*(4-3) = 5 So total work will be 4+5 = 9

// var pens_need = function(arr) {
// let work=0, borrow;
// for(let i=0;i<arr.length;i++){
// // if(arr[i] == 0){
// //   continue
// // }
// if(arr[i]>0)
// borrow=true
// else{
//     borrow = false
// }
// for(let j=i+1;j<arr.length;j++){
//     if(borrow && arr[j]<0){
//     if((arr[i]+arr[j])<=0){
//         arr[j]=arr[i]+arr[j];
//         work+=(j-i)*arr[i];
//         arr[i] =0
//     } else {
//         arr[i] = arr[i]+arr[j];
//         work+=(j-i)*Math.abs(arr[j])
//         arr[j] =0;
//     }
//     }
//     else if(!borrow && arr[j]>0){
//     if((arr[i]+arr[j])<=0){
//         arr[i] = arr[i]+arr[j]
//         work+=(j-i)*arr[j]
//         arr[j] = 0;
//     } else{
//         arr[j] = arr[i]+arr[j]
//         work+=(j-i)*Math.abs(arr[i])
//         arr[i]=0
//     }
//     }
// }
// }
// return work;
// };
// console.log(pens_need([5, -4, 1, -3, 1,0]));
// console.log(pens_need([-1000, -1000, -1000, 1000, 1000, 1000,0]));



//Given a signed 32-bit integer x, return x with its digits reversed. If reversing x causes the value to go outside the signed 32-bit integer range [-231, 231 - 1], then return 0.

// var reverse = function (x) {
//     const INT_MAX = 2 ** 31 - 1;
//     let result = 0;
//     let sign = Math.sign(x);
//     x = Math.abs(x);
//     while (x !== 0) {
//         let digit = x % 10;
//         x = Math.floor(x / 10);

//         if (result > Math.floor(INT_MAX / 10) || (result === Math.floor(INT_MAX / 10) && digit > 7)) {
//             return 0;
//         }
//         result = result * 10 + digit;
//     }
//     return result * sign;
// };
// console.log(reverse(-321));



//A number is said to be sharpenerian number if the difference between any neighboring digits of number is 1 .

// let n = 5;
// let arr = [];
// let y = 10;
// while (arr.length < n) {
//     let temp = y;
//     let x = y;
//     let digits = [];
//     let flag = true;
//     while (x > 0) {
//         let y = x % 10;
//         digits.push(y);
//         x = Math.floor(x / 10);
//     }
//     for (let i = 0; i < digits.length - 1; i++) {
//         let num = Math.abs(digits[i] - digits[i + 1]);
//         if (num !== 1) {
//             flag = false;
//             break
//         }
//     }
//     if (flag) {
//         arr.push(temp);
//     }
//     y++;
// } console.log(arr);



//you have to check whether addition of strengths on left side and right side are equal or not. if both sides have equal strength, then return True else return False .

// let arr = [1, 2, 3, 2, 1, 2, 5];
// let sum = 0;
// for (let i = 0; i < arr.length; i++) {
//     sum += arr[i];
// }
// let j = 0, newSum = 0, flag = true;
// while (sum !== newSum) {
//     if (j === arr.length) {
//         flag = false;
//         break;
//     } else {
//         newSum += arr[j];
//         sum -= arr[j];
//         j++;
//     }
// } console.log(flag);



//You have to revamp such that no duplicate roll numbers should be there . You can increase the roll number by one at a time . you have to find minimum operation for revamping the array.

// let arr = [1, 1, 2, 3];
// arr.sort((a, b) => a - b);
// let count = 0;
// for (let i = 1; i < arr.length; i++) {
//     if (arr[i] <= arr[i - 1]) {
//         let increment = arr[i - 1] - arr[i] + 1;
//         count += increment;
//         arr[i] = arr[i - 1] + 1;
//     }
// } console.log(count);



//Increment the large integer by one and return the resulting array of digits.

// var plusOne = function (digits) {
//     for (let i = digits.length - 1; i >= 0; i--) {
//         if (digits[i] < 9) {
//             digits[i]++;
//             return digits;
//         }
//         digits[i] = 0;
//     }
//     digits.unshift(1);
//     return digits;
// };
// console.log(plusOne([6, 1, 4, 5, 3, 9, 0, 1, 9, 5, 1, 8, 6, 7, 0, 5, 5, 4, 3]));



//You are climbing a staircase. It takes n steps to reach the top. Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?

// var climbStairs = function (n) {
//     if (n <= 2) {
//         return n;
//     };
//     let oneStBf = 2;
//     let twoStBf = 1;
//     let allways = 0;

//     for (let i = 3; i <= n; i++) {
//         allways = oneStBf + twoStBf;
//         twoStBf = oneStBf;
//         oneStBf = allways;
//     } return allways;
// };
// console.log(climbStairs(3));



//Return the resulting string after removing exactly one occurrence of digit from number such that the value of the resulting string in decimal form is maximized. The test cases are generated such that digit occurs at least once in number.

// const number = "1231", digit = "1";
// let result = '';
// for (let i = 0; i < number.length; i++) {
//     if (number[i] === digit) {
//         let newNum = number.slice(0, i) + number.slice(i + 1);
//         if (newNum > result) {
//             result = newNum;
//         }
//     }
// }
// console.log(result);



//1 if x is positive. -1 if x is negative. 0 if x is equal to 0. You are given an integer array nums. Let product be the product of all values in the array nums. Return signFunc(product).

// var arraySign = function (nums) {
//     let sign = 1;
//     for (let num of nums) {
//         if (num === 0) {
//             return 0;
//         } else if (num < 0) {
//             sign = -sign;
//         }
//     } return sign;
// };
// console.log(arraySign([-1, -2, -3, -4, 3, 2, 1]));


//Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the non-zero elements.

// let nums = [0, 1, 0, 3, 12, 15, 0, 17, 0, 0, 68];
// let j = 0;
// for (let i = 0; i < nums.length; i++) {
//     if (nums[i] !== 0) {
//         nums[j] = nums[i];
//         j++;
//     }
// }
// for (let i = j; i < nums.length; i++) {
//     nums[i] = 0;
// }
// console.log(nums);



//Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

// var twoSum = function (nums, target) {
//     for (let i = 0; i < nums.length; i++) {
//         for (let j = i + 1; j < nums.length; j++) {
//             if (nums[i] + nums[j] === target) {
//                 return [i, j];
//             }
//         }
//     }
// };
// console.log(twoSum([2, 7, 11, 15], 9));



//return an array of their intersection. Each element in the result must appear as many times as it shows in both arrays and you may return the result in any order.

// const nums1 = [1, 2, 2, 1];
// const nums2 = [2, 2];
// nums1.sort((a, b) => a - b);
// nums2.sort((a, b) => a - b);
// const result = [];
// let i = 0, j = 0;
// while (i < nums1.length && j < nums2.length) {
//     if (nums1[i] < nums2[j]) {
//         i++;
//     } else if (nums1[i] > nums2[j]) {
//         j++;
//     } else {
//         result.push(nums1[i]);
//         i++;
//         j++;
//     }
// }
// console.log(result);



//return the third distinct maximum number in this array. If the third maximum does not exist, return the maximum number.

// const nums = [3, 1, 1];
// let first = -Infinity, second = -Infinity, third = -Infinity;
// for (let num of nums) {
//     if (num === first || num === second || num === third) {
//         continue;
//     }
//     if (num > first) {
//         third = second;
//         second = first;
//         first = num;
//     } else if (num > second) {
//         third = second;
//         second = num;
//     } else if (num > third) {
//         third = num;
//     }
// }
// console.log(third === -Infinity ? first : third);



//Determine whether the largest element in the array is at least twice as much as every other number in the array. If it is, return the index of the largest element, or return -1 otherwise.

// var dominantIndex = function (nums) {
//     let maxIndex = 0;
//     for (let i = 1; i < nums.length; i++) {
//         if (nums[i] > nums[maxIndex]) {
//             maxIndex = i;
//         };
//     };
//     for (let i = 0; i < nums.length; i++) {
//         if (i !== maxIndex && nums[maxIndex] < (2 * nums[i])) {
//             return -1;
//         }
//     } return maxIndex;
// };
// console.log(dominantIndex([3, 6, 1, 0]));



//Given an integer array nums sorted in non-decreasing order, remove the duplicates in-place such that each unique element appears only once. The relative order of the elements should be kept the same. Then return the number of unique elements in nums.

// const nums = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4];
// let k = 1;
// for (let i = 1; i < nums.length; i++) {
//     if (nums[i] !== nums[i - 1]) {
//         nums[k] = nums[i];
//         k++
//     }
// } console.log(k);



//Given an integer numRows, return the first numRows of Pascal's triangle.(LC 118)

// const numRows = 5;
// let arr = [];
// for (let i = 0; i < numRows; i++) {
//     let row = new Array(i + 1).fill(1);
//     for (let j = 1; j < i; j++) {
//         row[j] = arr[i - 1][j - 1] + arr[i - 1][j];
//     }
//     arr.push(row);
// } console.log(arr);


//On each day, you may decide to buy and/or sell the stock. You can only hold at most one share of the stock at any time. However, you can buy it then immediately sell it on the same day. Find and return the maximum profit you can achieve.

// const prices = [7, 1, 5, 3, 6, 4];
// let maxProfit = 0;
// for (let i = 1; i < prices.length; i++) {
//     if (prices[i] > prices[i - 1]) {
//         maxProfit += (prices[i] - prices[i - 1]);
//     }
// } console.log(maxProfit);



//There are n bulbs that are initially off. You first turn on all the bulbs, then you turn off every second bulb. On the third round, you toggle every third bulb (turning on if it's off or turning off if it's on). For the ith round, you toggle every i bulb. For the nth round, you only toggle the last bulb. Return the number of bulbs that are on after n rounds. (LC 319)

// let n = 3;
// console.log(Math.floor(Math.sqrt(n)));



//You are given an integer array height of length n. There are n vertical lines drawn such that the two endpoints of the ith line are (i, 0) and (i, height[i]). Find two lines that together with the x-axis form a container, such that the container contains the most water. Return the maximum amount of water a container can store. Notice that you may not slant the container. (LC 11)

// const height = [1, 8, 6, 2, 5, 4, 8, 3, 7];
// let left = 0;
// let right = height.length - 1;
// let maxArea = 0;
// while (left < right) {
//     let width = right - left;
//     let currentArea = (Math.min(height[left], height[right]) * width);
//     maxArea = Math.max(currentArea, maxArea);
//     if (height[left] < height[right]) {
//         left++;
//     } else {
//         right--;
//     }
// } console.log(maxArea);



//Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]] such that i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0. Notice that the solution set must not contain duplicate triplets. (LC 15)

// let nums = [-1, 0, 1, 2, -1, -4];
// let result = [];
// nums.sort((a, b) => a - b);
// console.log(nums)
// for (let i = 0; i < nums.length; i++) {
//     if (i > 0 && nums[i] === nums[i - 1]) {
//         continue;
//     }
//     let left = i + 1;
//     let right = nums.length - 1;
//     while (left < right) {
//         let sum = nums[i] + nums[left] + nums[right];
//         if (sum === 0) {
//             result.push([nums[i], nums[left], nums[right]]);
//             while (left < right && nums[left] === nums[left + 1]) {
//                 left++;
//             }
//             while (left < right && nums[right] === nums[right - 1]) {
//                 right--;
//             }
//             left++;
//             right--;
//         } else if (sum < 0) {
//             left++;
//         } else {
//             right--;
//         }
//     }
// } console.log(result);



//Given an integer array nums of length n and an integer target, find three integers in nums such that the sum is closest to target. Return the sum of the three integers. You may assume that each input would have exactly one solution. (LC 16)

// let nums = [-1, 2, 1, -4], target = 1;
// nums.sort((a, b) => a - b);
// let closestSum = Infinity;
// for (let i = 0; i < nums.length; i++) {
//     let left = i + 1;
//     let right = nums.length - 1;
//     while (left < right) {
//         let currentSum = nums[i] + nums[left] + nums[right];
//         if (currentSum === target) {
//             return currentSum;
//         }
//         if (Math.abs(currentSum - target) < Math.abs(closestSum - target)) {
//             closestSum = currentSum;
//         }
//         if (currentSum < target) {
//             left++;
//         } else {
//             right--;
//         }
//     }
// } console.log(closestSum);



//Given an array nums of n integers, return an array of all the unique quadruplets [nums[a], nums[b], nums[c], nums[d]] such that:
//0 <= a, b, c, d < n
//a, b, c, and d are distinct.
//nums[a] + nums[b] + nums[c] + nums[d] == target
//You may return the answer in any order. (LC 18)

// let nums = [1, 0, -1, 0, -2, 2], target = 0;
// let result = [];
// nums.sort((a, b) => a - b);
// for (let i = 0; i < nums.length; i++) {
//     if (i > 0 && nums[i] === nums[i - 1]) {
//         continue;
//     }
//     for (let j = i + 1; j < nums.length - 2; j++) {
//         if (j > i + 1 && nums[j] === nums[j - 1]) {
//             continue;
//         }
//         let left = j + 1;
//         let right = nums.length - 1;
//         while (left < right) {
//             let sum = nums[i] + nums[j] + nums[left] + nums[right];
//             if (sum === target) {
//                 result.push([nums[i], nums[j], nums[left], nums[right]]);
//                 while (left < right && nums[left] === nums[left + 1]) {
//                     left++;
//                 }
//                 while (left < right && nums[right] === nums[right - 1]) {
//                     right--;
//                 }
//                 left++;
//                 right--;
//             } else if (sum < target) {
//                 left++;
//             } else {
//                 right--;
//             }
//         }
//     }
// } console.log(result);



//Given an integer array nums and an integer k, return the k most frequent elements. You may return the answer in any order. (LC 347)

// let nums = [1, 1, 1, 2, 2, 3], k = 2;
// let freqMap = new Map();
// let arr = [];
// for (let num of nums) {
//     freqMap.set(num, (freqMap.get(num) || 0) + 1);
// }
// let buckets = Array(nums.length + 1).fill().map(() => []);
// for (let [num, freq] of freqMap) {
//     buckets[freq].push(num);
// }
// let result = [];
// for (let i = buckets.length - 1; i >= 0 && result.length < k; i--) {
//     if (buckets[i].length > 0) {
//         result.push(...buckets[i]);
//     };
// } console.log(result.slice(0, k));



//Given an array of intervals where intervals[i] = [starti, endi], merge all overlapping intervals, and return an array of the non-overlapping intervals that cover all the intervals in the input. (LC 56)

// let intervals = [[1, 3], [2, 6], [8, 10], [15, 18]];
// intervals.sort((a, b) => a[0] - b[0]);
// let merged = [];
// for (let interval of intervals) {
//     if (merged.length === 0 || merged[merged.length - 1][1] < interval[0]) {
//         merged.push(interval);
//     } else {
//         merged[merged.length - 1][1] = Math.max(merged[merged.length - 1][1], interval[1]);
//     }
// } console.log(merged);



//A permutation of an array of integers is an arrangement of its members into a sequence or linear order. For example, for arr = [1,2,3], the following are all the permutations of arr: [1,2,3], [1,3,2], [2, 1, 3], [2, 3, 1], [3,1,2], [3,2,1]. The next permutation of an array of integers is the next lexicographically greater permutation of its integer. More formally, if all the permutations of the array are sorted in one container according to their lexicographical order, then the next permutation of that array is the permutation that follows it in the sorted container. If such arrangement is not possible, the array must be rearranged as the lowest possible order (i.e., sorted in ascending order).
//For example, the next permutation of arr = [1,2,3] is [1,3,2].
//Similarly, the next permutation of arr = [2,3,1] is [3,1,2].
//While the next permutation of arr = [3,2,1] is [1,2,3] because [3,2,1] does not have a lexicographical larger rearrangement.
//Given an array of integers nums, find the next permutation of nums.
//The replacement must be in place and use only constant extra memory. (LC 31)

// let nums = [1, 2, 3];
// let i = nums.length - 2;
// while (i >= 0 && nums[i] >= nums[i + 1]) {
//     i--;
// }
// if (i >= 0) {
//     let j = nums.length - 1;
//     while (nums[j] <= nums[i]) {
//         j--;
//     }
//     [nums[i], nums[j]] = [nums[j], nums[i]];
// }
// let left = i + 1;
// let right = nums.length - 1;
// while (left < right) {
//     [nums[left], nums[right]] = [nums[right], nums[left]];
//     left++;
//     right--;
// }
// console.log(nums);



//Given an integer array nums, return true if you can partition the array into two subsets such that the sum of the elements in both subsets is equal or false otherwise. (LC 416).

// let nums = [1, 5, 11, 5];
// let totalSum = nums.reduce((a, b) => a + b, 0);
// if (totalSum % 2 !== 0) {
//     return false;
// }
// let target = totalSum / 2;
// let dp = new Array(target + 1).fill(false);
// dp[0] = true;
// for (let num of nums) {
//     for (let j = target; j >= num; j--) {
//         dp[j] = dp[j] || dp[j - num];
//     }
// } console.log(dp[target]);



//Given an array of integers arr, return true if it is possible to split it in two subarrays (without reordering the elements), such that the sum of the two subarrays are equal. If it is not possible then return false.

// function canSplit(arr) {
//     let totalSum = arr.reduce((acc, cur) => acc + cur, 0);
//     if (totalSum % 2 !== 0) {
//         return false;
//     }
//     let sum = 0;
//     for (let i = 0; i < arr.length; i++) {
//         sum += arr[i];

//         if (sum === totalSum / 2) {
//             return true;
//         }
//     } return false;
// }
// console.log(canSplit([1, 2, 3, 4, 5, 5]));



//Given the array nums consisting of 2n elements in the form [x1,x2,...,xn,y1,y2,...,yn]. Return the array in the form [x1,y1,x2,y2,...,xn,yn]. (LC 1470)

// const nums = [2, 5, 1, 3, 4, 7], n = 3;
// const result = [];
// for (let i = 0; i < n; i++) {
//     result.push(nums[i]);
//     result.push(nums[i + n]);
// } console.log(result);



//There are n kids with candies. You are given an integer array candies, where each candies[i] represents the number of candies the ith kid has, and an integer extraCandies, denoting the number of extra candies that you have. Return a boolean array result of length n, where result[i] is true if, after giving the ith kid all the extraCandies, they will have the greatest number of candies among all the kids, or false otherwise. Note that multiple kids can have the greatest number of candies. (LC 1431)

// const candies = [2, 3, 5, 1, 3], extraCandies = 3;
// const maxCandies = Math.max(...candies);
// console.log(candies.map((candy) => candy + extraCandies >= maxCandies));



//Given an array of integers nums, return the number of good pairs. A pair (i, j) is called good if nums[i] == nums[j] and i < j. (LC 1512).

// const nums = [1, 2, 3, 1, 1, 3];
// let countMap = {};
// let goodPairs = 0;
// for (let num of nums) {
//     if (countMap[num]) {
//         goodPairs += countMap[num];
//         countMap[num] += 1;
//     } else {
//         countMap[num] = 1
//     }
// } console.log(goodPairs);



//Given the array nums, for each nums[i] find out how many numbers in the array are smaller than it. That is, for each nums[i] you have to count the number of valid j's such that j != i and nums[j] < nums[i]. Return the answer in an array. (LC 1365).

// const nums = [8, 1, 2, 2, 3];
// let arr = [];
// for (let i = 0; i < nums.length; i++) {
//     let count = 0;
//     for (let j = 0; j < nums.length; j++) {
//         if (nums[j] < nums[i]) {
//             count++;
//         }
//     } arr.push(count)
// } console.log(arr);


//another method

// const nums = [8, 1, 2, 2, 3];
// const sorted = [...nums].sort((a, b) => a - b);
// const result = nums.map((num) => sorted.indexOf(num));
// console.log(result);



//Given a m x n binary matrix mat, find the 0-indexed position of the row that contains the maximum count of ones, and the number of ones in that row. In case there are multiple rows that have the maximum count of ones, the row with the smallest row number should be selected. Return an array containing the index of the row, and the number of ones in it. (LC 2643)

// const mat = [[0, 1], [1, 0]];
// let index = 0, maxCount = 0;
// for (let i = 0; i < mat.length; i++) {
//     let count = mat[i].reduce((acc, cur) => acc + cur, 0);
//     if (count > maxCount) {
//         maxCount = count;
//         index = i;
//     }
// } console.log([index, maxCount]);



//Given a zero-based permutation nums (0-indexed), build an array ans of the same length where ans[i] = nums[nums[i]] for each 0 <= i < nums.length and return it. A zero-based permutation nums is an array of distinct integers from 0 to nums.length - 1 (inclusive).

// const nums = [0, 2, 1, 5, 3, 4];
// let ans = nums.map(num => nums[num]);
// console.log(ans);



// /Given num, the array-form of an integer, and an integer k, return the array-form of the integer num + k. (LC 989)

// const num = [2, 1, 5], k = 806;
// let result = [];
// let carry = k, i = num.length - 1;
// while (carry > 0 || i >= 0) {
//     if (i >= 0) {
//         carry += num[i];
//     }
//     result.push(carry % 10);
//     carry = Math.floor(carry / 10);
//     i--;
// } console.log(result.reverse());



//Given an array of integers nums, calculate the pivot index of this array. The pivot index is the index where the sum of all the numbers strictly to the left of the index is equal to the sum of all the numbers strictly to the index's right. If the index is on the left edge of the array, then the left sum is 0 because there are no elements to the left. This also applies to the right edge of the array. Return the leftmost pivot index. If no such index exists, return -1. (LC 724)

// var pivotIndex = function (nums) {
//     let totalSum = nums.reduce((acc, num) => acc + num, 0);
//     let leftSum = 0;
//     for (let i = 0; i < nums.length; i++) {
//         if (leftSum === totalSum - leftSum - nums[i]) {
//             return i;
//         }
//         leftSum += nums[i];
//     }
//     return -1;
// };
// console.log(pivotIndex([1, 7, 3, 6, 5, 6]));



//A perfect number is a positive integer that is equal to the sum of its positive divisors, excluding the number itself. A divisor of an integer x is an integer that can divide x evenly. Given an integer n, return true if n is a perfect number, otherwise return false. (LC 507)

// var checkPerfectNumber = function (num) {
//     if (num <= 1) {
//         return false
//     };
//     let sum = 1;
//     for (let i = 2; i * i <= num; i++) {
//         if (num % i === 0) {
//             sum += i;
//             if (i !== num / i) {
//                 sum += num / i;
//             }
//         }
//     }
//     return sum === num;
// };
// console.log(checkPerfectNumber(28));


//given an array prices where prices[i] is the price of a given stock on the ith day. You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock. Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.

// const prices = [7, 1, 5, 3, 6, 4];
// let min = Infinity, max = 0;
// for (let i = 0; i < prices.length; i++) {
//     if (prices[i] < min) {
//         min = prices[i];
//     } else if (prices[i] - min > max) {
//         max = prices[i] - min;
//     }
// } console.log(max);



//Find no. of set bits(1's) in a number:

// let num=19;
// let count=0;
// for(let i=0;i<32;i++){
//     if(((num>>i)&1)==1){
//         count += 1;
//     }
// }console.log(count);


//another method

// let n = 11;
// let count = 0;
// while (n !== 0) {
//     count++;
//     n &= (n - 1);
// }
// console.log(count);



//Given a non-empty array of integers nums, every element appears twice except for one. Find that single one.

// const nums = [4, 1, 2, 1, 2];
// let result = 0;
// for (const num of nums) {
//     result ^= num;
// }
// console.log(result);



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



//Sort the integers in the array in ascending order by the number of 1's in their binary representation

// let arr = [0, 1, 2, 3, 4, 5, 6, 7, 8];
// for (let i = 0; i < arr.length; i++) {
//     for (let j = i + 1; j < arr.length; j++) {
//         let count1 = 0, n1 = arr[i];
//         while (n1 > 0) {
//             count1 += n1 & 1;
//             n1 = n1 >> 1;
//         }
//         let count2 = 0, n2 = arr[j];
//         while (n2 > 0) {
//             count2 += n2 & 1;
//             n2 = n2 >> 1;
//         }
//         if (count1 > count2 || (count1 == count2 && arr[i] > arr[j])) {
//             let temp = arr[i];
//             arr[i] = arr[j];
//             arr[j] = temp;
//         }
//     }
// }
// console.log(arr);



//Given two binary strings a and b, return their sum as a binary string. (LC 67)

// const a = "1010", b = "1011";
// let str = '';
// let carry = 0;
// let i = a.length - 1;
// let j = b.length - 1;
// while (i >= 0 || j >= 0 || carry) {
//     let sum = carry;
//     if (i >= 0) {
//         sum += (a[i] === '1' ? 1 : 0);
//         i--;
//     }
//     if (j >= 0) {
//         sum += (b[j] === '1' ? 1 : 0);
//         j--;
//     }
//     str = (sum % 2) + str;
//     carry = Math.floor(sum / 2);
// }
// console.log(str);



//Reverse bits of a given 32 bits unsigned integer. (LC 190)

// let n = 00000010100101000001111010011100;
// let result = 0;
// for (let i = 0; i < 32; i++) {
//     result = (result << 1) | (n & 1);
//     n >>= 1;
// }
// console.log(result >>> 0);