import React, { useState } from 'react';
import axios from 'axios';

function Create() {
    const [title, setTitle]=useState('');
    const handleSubmit=(event)=>{
        event.preventDefault();
        axios.post('https://jsonplaceholder.typicode.com/posts', {
            title,
            userId:1,
            body:'Samsung'
        }).then(response=>{console.log(response.data)});
    };
  return (
    <form onSubmit={handleSubmit}>
        <input type="text" value={title} onChange={(e)=> setTitle(e.target.value)}></input>
        <button type='submit'>Create</button>
    </form>
  )
}

export default Create