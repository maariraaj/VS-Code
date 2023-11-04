// fetch(`https://restcountries.com/v3.1/name/France`)
//         .then((response)=>response.json())
//         .then((data)=>{
//             const capital=data[0].capital[0];
//             return fetch(
//                 `https://api.openweathermap.org/data/2.5/weather?q=${capital}&appid=${api}`
//                 );
//         }); 

// async function fetchData(){
//     let response=await fetch(`https://restcountries.com/v3.1/name/France`);
//     let data=await response.json();
//     let capital=data[0].capital[0];
//     console.log("France capital:",capital);
// }
// fetchData(); 

// //Using Arrow function

// const fetchDataAsync=async ()=>{
//     let response=await fetch(`https://restcountries.com/v3.1/name/France`);
//     let data=await response.json();
//     let capital=data[0].capital[0];
//     console.log("France capital using Async Programming:",capital);
// }
// fetchDataAsync(); 


