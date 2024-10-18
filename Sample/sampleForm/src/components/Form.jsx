import React from 'react'

const Form = () => {
    return (
        <form onSubmit={submitHandler}>
            <label>Name:</label>
            <input
                type='text'
                ref={nameRef}
                placeholder='Enter Name here'
            />
        </form>
    )
}

export default Form