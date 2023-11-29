import React from 'react'

function Greeting(props) {
  return (
    <div>
        <h1>Welcome to {props.course.name}</h1>
    </div>
  )
}

export default Greeting