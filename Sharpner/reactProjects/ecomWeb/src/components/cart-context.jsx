import React, { useState } from 'react'

const CartContext = React.createContext({
    items: [],
    onAddToCart: () => { }
});

export const CartContextProvider = (props) => {
    const productsArr = [
        {
            id: 1,
            title: 'Colors',
            price: 100,
            imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%201.png',
            quantity: 0
        },
        {
            id: 2,
            title: 'Black and white Colors',
            price: 50,
            imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%202.png',
            quantity: 0
        },
        {
            id: 3,
            title: 'Yellow and Black Colors',
            price: 70,
            imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%203.png',
            quantity: 0
        },
        {
            id: 4,
            title: 'Blue Color',
            price: 100,
            imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%204.png',
            quantity: 0
        }
    ]
    const [items, setItems] = useState(productsArr);

    const addToCartHandler = (itemId) => {
        setItems(items.map(item => {
            if (item.id === itemId) {
              return { ...item, quantity: item.quantity + 1 };
            }
            return item;
          }));
    }

    return (
        <CartContext.Provider value={{
            items: items,
            onAddToCart: addToCartHandler
        }}>
            {props.children}
        </CartContext.Provider>
    )
}

export default CartContext;