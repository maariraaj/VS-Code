import React, { useEffect, useState } from 'react'
import './ShoppingItems.css'
const ShoppingItems = () => {
    const [items, setItems] = useState([]);
    const fetchData = async () => {
        const response = await fetch('https://dummyjson.com/products')
        const data = await response.json();
        setItems(data.products)
    }
    useEffect(() => {
        fetchData();
    }, [])
    return (
        <>
            <h1>Shopping Cart</h1>
            <div className="product-list">
                {items.map((product) => (
                    <div className="product-card" key={product.id}>
                        <img src={product.thumbnail} alt={product.title} className="product-image" />
                        <h3 className="product-title">{product.title}</h3>
                        <p className="product-price">{product.price}</p>
                        <p className="product-description">{product.description}</p>
                    </div>
                ))}
            </div>
        </>
    )
}
export default ShoppingItems