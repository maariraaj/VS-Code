import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function List() {
    const [items, setItems]=useState([]);

    useEffect(()=>{
        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then(response=>{
                setItems(response.data);
            }).catch(error=>console.error('Error fetching data:', error));
    }, []);

    function deleteItem(id){
        axios.delete(`https://jsonplaceholder.typicode.com/posts/${id}`)
            .then(()=>{
                setItems(items.filter(item=>item.id != id));
            })
    }

  return (
    <div>
        {items.map(item=>(
            <div key={item.id}>{item.title}
                <Link to={`edit/${item.id}`}>Edit</Link>
                <button onClick={()=>{deleteItem(item.id)}}>Delete</button>
            </div>
        ))}
    </div>
  )
}

export default List