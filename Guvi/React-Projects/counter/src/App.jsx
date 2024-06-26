import { useState } from "react"
import Counter from "./Counter";

function App() {

  const [isShown, setIsShown] = useState(true);

  return (
    <div>
      <button onClick={() => {
        console.log("The value of isShown: ", isShown);
        setIsShown(!isShown)}}>
        {isShown ? 'Hide Counter' : 'Show Counter'}
      </button>
      {isShown ? <Counter/> : null}
    </div>
  )
}

export default App
