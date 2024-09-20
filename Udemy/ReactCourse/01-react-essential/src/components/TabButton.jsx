import React from 'react'

const TabButton = ({ children, name }) => {
    function handleClick() {
        console.log('Hello World!!')
    }
    return (
        <li>
            <button onClick={handleClick}>{children}</button>
        </li>
    )
}

export default TabButton;