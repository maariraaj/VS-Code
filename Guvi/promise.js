// let promiseObj=new Promise((resolve, reject)=>{
//     console.log("Producer code called when we create the Promise Object!!");
// });
// console.log(promiseObj);



// let promiseObj=new Promise((resolve, reject)=>{
//     console.log("Get the name from the DataBase!!!");
//     setTimeout(()=>{
//         // resolve("Muthuprabha");
//          reject("Oh ho! Some error occurred!!!");
//     },3000);
// });
// console.log(promiseObj);


// function showName(){
//     try{
//         let a=10;
//         let b="Prabha";
//         // let c=a+b;
//         const c=a+b;
//         console.log(c);
//         c=a+b+70;
//         console.log(c);
//     }
//     catch(error){
//         console.log("Error occured in showName function",error);
//     }
// }
// showName();


let promiseObj=new Promise((resolve, reject)=>{
    try{
        let a=10;
        let b="Prabha";
        //let c=a+b;
        const c=a+b;
        c=a+b+70;
        resolve(c);
        }
    catch(error){
        reject("Error occured in showName function",error);
    }
});
// console.log(promiseObj);


promiseObj.then(
    (val)=>{
    console.log("Resolved:",val);
    },
    (err)=>{
        console.log("Rejected from then:",err);
    }
);

promiseObj.catch((err)=>{
    console.log("Rejected from catch:",err);
});


