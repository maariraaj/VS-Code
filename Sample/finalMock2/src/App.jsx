import React, { useState } from 'react'
import './App.css'

const App = () => {
    const [data, setData] = useState('Accordion 1');
    const [toggle, setToggle]
    const handleCLick = () => {
        setData((prev) => prev === 'Accordion 1' ? 'Accodion 2' : 'Accordion 1');
    }
    return (
        <div className='container'>
            <div className='list' onClick={handleCLick}>
                {data}
            </div>
        </div>
    )
}

export default App