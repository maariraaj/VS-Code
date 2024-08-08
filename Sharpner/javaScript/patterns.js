//formula is Jend=mi+C where C is constant

//Output:
// *
// **
// ***
// ****
// *****

// for(let i=11;i<=15;i++){
//     let str="";
//     for(let j=33;j<=i+22;j++){
//         str+="*";
//     }console.log(str);
// }



//Output:
//     *
//    ***
//   *****
//  *******
// *********

// for (let i = 1; i <= 5; i++) {
//     let str = "";
//     for (let j = 1; j <= 5 - i; j++) {
//         str += " "
//     }
//     for (let j = 1; j <= i; j++) {
//         str += "*"
//     }
//     for (let j = 1; j <= i - 1; j++) {
//         str += "*"
//     }
//     console.log(str);
// }



//Output:
// *****
// ****
// ***
// **
// *

// for(let i=11;i<=15;i++){
//     let str="";
//     for(let j=33;j<=48-i;j++){
//         str+="*";
//     }console.log(str);
// }


//Output:
// 1
// 22
// 333
// 4444
// 55555

// for(let i=1;i<=5;i++){
//     let str="";
//     for(let j=1;j<=i;j++){
//             str=str+i;
//     }
//     console.log(str);
// }



// Output:

// *    *
// **   **
// ***  ***
// **** ****
// **********

// for(let i=1;i<=5;i++){
//     let str="";
//     for(let j=1;j<=i;j++){
//         str=str+"*";
//     }
//     for(j=1;j<=5-i;j++){
//         str=str+" ";
//     }
//     for(let j=1;j<=i;j++){
//         str=str+"*";
//     }
//     for(j=1;j<=5-i;j++){
//         str=str+"";
//     }console.log(str);
// }



// OUTPUT:
// *****
// ****
// ***
// **
// *
// *
// **
// ***
// ****
// *****

// for(let i=1;i<=10;i++){
//     let str="";
//     if(i<=5){
//         for(let j=1;j<=6-i;j++){
//             str=str+"*";
//         }
//     }else{
//     for(let j=1;j<=i-5;j++){
//         str=str+"*"
//     }
//     }console.log(str);
// }



// Output:
// *****
// *
// ****
// **
// ***
// ***
// **
// ****
// *
// *****

// for(var i=1;i<=10;i++){
//     var str="";
//     if(i%2!=0){
//     for(j=1;2*j<=11-i;j++){
//         str=str+"*";
//     }
//     }
//     else{
//     for(j=1;j<=i/2;j++){
//         str=str+"*";
//     }
//     }
//     console.log(str);
// }


// *
// **
// ***
// ****
// *****
// *****
// ****
// ***
// **
// *

// for (let i = 1; i <= 10; i++) {
//     let str = "";
//     if (i <= 5) {
//         for (let j = 1; j <= i; j++) {
//             str = str + "*";
//         }
//     } else {
//         for (let j = 1; j <= 11 - i; j++) {
//             str = str + "*";
//         }
//     } console.log(str);
// }  