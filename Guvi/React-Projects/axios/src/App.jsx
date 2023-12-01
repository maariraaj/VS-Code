import { useState } from 'react'
import './App.css'
import axios from 'axios'
import { useEffect } from 'react';


// function App() {
  
//   fetch(`https://restcountries.com/v3.1/name/France`)
//     .then(response=>response.json())
//     .then(data=>console.log("Response data using normal fetch method: ",data));


//   //Axios method

//   axios.get(`https://restcountries.com/v3.1/name/France`)
//     .then(res=>{
//       console.log("Axios response data: ", res.data);
//     })


//   return (
//    <h1>Axios Method</h1>
//   )
// }

//Fetch All country names
function App(){
  const [countries,setCountries]=useState([]);
  useEffect(()=>{
    axios.get(`https://restcountries.com/v3.1/all`)
    .then(res=>{
      //Extract only the common names of the countries
      const countryName=res.data.map(i=>i.name.common);
      //console.log("Country Name: ", countryName);
      setCountries(countryName);
    });
  }, []);

  return(
    <div>
      <h1>List of Countries</h1>
      <ol>
        {countries.map((item,index)=>(
          <li key={index}>{item}</li>
        ))}
      </ol>
    </div>
  )
}

export default App
