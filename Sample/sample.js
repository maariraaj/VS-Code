// function sample(callback) {
//     console.log("Sample");
//     callback();
// }
// function sample1() {
//     console.log("From sample 2");
// }
// sample(sample1);


// function goingToPark(name, callback) {
//     console.log(name + " " + "is going to park");
//     callback(play);
// }
// function meeting(callback) {
//     console.log("He will meet our friends");
//     callback(eat);
// }
// function play(callback) {
//     console.log("We played a game");
//     callback(leave);
// }
// function eat(callback) {
//     console.log("Eat Food");
//     callback();
// }
// function leave() {
//     console.log("Leave from the park");
// }
// goingToPark("Motu", meeting);



// function goingToPark(name) {
//     return new Promise((resolve)=>{
//         setTimeout(()=>{
//             console.log(name + " " + "is going to park");
//             resolve()
//         }, 1000)
//     })
// }
// function meeting() {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             console.log("He will meet our friends");
//             resolve()
//         }, 1000)
//     })
// }
// function play(callback) {
//     console.log("We played a game");
//     callback(leave);
// }
// function eat(callback) {
//     console.log("Eat Food");
//     callback();
// }
// function leave() {
//     console.log("Leave from the park");
// }
// goingToPark("Motu", meeting);



// function goingToPark(name, callback) {
//     setTimeout(() => {
//         console.log(name + " " + "is going to park");
//         callback();
//     }, 1000);
// }
// function meeting(callback) {
//     setTimeout(() => {
//         console.log("He will meet our friends");
//         callback();
//     }, 1000);
// }
// function play(callback) {
//     setTimeout(() => {
//         console.log("We played a game");
//         callback();
//     }, 1000);
// }
// function eat(callback) {
//     setTimeout(() => {
//         console.log("Eat Food");
//         callback();
//     }, 1000);
// }
// function leave() {
//     setTimeout(() => {
//         console.log("Leave from the park");
//     }, 1000);
// }
// goingToPark("Motu", function () {
//     meeting(function () {
//         play(function () {
//             eat(function () {
//                 leave();
//             })
//         })
//     })
// })


// setTimeout(() => {
//     console.log('User Data');
//     setTimeout(() => {
//         console.log('User post');
//         setTimeout(() => {
//             console.log('User comment');
//             setTimeout(() => {
//                 console.log('User wish');
//             }, 1000);
//         }, 1000);
//     }, 1000);
// }, 1000);


// function userData(callback) {
//     console.log('User Data');
//     callback(userComment);
// }
// function userPost(callback) {
//     console.log('User Post');
//     callback(userWish);
// }
// function userComment(callback) {
//     console.log('User Comment');
//     callback();
// }
// function userWish() {
//     console.log('User Wish');
// }
// userData(userPost);



// function fetchData(callback) {
//     console.log("Fetching data...");
//     setTimeout(() => {
//         console.log("Data fetched!");
//         callback();
//     }, 2000);
// }

// function processData() {
//     console.log("Processing data...");
// }

// fetchData(processData);


// function userData(flag) {
//     return new Promise((resolve, reject) => {
//         if (flag) {
//             console.log('Success user Data')
//             resolve()
//         } else {
//             reject('Failed user data')
//         }
//     });
// }
// function userPost(flag) {
//     return new Promise((resolve, reject) => {
//         if (flag) {
//             console.log('Success user Post');
//             resolve()
//         } else {
//             reject('failed user Post');
//         }
//     });
// }
// function userComment(flag) {
//     return new Promise((resolve, reject) => {
//         if (flag) {
//             console.log('Success user Comment');
//             resolve()
//         } else {
//             reject('failed user Comment');
//         }
//     });
// }
// function userWish(flag) {
//     return new Promise((resolve, reject) => {
//         if (flag) {
//             console.log('Success user wish');
//             resolve
//         } else {
//             reject('Failed user wish');
//         }
//     })
// }

// async function execute() {
//     try {
//         await userData(true);
//         await userPost(true);
//         await userComment(true);
//         await userWish(true);
//     } catch (err) {
//         console.error(err);
//     }
// }
// execute();


// userData(true)
//     .then(userPost(true))
//     .then(userComment(true))
//     .then(userWish(true))
//     .catch((error) => console.log(error))



