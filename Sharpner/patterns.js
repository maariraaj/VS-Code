//formula is Jend=mi+C where C is constant

// for(let i=11;i<=15;i++){
//     let str="";
//     for(let j=33;j<=i+22;j++){
//         str+="*";
//     }console.log(str);
// }


//Output:
// *
// **
// ***
// ****
// *****



















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