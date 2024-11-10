// const fs = require('fs');
// fs.writeFileSync('hello.txt', 'Hello from Node.JS');

// console.log('Hello World');


// const product = (a, b) => {
//     return a * b;
// }
// console.log(product(5, 1000));


// const student = {
//     name: 'Raj',
//     age: '29',
//     greet() {
//         console.log('Hi, I am ' + this.name);
//     }
// }
// student.greet();



const arr = ['apple', 'oranges', ' ', 'mango', ' ', 'lemon'];
const newArr = arr.map(item => {
    return item === ' ' ? 'empty string' : item;
});
console.log(newArr);