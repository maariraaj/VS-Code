let a=[10,15,20,30,9,6,16,25];

// for(let i=0;i<a.length;i++){
//     if(a[i]> 10){
//         console.log(a[i]);
//     }
// }

let result=a.filter(function(x){
    return x > 10;
});
console.log(result);


// console.log(JSON.stringify(result)); (another methos to print(as an array))

// console.log(a.filter(function(x){
//     return x > 10;
// })
// );