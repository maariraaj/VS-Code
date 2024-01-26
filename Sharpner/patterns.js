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


// for(let i=1;i<=5;i++){
//     let str="";
//     for(let j=1;j<=5-i;j++){
//         str += " "
//     }
//     for(let j=1;j<=i;j++){
//         str += "*"
//     }
//     for(let j=1;j<=i-1;j++){
//         str += "*"
//     }
//     for(let j=1;j<=5-i;j++){
//         str += " "
//     }
    
//     console.log(str);
// }


















for(let i=11;i<=15;i++){
    let str="";
    for(let j=33;j<=48-i;j++){
        str+="*";
    }console.log(str);
}

//Output:
// *****
// ****
// ***
// **
// *