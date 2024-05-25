const projectorPromise = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        let payBacks=Math.random() > 0.5;
        if(payBacks){
            resolve("Projector rented successfully");
        }else{
            reject("Error: Projectors out of stock");
        }
    }, 1000);
});

const pizzasPromise = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        let payBacks=Math.random() > 0.5;
        if(payBacks){
            resolve("Pizzas delivered at time");
        }else{
            reject("Error: Pizzas not delivered on time");
        }
    }, 2000);
});

const friendsPromise = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        let payBacks=Math.random() > 0.5;
        if(payBacks){
            resolve("Both friends available");
        }else{
            reject("Error: Both friends not available");
        }
    }, 3000);
});

Promise.all([projectorPromise, pizzasPromise, friendsPromise])
    .then((results)=>{
        results.forEach((result)=>{
            console.log(result);
        });
    })
    .catch((err)=>{
        console.log(err);
    })