// var number1 = 2;
// var number2 = 5
// function add(a, b){
//     var answer = a + b;
//     return answer;
// }
// var sum = add(number1, number2);
// console.log(sum) //ans: 7
// console.log(answer) //ReferenceError: answer is not defined



//Memoization

// const memo = () => {
//     let catched = {};
//     return (value) => {
//         if (catched[value]) {
//             console.log('Catched result');
//             return catched[value]
//         } else {
//             console.log('Calculating result');
//             let result = value * 20;
//             catched[value] = result;
//             return result;
//         }
//     }
// }
// const multi = memo();
// console.log(multi(20))
// console.log(multi(30))
// console.log(multi(20))