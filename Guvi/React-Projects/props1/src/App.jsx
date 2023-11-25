import './App.css'
import MyComp from './MyComp'
import State from './State';

function App() {
//let props = { msg: "Hello, no:32}; 

  return (
    // <MyComp msg="Hello" no={69} />

    // <button onClick={()=>{console.log("Clicked!");}}>Click Me</button>

    // <button onClick={handleClick}>Click Me</button>
    <div>
      <MyButton onClick={handleClick} onMouseOut={()=>{console.log("MouseOut Event!!");}}>Click Me</MyButton>
      <MyButton onClick={handleClick}>Save Me</MyButton>
      <State/>
    </div>
  ) 
}
// const handleClick = ()=>{console.log("Clicked!");}

function handleClick(){
  console.log("Clicked!");
}

//Custom Components!!

function MyButton(props){
  //console.log("Spread Operator: ", {...props});
  return (
    <div>
    <button onClick={props.onClick} onMouseOut={props.onMouseOut} style={{color: 'red', backgroundColor: 'White'}}>
      {props.children}
    </button>
    
    </div>

    // <button {...props} style={{color: 'red', backgroundColor: 'White'}}>
    //   {props.children}
    // </button>
  )
}

export default App
