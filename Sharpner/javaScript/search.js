//BINARY SEARCH

//binary search for a sorted array(Ascending)

// let search = function(arr, target) {
//     let l=0, h=arr.length-1;

//     while(l<=h){
//         let  mid=Math.floor((l+h)/2);
//         if(target==arr[mid]){
//            return(mid);
//         }else if(target<arr[mid]){
//             h=mid-1;
//         }else{
//             l=mid+1;
//         }
//     }return(-1);
// };
// console.log(search([1,3,6,12,14,17,25,29,31,36,42,47,53,55,62],42));


//binary search for a sorted array(Dscending)

// let search=function(nums, target){
//     let l=0,h=nums.length-1;
//     while(l<=h){
//         let mid=Math.floor((l+h)/2);
//         if(target==nums[mid]){
//             return mid;
//         }else if(target<nums[mid]){
//             l=mid+1;
//         }else{
//             h=mid-1;
//         }
//     }return -1;
// }
// console.log(search([9,5,3, 2,1],5));


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
//         if(target<=nums[mid]){
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
//         if(target>=nums[mid]){
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


//The task is to permute both arrays such that sum of their corresponding element is greater than or equal to k i.e a[i] + b[i] >= k. The task is to print “Yes” if any such permutation exists, otherwise print “No”.

// const arr1=[2,3,8,6];
// const arr2=[4,1,9,7];
// const k=17;
// arr1.sort((a,b)=>a-b);
// arr2.sort((a,b)=>a-b);
// let i=0, j=0;
// while(i<arr1.length && j<arr2.length){
//     if(arr1[i]+arr2[j] >=k){
//         console.log("Yes");
//         return;
//     }
//     i++;
//     j++;
// }console.log("No");


//Counting Sort

// const arr = [2,5,3,0,2,3,0,3];
// const max = Math.max(...arr);
// const min = Math.min(...arr);
// const range = max - min + 1;
// const count = Array(range).fill(0);
// const output = Array(arr.length);
// // Count occurrences of each element
// for (let i = 0; i < arr.length; i++) {
//     count[arr[i] - min]++;
// }
// // Modify count array to store cumulative sum
// for (let i = 1; i < count.length; i++) {
//     count[i] += count[i - 1];
// }
// // Build the output array
// for (let i = arr.length - 1; i >= 0; i--) {
//     output[count[arr[i] - min] - 1] = arr[i];
//     count[arr[i] - min]--;
// }
// // Copy the output array back to the original array
// for (let i = 0; i < arr.length; i++) {
//     arr[i] = output[i];
// }
// console.log(arr)



//Given three Sorted arrays in non-decreasing order, print all common elements in these arrays.

// const arr1 = [1, 5, 10, 20, 40, 80];
// const arr2 = [6, 7, 20, 80, 100];
// const arr3 = [3, 4, 15, 20, 30, 70, 80, 120];
// const result = [];
// let i = 0, j = 0, k = 0;
// while (i < arr1.length && j < arr2.length && k < arr3.length) {
//     // If all three pointers point to the same element
//     if (arr1[i] === arr2[j] && arr2[j] === arr3[k]) {
//         result.push(arr1[i]);
//         i++;
//         j++;
//         k++;
//     }else if (arr1[i] < arr2[j] || arr1[i] < arr3[k]) {
//         i++;
//     }else if (arr2[j] < arr1[i] || arr2[j] < arr3[k]) {
//         j++;
//     }else {
//         k++;
//     }
// }
// console.log(result);



//Given an array, return indices of all subarrays in the array which has sum 0.

// const arr = [6, 3, -1, -3, 4, -2, 2, 4, 6, -12, -7];
// const result = [];
// const sumMap = {};
// let sum = 0;
// // Initialize sumMap with 0 at index -1 to handle cases where sum becomes 0
// sumMap[0] = [-1];
// for (let i = 0; i < arr.length; i++) {
//     sum += arr[i];
//     if (sumMap.hasOwnProperty(sum)) {
//         const indices = sumMap[sum];
//         for (const index of indices) {
//             result.push([index + 1, i]);
//         }
//     } else {
//         sumMap[sum] = [];
//     }
//     sumMap[sum].push(i);
// }

// console.log(result);



//A step array is an array of integers where each element has a difference of at most k with its neighbor. Given a key x, we need to find the index value of x if multiple-element exist to return the first occurrence of the key.

