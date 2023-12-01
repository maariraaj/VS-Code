import React, { useRef, useState } from 'react'

function Timer() {
    const [seconds, setSeconds]=useState(0);
    //const [timer, setTimer]=useState(null);

    const timer=useRef(null);

    // const start=()=>{
    //     setTimer(setInterval(()=>{
    //         setSeconds(cs=> cs +1);
    //     }, 1000));
    // };


    const start=()=>{
        timer.current=setInterval(()=>{
            setSeconds(cs=> cs +1);
        }, 1000);
    };

    const stop=()=>{
        clearInterval(timer.current);
    };

  return (
    <div>
        <button onClick={start}>Start</button>
        <button onClick={stop}>Stop</button>
        <p>Seconds: {seconds}</p>
    </div>
  )
}

export default Timer