// function fetchData(url){
//     console.log(fetch(url));
// }
// fetchData("https://restcountries.com/v3.1/all"); 







// function fetchData(url){
//     fetch(url).then((response)=>{
//         console.log(response.json());
//     });
// }
// fetchData("https://restcountries.com/v3.1/all"); 




// fetch("https://restcountries.com/v3.1/all")
//     .then((res)=>res.json())
//     .then((data)=>{
//         console.log(data);
//     });



//  document.getElementById("weatherInfo").addEventListener("click", ()=>{
//     const country="India";
//     const api="dfd650f32cc47b207bab7af04698add3";

//     fetch(`https://restcountries.com/v3.1/name/${country}`)
//         .then((response)=>response.json())
//         .then((data)=>{
//             const capital=data[1].capital[0];
//             return fetch(
//                 `https://api.openweathermap.org/data/2.5/weather?q=${capital}&appid=${api}`
//                 );
//         })
//         .then((response)=>response.json())
//         .then((data)=>{
//             document.getElementById("details")
//             .innerHTML=`Weather of ${data.name}: ${data.weather[0].main}, Temp: ${data.main.temp}`
//         })
//         .catch((err)=>{
//             console.log("Error:", err);
//          });
//  });


//USING ASYNC AWAIT

document.getElementById("weatherInfo").addEventListener("click", async ()=>{
    const country="France";

    const api="dfd650f32cc47b207bab7af04698add3";

    let response=await fetch(`https://restcountries.com/v3.1/name/${country}`);
    
    let data=await response.json();
    
    const capital=data[0].capital[0];
    
    let weatherResponse=await fetch(
                `https://api.openweathermap.org/data/2.5/weather?q=${capital}&appid=${api}`
                );

    let weatherData =await weatherResponse.json();

    document.getElementById("details")
            .innerHTML=`Weather of ${weatherData.name}: ${weatherData.weather[0].main}, Temp: ${weatherData.main.temp}`;
        });



        