// const promise1 = new Promise((res) => setTimeout(() => res('First Promise'), 1000));
// const promise2 = new Promise((res, rej) => setTimeout(() => rej('Second Promise is failed'), 1000));
// const promise3 = new Promise(res => setTimeout(() => res('Third Promise'), 1000));

// Promise.all([promise1, promise2, promise3])
//     .then((result) => {
//         console.log(result)
//     })
//     .catch((err) => console.error('One of the promise failed:', err));


// const obj = {
//     'name': 'Prabha Kutty',
//     age: 22,
//     city: 'Trivandrum',
//     multiply: function (num) {
//         return num * 2;
//     }
// }
// //console.log(obj.multiply(5))
// //console.log(obj['multiply'](5))


// for (let key in obj) {
//     //console.log("Keys", key);
//     //console.log("Value", obj[key])
// }

// const arr = [`Muthu`, 23, 'Kochi', true];
// for (let index in arr) {
//     //console.log(arr[index]);
// }

// class Hello {
//     constructor(name, age) {
//         this.name = name;
//         this.age = age;
//     }
// }
// const person = new Hello('Muthu', 22);
// console.log(person)


// const person2 = new Object();
// person2.name = 'Prabha';
// person2.age = 23;
// person2.luckyNum = function (age) {
//     return age * 7;
// }
// console.log(person2)
// console.log(person2.luckyNum(22))


// const name = `Prabha`
// const age = 23
// console.log(first)


// let a = 7;
// console.log(a);
// aFunc();
// function aFunc() {
//     var x = "Function1 itself";
//     console.log(x);
// }
// // let a = 7;

// function outerFunction() {
//     let outerVar = 'Its an outer variable';
//     function innerFunction() {
//         console.log(outerVar);
//     }
//     return innerFunction;
// }
// const closure = outerFunction();
// closure()

// const formPromise = new Promise((resolve, reject) => {
//     const success = false;
//     setTimeout(() => {
//         if (success) {
//             resolve('Successfully updated');
//         } else {
//             reject('Not updated')
//         }
//     }, 1000)
// });
// formPromise
//     .then((formStatus) => {
//         console.log(formStatus)
//     })
//     .catch((error) => {
//         console.log(error);
//     })

// setTimeout(() => {
//     console.log('Wake up');
//     setTimeout(() => {
//         console.log('Walking')
//         setTimeout(() => {
//             console.log('Eating')
//             setTimeout(() => {
//                 console.log('Go to work')
//             }, 1000)
//         }, 1000)
//     }, 1000)
// }, 1000)


// function wakeUp() {
//     return new Promise((res) => {
//         setTimeout(() => {
//             console.log('Waking')
//             res();
//         }, 1000)
//     })
// }
// function walking() {
//     return new Promise((res) => {
//         setTimeout(() => {
//             console.log('Walking');
//             res();
//         }, 1000)
//     })
// }
// function eating() {
//     return new Promise((res) => {
//         setTimeout(() => {
//             console.log('Eating')
//             res();
//         }, 1000)
//     })
// }
// function work() {
//     return new Promise((res) => {
//         setTimeout(() => {
//             console.log('Go to work');
//             res();
//         }, 1000)
//     })
// }
// wakeUp()
//     .then(walking)
//     .then(eating)
//     .then(work)

// async function daily() {
//     await wakeUp()
//     await walking()
//     await eating()
//     await work()
// }
// daily()

// var x = 10;
// //console.log(y)
// let y = 20;
// console.log(y)
// function sample() {
//     var x = 100;
//     //console.log('function', x)
// }
// //console.log("Global", x)
// sample()
// var x = 10;
// {
//     var x = 100
//     console.log(`Block`, x)
// }
// console.log(`Global`, x)


// let arr = [1, 2, 3];
// let result = arr.reduce((acc, curr) => acc + curr, 0);
// console.log(result)


// function hello(name) {
//     return `Hello Mrs.${name}`;
// }
// function greet(hel, name) {
//     return hel(name)
// }
// console.log(greet(hello, 'Raj'))


// let arr = [0, 1, 2, 3, 4, 5];
// let result = arr.splice(1, 2, 61, 62, 63);
// console.log(`original arr`, arr)
// console.log(`Modified`, result)

// function adding(a) {
//     return function (b) {
//         return function (c) {
//             return a + b + c;
//         };
//     }
// }
// // const result = adding(5);
// console.log(adding(5)(6)(7))



