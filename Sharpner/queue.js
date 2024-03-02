// class Queue{
//     constructor(){
//         this.q=[];
//         this.front=-1;
//         this.rear=-1;
//     }
//     enqueue(ele){
//         if(this.front===-1){
//             this.front += 1;
//             this.rear += 1;
//         }else{
//             this.rear += 1;
//         }
//         this.q[this.rear]=ele;
//     }
//     dequeue(){
//         if(this.front===this.rear){
//             this.front=-1;
//             this.rear=-1;
//         }else{
//             this.front += 1;
//         }
//     }
// }
// obj=new Queue();
// obj.enqueue(6);
// obj.enqueue(9);
// obj.enqueue(69);
// obj.enqueue(96);
// obj.dequeue();
// console.log(obj.q);
// console.log(obj);



// let q=[];
// let front=-1;

// //enqueue
// q.push(6);
// q.push(9);
// q.push(69);
// q.push(96);
// q.push(169);
// front += 1;
// if(front===q.length){
//     front=-1;
// }
// console.log(q);

// //dequeue
// q.shift();
// console.log(q);


// class Queue{
//     constructor(){
//         this.q=[];
//     }
//     enqueue(ele){
//         this.q.push(ele);
//     }
//     dequeue(){
//        if(this.isEmpty()){
//             return ("Queue is empty");
//        }
//        return this.q.shift();
//     }
//     isEmpty(){
//         return this.q.length===0;
//     }
//     get_first_element(){
//         if(this.isEmpty()){
//             return("Queue id empty")
//         }
//         return this.q[0];
//     }
// }
// obj=new Queue();
// obj.enqueue(169);
// obj.enqueue(6);
// obj.enqueue(9);
// obj.enqueue(69);
// obj.enqueue(96);
// obj.dequeue();
// console.log(obj.q);



//First non-repeating character in a stream of characters

// const A = "abadbc";
// let m=new Map();
// let q=[];
// let ans=[];

// for(let i=0;i<A.length;i++){
//     let char=A[i];
//     if(m.get(char)==undefined){
//         m.set(char, 1);
//     }else{
//         m.set(char, m.get(char)+1);
//     }
//     q.push(char);
//     while(q.length>0 && m.get(q[0])>1){
//         q.shift();
//     }
//     if(q.length>0){
//         ans.push(q[0]);
//     }else{
//         ans.push("#");
//     }
// }
// console.log(ans.join(""));



//Sliding Window Maximum: You are given an array of integers nums, there is a sliding window of size k which is moving from the very left of the array to the very right. You can only see the k numbers in the window. Each time the sliding window moves right by one position.

// const nums = [1,3,-1,-3,5,3,6,7], k = 3;
// let q=[];
// let ans=[];
// for(let i=0;i<nums.length;i++){
//     while(q.length && q[0] < i-k+1){
//         q.shift();
//     }
//     while(q.length && nums[q[q.length-1]] < nums[i]){
//         q.pop();
//     }
//     q.push(i);
//     if(i >= k-1){
//         ans.push(nums[q[0]]);
//     }
// }console.log(ans);