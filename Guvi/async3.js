// let name;
// const getName=(callback)=>{    
//     setTimeout(()=>{
//         name="Muthuprabha";
//         callback();
//     },2000);
// };

// const greet=()=>{
//     console.log(`Hello ${name}`);
// };

// getName(greet);


const getName=(callback)=>{
    let name;    
    setTimeout(()=>{
        name="Muthuprabha";
        callback(name);
    },2000);
};

const greet=(name)=>{
    console.log(`Hello ${name}`);
};

getName(greet);