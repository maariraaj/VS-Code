// const arr = [1, 2, 3, 4, 5];
// const total = arr.reduce((acc, curr) => acc + curr, 0);
// //console.log(total);

// class Person {
//     constructor(name, age) {
//         this.name = name;
//         this.age = age;
//     }
// }
// const person1 = new Person('Mariraj', 29);
// console.log(person1);

// let arr = [{
//     name: "Suresh",
// },
// {
//     name: "Abhik"
// },
// {
//     name: "Nitin"
// },
// {
//     name: "Yash"
// }];

// let obj = {};
// for (let i = 0; i < arr.length; i++) {
//     obj[arr[i].name] = i;
// }
// console.log(obj);

// let input = {
//     b: 2,
//     a: 1,
//     c_label: 'bye',
//     a_label: 'hello',
//     b_label: 'hi',
//     c: 3,
// };
// let converted = Object.entries(input).reduce((acc, [key, value]) => {
//     if (!key.endsWith('_label')) {
//         let labelKey = key + '_label';
//         acc[key] = {
//             value,
//             lebel: input[labelKey]
//         }
//     }
//     return acc;
// }, {});
// console.log(converted);




// function asyncOperation1(callback) {
//     setTimeout(function () {
//         console.log("Async operation 1 completed");
//         if (callback) callback();
//     }, 1000);
// }
// function asyncOperation2(callback) {
//     setTimeout(function () {
//         console.log("Async operation 2 completed");
//         if (callback) callback();
//     }, 1500);
// }
// function asyncOperation3(callback) {
//     setTimeout(function () {
//         console.log("Async operation 3 completed");
//         if (callback) callback();
//     }, 500);
// }

// function exampleCallbackHell() {
//     asyncOperation1(function () {
//         asyncOperation2(function () {
//             asyncOperation3(function () {
//                 console.log('Done');
//             })
//         })
//     })
// }
// exampleCallbackHell()



function asyncOperation1() {
    return new Promise((resolve) => {
        setTimeout(function () {
            console.log("Async operation 1 completed");
            resolve();
        }, 1000);
    })
}
function asyncOperation2() {
    return new Promise((resolve) => {
        setTimeout(function () {
            console.log("Async operation 2 completed");
            resolve();
        }, 1500);
    })
}
function asyncOperation3() {
    return new Promise((resolve) => {
        setTimeout(function () {
            console.log("Async operation 3 completed");
            resolve();
        }, 500);
    })
}

// async function examplePromise() {
//     await asyncOperation1();
//     await asyncOperation2();
//     await asyncOperation3();
// }
// examplePromise()

asyncOperation1()
    .then(asyncOperation2)
    .then(asyncOperation3)
    .catch((error) => console.log(error))