import React from 'react'

function MyComp(props) {
    console.log(props.msg);
    console.log(props.no);
  return (
    <h1>Hello, We are working on Props!</h1>
  )
}

export default MyComp