// function findFirstOccurrence(arr, x, k) {
//     for (let i = 0; i < arr.length; ) {
//         if (arr[i] === x) {
//             return i;
//         }
//         i += Math.max(1, Math.abs(arr[i] - x) / k);
//     }
//     return -1;
// }
// const arr = [20, 40, 50, 70, 70, 60];
// const x = 60;
// const k = 20;
// const firstOccurrenceIndex = findFirstOccurrence(arr, x, k);
// if (firstOccurrenceIndex !== -1) {
//     console.log(`Index of the first occurrence of ${x}: ${firstOccurrenceIndex}`);
// } else {
//     console.log(`${x} not found in the array.`);
// }



//find the floor and ceiling of x. The ceiling of x is the smallest element in an array greater than or equal to x, and the floor is the greatest element smaller than or equal to x.

// function findFloor(arr, x) {
//     let left = 0;
//     let right = arr.length - 1;
//     let floor = -1;
//     while (left <= right) {
//         const mid = Math.floor((left + right) / 2);
//         if (arr[mid] === x) {
//             return arr[mid]; // Exact match found
//         } else if (arr[mid] < x) {
//             floor = arr[mid]; // Update floor
//             left = mid + 1; // Move to the right half
//         } else {
//             right = mid - 1; // Move to the left half
//         }
//     }
//     return floor;
// }
// function findCeiling(arr, x) {
//     let left = 0;
//     let right = arr.length - 1;
//     let ceiling = -1;
//     while (left <= right) {
//         const mid = Math.floor((left + right) / 2);
//         if (arr[mid] === x) {
//             return arr[mid]; // Exact match found
//         } else if (arr[mid] < x) {
//             left = mid + 1; // Move to the right half
//         } else {
//             ceiling = arr[mid]; // Update ceiling
//             right = mid - 1; // Move to the left half
//         }
//     }
//     return ceiling;
// }
// const sortedArray = [1, 2, 8, 10, 10, 12, 19];
// const x = 5;
// const floorValue = findFloor(sortedArray, x);
// const ceilingValue = findCeiling(sortedArray, x);
// console.log("Floor of", x, ":", floorValue);
// console.log("Ceiling of", x, ":", ceilingValue);



//Each packet can have a variable number of chocolates. There are m students, the task is to distribute chocolate packets such that: 1. Each student gets one packet. 2. The difference between the number of chocolates in the packet with maximum chocolates and the packet with minimum chocolates given to the students is minimum.

// const c = [3, 4, 1, 9, 56, 7, 9, 12];
// const m = 5;
// c.sort((a, b) => a - b);
// let minDiff = Infinity;
// for (let i = 0; i+m-1 < c.length; i++) {
//     const diff = c[i+m-1] - c[i];
//     minDiff = Math.min(minDiff, diff);
// }
// console.log("Minimum difference:", minDiff);



//In a class A perfect team is the team where sum of marks of students in the team is divisible by 3 .It can be of two or three students Only . You have to find how many perfect teams can be formed

// const arr=[3, 6, 7, 2, 9];
// let count2=0, count3=0;
// for(let i=0;i<arr.length-1;i++){
//     for(let j=i+1;j<arr.length;j++){
//         let sum2=arr[i]+arr[j];
//         if(sum2 % 3 ===0){
//             count2 ++;
//         }
//         for(let k=j+1;k<arr.length;k++){
//             let sum3=sum2+arr[k];
//             if(sum3 % 3 ===0){
//                 count3 ++;
//             }
//         }
//     }
// }
// console.log(count2 + count3);


//For each element check how many numbers are greater than it.

// let nums= [10,12,6,4,16,1];
// let arr=[];
// for(let i=0;i<nums.length;i++){
//     let max=nums[i], count=0;
//     for(let j=0;j<nums.length;j++){
//         if(nums[j]>max){
//             count++;
//         }
//     }arr.push(count);
// }console.log(arr)



//Given a non-negative integer x, return the square root of x rounded down to the nearest integer. The returned integer should be non-negative as well.

// var mySqrt = function (x) {
//     if (x < 2) {
//         return x;
//     }
//     let start = 1, end = Math.floor(x / 2), result = 0;
//     while (start <= end) {
//         let mid = Math.floor((start + end) / 2);
//         let sq = mid * mid;
//         if (sq === x) {
//             return mid;
//         } else if (sq < x) {
//             start = mid + 1;
//             result = mid;
//         } else {
//             end = mid - 1;
//         }
//     } return result;
// };
// console.log(mySqrt(4));