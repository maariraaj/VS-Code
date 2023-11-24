function timeoutPromise(message, interval){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve(message);
        },interval);
    });
}

const promise1=timeoutPromise("1st promise resolved", 1000);
const promise2=timeoutPromise("2nd promise resolved", 2000);
const promise3=timeoutPromise("3rd promise resolved", 3000);

// promise1.then((res)=>{
//     console.log("Promise1:", res);
// });

// promise2.then((res)=>{
//     console.log("Promise2:", res);
// });

// promise3.then((res)=>{
//     console.log("Promise3:", res);
// });

Promise.all([promise1, promise2, promise3])
    .then((values)=>{
        console.log(values);
    })
    .catch((error)=>{
        console.error("A promise failed to resolve", error);
    });

