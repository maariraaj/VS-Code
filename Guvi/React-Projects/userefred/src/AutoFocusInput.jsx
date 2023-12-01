import React, { useEffect, useRef } from 'react'

// function AutoFocusInput() {
//     const inputElement=useRef(null);

//     useEffect(()=>{
//         inputElement.current.focus();
//     }, []);

//   return (
//     <input ref={inputElement} type="text" />
//   )
// }

function AutoFocusInput() {
    const inputRef=useRef(null);
    const focusInput=()=>{
      console.log("To check the inputRef: ", inputRef);
      inputRef.current.focus();
    }

  return (
    <div>
       <input ref={inputRef} type="text" />
       <button onClick={focusInput}>Focus</button>
    </div>
  )
}

export default AutoFocusInput