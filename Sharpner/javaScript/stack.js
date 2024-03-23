// class Stack{
//     constructor(){
//         this.top=-1;
//         this.stack=[];
//     }
//     push(ele){
//         this.top=this.top+1;
//         this.stack[this.top]=ele;
//     }
//     pop(){
//         this.stack.pop();
//         this.top=this.top-1;
//     }
//     peek(){
//         return this.stack[this.top];
//     }
//     isEmpty(){
//         if(this.top===-1){
//             return true;
//         }else{
//             return false;
//         }
//     }
// }
// let x=new Stack;
// console.log(x.isEmpty());
// x.push(6);
// x.push(9);
// x.push(69);
// x.push(96);
// x.push(169);
// x.pop();

// console.log(x.stack);
// console.log(x.peek());
// console.log(x.isEmpty());


// let y=[];
// y.push(6);
// y.push(9);
// y.push(69);
// y.push(96);
// y.push(196);
// y.pop();
// console.log(y);
// console.log(y[y.length-1]);
// if(y.length===0){
//     console.log("It is empty");
// }else{
//     console.log("It is not empty");
// }


//Valid Parentheses: Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

// const s = "()[]{}";
// const stack=[];
// const openBrackets=['(','{','['];
// const closingBrackets=[')','}',']'];
// const bracketMap={
//     ')':'(',
//     '}':'{',
//     ']':'['
// };
// for(let i=0;i<s.length;i++){
//     const char=s[i];
//     if(openBrackets.includes(char)){
//         stack.push(char);
//     }else if(closingBrackets.includes(char)){
//         if(stack.length===0 || stack.pop() !== bracketMap[char]){
//             return (false);
//         }
//     }
// }
// console.log(stack.length===0);



//Validate Stack Sequences: return true if this could have been the result of a sequence of push and pop operations on an initially empty stack, or false otherwise.

// let pushed = [1,2,3,4,5], popped = [4,5,3,2,1];
// let stack=[];
// let pushIndex=0;
// for(let num of pushed){
//     stack.push(num);
//     while(stack.length>0 && stack[stack.length-1]===popped[pushIndex]){
//         stack.pop();
//         pushIndex++;
//     }
// }
// console.log(stack.length===0);



//Remove All Adjacent Duplicates In String

// const s = "abbaca";
// let stack=[];
// for(let char of s){
//     if(stack.length>0 && stack[stack.length-1]===char){
//         stack.pop();
//     }else{
//         stack.push(char);
//     }
// }
// console.log(stack.join(''));


//Decode String

// const s = "3[a2[c]]";
// let stack=[];
// for(let char of s){
//     if(char !== ']'){
//         stack.push(char);
//     }else{
//         let str="";
//         while(stack[stack.length-1] !== "["){
//             str=stack.pop()+str;
//         }
//         stack.pop();
//         let num="";
//         while(!isNaN(stack[stack.length-1])){
//             num=stack.pop()+num;
//         }
//         str=str.repeat(parseInt(num));
//         stack.push(str);
//     }
// }
// console.log(stack.join(''));



//return the next greater number for every element in nums. If it doesn't exist, return -1 for this number.

// const nums = [1,2,3,4,3];
// let stack=[];
// let arr=new Array(nums.length).fill(-1);
// for(let i=0;i< 2 * nums.length;i++){
//     let index=i%nums.length;
//     while(stack.length>0 && nums[index] > nums[stack[stack.length-1]]){
//         arr[stack.pop()]=nums[index];
//     }
//     if(i<nums.length){
//         stack.push(i);
//     }
// }
// console.log(arr);



//Trapping Rain Water: Given n non-negative integers representing an elevation map where the width of each bar is 1, compute how much water it can trap after raining..

// const height = [0,1,0,2,1,0,1,3,2,1,2,1];
// if(height===null || height.length===0){
//     return 0;
// }
// let left=0, right=height.length-1;
// let leftMax=0, rightMax=0;
// let trappedWater=0;
// while(left<right){
//     if(height[left]<height[right]){
//         if(height[left]>=leftMax){
//             leftMax=height[left];
//         }else{
//             trappedWater += leftMax-height[left];
//         }
//         left++;
//     }else{
//         if(height[right]>=rightMax){
//             rightMax=height[right];
//         }else{
//             trappedWater += rightMax-height[right];
//         }
//         right--;
//     }
// }
// console.log(trappedWater);



//Largest Rectangle in Histogram: Given an array of integers heights representing the histogram's bar height where the width of each bar is 1, return the area of the largest rectangle in the histogram.

// const heights = [2,1,5,6,2,3];
// let stack=[];
// let maxArea=0;
// let i=0;
// while(i<heights.length){
//     if(stack.length===0 || heights[i]>=heights[stack[stack.length-1]]){
//         stack.push(i);
//         i++;
//     }else{
//         let top=stack.pop();
//         let width= stack.length===0 ? i : i-stack[stack.length-1]-1;
//         maxArea=Math.max(maxArea, heights[top] * width);
//     }
// }
// while(stack.length>0){
//     let top=stack.pop();
//     let width= stack.length===0 ? i : i-stack[stack.length-1]-1;
//     maxArea=Math.max(maxArea, heights[top] * width);
// }
// console.log(maxArea);
