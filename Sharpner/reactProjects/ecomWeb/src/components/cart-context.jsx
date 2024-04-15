import React, { useState } from 'react'

const CartContext = React.createContext({
    items: [],
    tourList: [],
    onAddToCart: () => { }
});

export const CartContextProvider = (props) => {
    const productsArr = [
        {
            id: "p1",
            title: 'Colors',
            price: 100,
            imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%201.png',
            category: "Music",
            stock: 2500,
            details: "Lorem ipsum carrots enhanced rebates. Excellent sayings of a man of sorrows, hates no prosecutors will unfold in the enduring of which were born in it? this is often not at once take the hardships of the life of harsh condemn, we are accusing him? Him whom something large cisterns. ",
            quantity: 0
        },
        {
            id: "p2",
            title: 'Black and white Colors',
            price: 50,
            imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%202.png',
            category: "Music",
            stock: 1700,
            details: "Often leads smallest mistake some pain main responsibilities are to stand for the right builder of pleasure, accepted explain up to now.Lorem ipsum dolor, sit amet consectetur rebates. The distinction, that arise from or to. The greater, therefore, an obstacle to the duties of the debts",
            quantity: 0
        },
        {
            id: "p3",
            title: 'Yellow and Black Colors',
            price: 70,
            imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%203.png',
            category: "Music",
            stock: 3800,
            details: "The things we are accusing of these in the explication of the truth receives from the flattery of her will never be the trouble and they are refused to the pleasures and the pleasures of the pain, explain the treatment of excepturi of the blessed sufferings.",
            quantity: 0
        },
        {
            id: "p4", 
            title: 'Blue Color',
            price: 100,
            imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%204.png',
            category: "Music",
            stock: 554,
            details: "I never said will unfold in him receives at another time he may please the one that those works, we are less than they, this refused to the pleasures of deleniti? Those are! Will unfold in times of pleasure, this pain will be a right enjoyed by corrupt, are accusing him of all pleasures.",
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