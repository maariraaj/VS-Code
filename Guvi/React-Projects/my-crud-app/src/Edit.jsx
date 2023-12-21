import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

function Edit() {
    const [title, setTitle]=useState('');
    const {id}=useParams();

    useEffect(()=>{
        axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
            .then(response=>{
                setTitle(response.data.title);
            })
    }, [id]);

    const handleSubmit=(event)=>{
        event.preventDefault();
        axios.put(`https://jsonplaceholder.typicode.com/posts/${id}`, {
            title,
        }).then(response=>{console.log(response.data)});
    };

  return (
    <form onSubmit={handleSubmit}>
        <input type="text" value={title} onChange={(e)=> setTitle(e.target.value)}></input>
        <button type='submit'>Update</button>
    </form>
  )
}

export default Edit;