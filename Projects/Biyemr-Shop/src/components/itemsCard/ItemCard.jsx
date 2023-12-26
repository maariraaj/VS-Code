import { useState } from 'react';
import style from './ItemCard.module.css';
import QuantityController from './QuantityController';
import { useRef } from 'react';
import CartContext from '../../context/CartContext';
import { useContext } from 'react';

const ItemCard=(props)=>{
    const [itemQuantity, setItemQuantity]=useState(1);
    const contextItems=useContext(CartContext);
    const quantRef=useRef(null);
    const price=props.price.toFixed(2);

    const amount = +price

    const handleQuanIncrease=()=>{
        setItemQuantity(prevQuant => prevQuant + 1);
    }
    const handleQuanDecrease=()=>{
        if(itemQuantity>1){
            setItemQuantity(prevQuant => Math.max(prevQuant - 1, 0));
        }
    }
    const handleQuantityChange=(e)=>{
        const updateQuantity=parseInt(quantRef.current.value);
        setItemQuantity(updateQuantity);
    }
    const handleAddToCart=()=>{
        const quantity=parseInt(quantRef.current.value);
        const item={
            id: props.id,
            image: props.image,
            name: props.name,
            price: amount,
            quantity: quantity 
        }
        contextItems.addItem(item);
        console.log(item);
    }

    return(
        <div className={style['item-card']}>
            <img src={props.image} alt={props.name} className={style['item-card_image']} />
            <div className={style['item-card_content']}>
                <h3 className={style['item-card_name']}>{props.name}</h3>
            </div>
            <div className={style['item-card_footer']}>
                <div className={style['item-card_quantity']}>
                    <QuantityController
                    ref={quantRef}
                    onIncrease={handleQuanIncrease}
                    onDecrease={handleQuanDecrease}
                    onChange={handleQuantityChange}
                    quantityNumber={itemQuantity} />
                </div>
                <div className={style.price}>{`₹ ${amount * itemQuantity}`}</div>
                <button onClick={handleAddToCart} className={style['item-card_add-btn']}>Add</button>
            </div>
        </div>
    )
}

export default ItemCard;