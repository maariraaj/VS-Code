import * as React from 'react'; 
import './App.css'

const list=[
  {
    title: "React",
    url: "https://react.dev/",
    points:4,
    ObjID:0,
  },
  {
    title: "Google",
    url: "https://www.google.co.in/",
    points:5,
    ObjID:1,
  },
  {
    title: "Bing",
    url: "https://www.bing.com/",
    points:3,
    ObjID:2,
  }
];
 
function App() {
  

  return (
    <div>
      <h1>React-working with Lists!</h1>
      <ul>
        {list.map((item,index)=>{
          return <li key={item.ObjID}>
            <span>
              <a href={item.url} target='_blank'>{item.title}</a>
            </span>
            <span></span>
            <span>{item.points}</span>
            </li>
        })}
      </ul>
      <div className="card" id='main'>
        <img src="..." class="card-img-top" alt="..."/>
        <div className="card-body">
          <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        </div>
      </div>
    </div>
  );
}

export default App
