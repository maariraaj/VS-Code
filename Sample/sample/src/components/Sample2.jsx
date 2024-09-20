import React from 'react'
import Button from './Button';

const Sample2 = (props) => {
    const name = 'VS Code';

    return (
        <Button onClick={props.onControl(name)}>Button</Button>
    )
}

export default Sample2