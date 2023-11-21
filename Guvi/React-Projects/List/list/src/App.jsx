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
    </div>
  );
}

export default App
