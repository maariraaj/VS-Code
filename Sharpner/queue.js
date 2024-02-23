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


class Queue{
    constructor(){
        this.q=[];
    }
    enqueue(ele){
        this.q.push(ele);
    }
    dequeue(){
       if(this.isEmpty()){
            return ("Queue is empty");
       }
       return this.q.shift();
    }
    isEmpty(){
        return this.q.length===0;
    }
    get_first_element(){
        if(this.isEmpty()){
            return("Queue id empty")
        }
        return this.q[0];
    }
}
obj=new Queue();
obj.enqueue(169);
obj.enqueue(6);
obj.enqueue(9);
obj.enqueue(69);
obj.enqueue(96);
obj.dequeue();
console.log(obj.q);

