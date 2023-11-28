import React from 'react'
import ChildComponent from './ChildComponent'
import { useState } from 'react'

function ParentComponent() {
    const [childData, setChildData]=useState('');
    const handleReceiveData=(data)=>{
        setChildData(data);
    }
  return (
    <div>
        <h1>Data from the Child Component: {childData}</h1>
        <ChildComponent receiveData={handleReceiveData} />
    </div>
  )
}

export default ParentComponent