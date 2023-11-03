// function getDressed(callback){
//     console.log("Getting dressed...");
//     setTimeout(()=>{
//         callback();
//     },1000);
// }

// function eatBreakfast(callback){
//     console.log("Eating Breakfast...");
//     setTimeout(()=>{
//         callback();
//     },1000);
// }

// function goOut(){
//     console.log("Going Out");
// }

// getDressed(()=>{
//     eatBreakfast(()=>{
//         goOut();
//     });
// })


//USING PROMISE 

function getDressed(callback){
    console.log("Getting dressed...");
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve();
        },1000);
    })
}

function eatBreakfast(){
    console.log("Eating Breakfast...");
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve();
        },1000);
    })
}

function goOut(){
    console.log("Going Out");
}

// getDressed().then(eatBreakfast).then(goOut).catch((err)=>{
//     console.error("An error occured:",err);
// });


//USING AWAIT

async function startDay(){
    await getDressed();
    await eatBreakfast();
    goOut();
}
startDay()