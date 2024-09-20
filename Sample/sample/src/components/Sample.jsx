import React from 'react'
import Sample2 from './sample2'
import './Sample.css';

const Sample = () => {
    function controller(name) {
        console.log(name)
    }
    return (
        <div>
            <div id='child'>
                Mariraj.
            </div>
        </div>
    )
}

export default Sample