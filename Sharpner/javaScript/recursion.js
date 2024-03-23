//Sum of N natural Numbers (Recursive)

// function natural_numbers(n){
//    if (n === 1) {
//        return 1;
//    }
//    return n + natural_numbers(n - 1);
// }
// console.log(natural_numbers(5));


//print all the multiples of 5 till n in a recursive way.

// function print_output(n){
//     count(0);
//     function count(i){
//         if(i>n){
//             return;
//         }else{
//             console.log(i);
//             count(i+5);
//         }
//     }  
// }
// console.log(print_output(50));


//prints the factorial of the number in a recursive way

// function product_numbers(n){
//     if (n === 1) {
//         return 1;
//     }
//     return n * product_numbers(n - 1);
    
// }
// console.log(product_numbers(5));



// The Fibonacci numbers, commonly denoted F(n) form a sequence, called the Fibonacci sequence, such that each number is the sum of the two preceding ones, starting from 0 and 1. Given n, calculate F(n).

// function fibonacci(n){
//    if (n <= 1) {
//        return n;
//    } else {
//        return fibonacci(n - 1) + fibonacci(n - 2);
//    }  
// }
// console.log(fibonacci(4));



//find all the permutations of a string

// function permuteString(str){
//     let perm=[];
//     function generatePerm(currentPerm, remChars){
//       if(remChars.length===0){
//         perm.push(currentPerm);
//       }else{
//         for(let i=0;i<remChars.length;i++){
//           let newPerm=currentPerm+remChars[i];
//           let newRem=remChars.slice(0, i) + remChars.slice(i+1);
//           generatePerm(newPerm, newRem);
//         }
//       }
//     }
//     generatePerm('', str);
//     return perm;
// }
// console.log(permuteString("abc"));



//print all the subsequence of an array.

// function printSubsequences(arr, i, current){
//     if(i===arr.length){
//       if(current.length>0){
//         console.log(current);
//       }
//       return;
//     }
//     printSubsequences(arr,i+1,current);
//     current.push(arr[i]);
//     printSubsequences(arr,i+1,current);
//     current.pop();
// }  
// let arr=[1, 2, 3];  
// let index=0, current=[];
// printSubsequences(arr, index, current);



//Sort an Array

// let sortArray = function(nums) {
//     if(nums.length<=1){
//         return nums;
//     }
//     let mid=Math.floor(nums.length/2);
//     let left=sortArray(nums.slice(0, mid));
//     let right=sortArray(nums.slice(mid));
//     return merge(left, right);
// }
// function merge(left, right){
//     let arr=[];
//     let leftIndex=0;
//     let rightIndex=0;
//     while(leftIndex<left.length && rightIndex<right.length){
//         if(left[leftIndex]<right[rightIndex]){
//             arr.push(left[leftIndex]);
//             leftIndex++;
//         }else{
//             arr.push(right[rightIndex]);
//             rightIndex++;
//         }
//     }
//     while(leftIndex<left.length){
//         arr.push(left[leftIndex]);
//         leftIndex++;
//     }
//     while(rightIndex<right.length){
//         arr.push(right[rightIndex]);
//         rightIndex++;
//     }
//     return arr;
// };
// console.log(sortArray([5,1,1,2,0,0]));