// let obj = {
//     b: 2,
//     a: 1,
//     c_label: 'bye',
//     a_label: 'hello',
//     b_label: 'hi',
//     c: 3,
// };
// let converted = Object.entries(obj).reduce((acc, [key, value]) => {
//     if (!key.endsWith('_label')) {
//         // Find the corresponding label
//         let labelKey = key + '_label';
//         acc[key] = {
//             value: value,
//             label: obj[labelKey],
//         };
//     }
//     return acc;
// }, {});

// console.log(converted);




// const questions = [
//     {
//         title: 'Question 1',
//         questions: [
//             {
//                 title: 'Question 1.1',
//                 questions: [
//                     {
//                         title: 'Question 1.1.1',
//                     },
//                     {
//                         title: 'Question 1.1.2',
//                     },
//                 ],
//             },
//             {
//                 title: 'Question 1.2',
//                 questions: [
//                     {
//                         title: 'Question 1.2.1',
//                     },
//                     {
//                         title: 'Question 1.2.2',
//                     },
//                 ],
//             },
//         ],
//     },
// ];

// // Recursive function to print all titles
// function printTitles(questions) {
//     questions.forEach(question => {
//         console.log(question.title); // Print the title
//         if (question.questions) {
//             printTitles(question.questions); // Recursively call for nested questions
//         }
//     });
// }

// // Call the function to print all titles
// printTitles(questions);


// function reverseAlphanumeric(str) {
//     // Create an array to hold alphanumeric characters
//     const alphanumericChars = [];
//     // Create an array to hold the positions of non-alphanumeric characters
//     const nonAlphanumericPositions = [];
//     // Iterate through the string and separate characters
//     for (let i = 0; i < str.length; i++) {
//         if (/[a-zA-Z0-9]/.test(str[i])) {
//             alphanumericChars.push(str[i]); // Collect alphanumeric characters
//         } else {
//             nonAlphanumericPositions.push({ index: i, char: str[i] }); // Store non-alphanumeric characters and their positions
//         }
//     }
//     // Reverse the alphanumeric characters
//     alphanumericChars.reverse();
//     // Create a new array to construct the final result
//     const result = [];
//     let alphanumericIndex = 0;
//     // Rebuild the string with reversed alphanumeric characters and original non-alphanumeric characters
//     for (let i = 0; i < str.length; i++) {
//         if (nonAlphanumericPositions.some(pos => pos.index === i)) {
//             result[i] = nonAlphanumericPositions.find(pos => pos.index === i).char; // Place non-alphanumeric characters
//         } else {
//             result[i] = alphanumericChars[alphanumericIndex++]; // Place reversed alphanumeric characters
//         }
//     }
//     return result.join(''); // Join the array back into a string
// }
// const input = "Hello, World! 123";
// const output = reverseAlphanumeric(input);
// console.log(output); // Output: "321dl, roWol! leH"



// function wakeUp() {
//     return new Promise((res, rej) => {
//         setTimeout(() => {
//             console.log('Waking');
//             res();
//         }, 1000);
//     });
// }

// function walking() {
//     return new Promise((res, rej) => {
//         setTimeout(() => {
//             console.log('Walking');
//             rej('Error in walking'); // Rejects this promise
//         }, 1000);
//     });
// }

// function eating() {
//     return new Promise((res) => {
//         setTimeout(() => {
//             console.log('Eating');
//             res();
//         }, 1000);
//     });
// }

// function work() {
//     return new Promise((res) => {
//         setTimeout(() => {
//             console.log('Go to work');
//             res();
//         }, 1000);
//     });
// }

// // Using Promise.all
// Promise.all([wakeUp(), walking(), eating(), work()])
//     .then(() => {
//         console.log("All activities are completed");
//     })
//     .catch((error) => {
//         console.error("An error occurred:", error);
//     });



// const API_URL = 'https://dummyjson.com/products';
// fetch(API_URL)
//     .then(res => {
//         if (!res.ok) {
//             throw new Error('Network error', res.statusText);
//         }
//         return res.json();
//     })
//     .then(data => {
//         console.log('Data', data)
//     })
//     .catch(err => console.log(err))


function promise1() {
    return new Promise((res) => {
        setTimeout(() => {
            console.log('First')
            res()
        }, 7000)
    })
}
function promise2() {
    return new Promise((res) => {
        setTimeout(() => {
            console.log('Second')
            res()
        }, 4000)
    })
}
async function compi() {
    await promise1();
    await promise2();
}
compi()



