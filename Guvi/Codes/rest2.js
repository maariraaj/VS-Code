let numbers=[1,2,3,4,5,6];
// function result(){
//     let res=[];
//     for(let i=0;i<numbers.length;i++){
//         console.log(i);
//         console.log(i!=2 && i!=4);
//         if(i !=2 && i !=4){
//             res.push(numbers[i]);
//         }
//     }
//     return res;
// }
// console.log(result());


const [one,,, ...arr]=numbers;
console.log(arr);

const [a,b,c,d,e,f]=numbers;
console.log(a,b,c,d,e,f);


const [m,n, ...xyz]=numbers;
console.log(xyz);