import React, { useState } from 'react'

const CartContext = React.createContext({
    items: [],
    tourList: [],
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

    const tourList = [
        {
            id: 1,
            title: "DTE ENERGY MUSIC THEATRE",
            location: "DETROIT, MI",
            date: "JUL 16"
        },
        {
            id: 2,
            title: "BUDWEISER STAGE",
            location: "TORONTO,ON",
            date: "JUL 19"
        },
        {
            id: 3,
            title: "JIGGY LUBE LIVE",
            location: "BRISTOW, VA",
            date: "JUL 22"
        },
        {
            id: 4,
            title: "AK-CHIN PAVILION",
            location: "PHOENIX, AZ",
            date: "JUL 29"
        },
        {
            id: 5,
            title: "T-MOBILE ARENA",
            location: "LAS VEGAS, NV",
            date: "AUG 2"
        },
        {
            id: 6,
            title: "CONCORD PAVILION",
            location: "CONCORD, CA",
            date: "AUG 7"
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
            tourList: tourList,
            onAddToCart: addToCartHandler
        }}>
            {props.children}
        </CartContext.Provider>
    )
}

export default CartContext;