for(let i=1;i<=5;i++){
    let str="";
    for(let j=1;j<=5-i;j++){
        str += " "
    }
    for(let j=1;j<=i;j++){
        str += "*"
    }
    for(let j=1;j<=i-1;j++){
        str += "*"
    }
    for(let j=1;j<=5-i;j++){
        str += " "
    }
    
    console.log(str);
}




