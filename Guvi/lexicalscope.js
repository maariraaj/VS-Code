//Lexical Scope:
//Lexical scope is the ability for a function scope to access variables from the parent scope. We call the child function to be lexically bound by that of the parent function.


// var globalVar="I am a Global variable";

// function outerFunction(){
//     var outerVar="I am a Outer variable";

//     function innerFunction(){
//         var innerVar="I am an Inner variable";

//         console.log("From the Inner function: ", innerVar);
//         console.log("From the Inner function: ", outerVar);
//         console.log("From the Inner function: ", globalVar);
//     }
//     innerFunction();
//     console.log("From the Outer function: ", outerVar);
//     console.log("From the Outer function: ", globalVar);
// }
// outerFunction();
// console.log("From outside: ", globalVar);


function outerFunction(){
    this.outerValue="Outer"

    // function innerFunction(){
    //     console.log(this.outerValue);
    // }
    const innerFunction=()=>{
        console.log(this.outerValue);
    }
    innerFunction();
}
outerFunction();