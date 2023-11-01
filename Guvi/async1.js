// console.log("I have finished TASK A!");
// console.log("I have finished TASK B!");
// console.log("I have finished TASK C!");

// console.log("I have finished TASK A to mix all the ingredients of the cake!");
// setTimeout(()=>{
//     console.log("I have finished TASK B to take the cake in microwave for 30 mins!");
// },3000);

// console.log("I have finished TASK C to prepare cold coffee!");




// CALL BACK: Pass a function as an argument to another function.
    // A callback is a function passed into another function as an argument which is then invoked inside the outer/other function to complete some kind of action. 
    //Usage: -> Mark completion of a long running task.
    //       -> Execute a task after a long running task.

function sum(x,y){
    return x+y;
}
function multiply(x,y){
    return x*y;
}

// console.log("Sum:",sum(10,5));
// console.log("Multiply:",multiply(10,5));
// function getResults(x,y,operate){
//     return operate(x,y);
// }
// console.log("Sum:", getResults(10,50,sum));
// console.log("Multiply:", getResults(10,50,multiply));


function getResults(x,y,operate){
    x=x*10;
    y=y*10;
    return operate(x,y);
}
console.log("Sum:", getResults(10,50,sum));
console.log("Multiply:", getResults(10,50,multiply));