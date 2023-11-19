import './App.css'

const name="Mariraj"
const textValue= "Search Here!!"

const greeting={
    wish:"Hello",
    title:"React.js !!",
    value:"Type here",
}

function getTitle(tit){
    return tit;
}

function Home() {
  return (
    <div>
      <p>{greeting.wish}, {greeting.title} and {getTitle('Node.js!!')}</p> 
      <p>Hello, I am {name} from this #HOME Universe!!</p>
      <label htmlFor='search'>Search</label>
      {/* <input type='text' id='search' value={greeting.value}/> */}
      <input type='text' id='search' value={textValue}/>
    </div>
  )
}

export default Home