import styles from './Cart.module.css';
import CartContext from '../../context/CartContext';
import { useContext } from 'react';
import CartItem from './CartItem';

const Cart=(props)=>{
    const contextItems=useContext(CartContext);

    const subtotal= `₹ ${contextItems.total.toFixed(2)}`

    const handleClearItem=()=>{
        contextItems.clearItem();
    }
    const handleIncrements=(itemId)=>{
        const item=contextItems.items.find(item => item.id === itemId)
        if(item){
            const updatedItem={...item, quantity: 1};
            contextItems.addItem(updatedItem);
        }
    }
    const handleDecrements=(id)=>{
        contextItems.removeItem(id);
    }

    return(
        <div className={styles.cartContainer}>
            <header className={styles.cartHeader}>
                <button onClick={props.onClose} className={styles.cartCloseBtn}>
                    &times;
                </button>
                <h2>Cart</h2>
                <button onClick={handleClearItem} className={styles.cartClear}>
                    Clear All
                </button>
            </header>
            <div className={styles.cartItemsContainer}>
                {contextItems.items.length === 0 ? (
                    <p>There are no items in the cart!!</p>
                ) : (
                    <ul className={styles.cartItems}>
                        {contextItems.items.map((item)=>{
                            return <CartItem 
                                key={item.id}
                                id={item.id}
                                name={item.name}
                                image={item.image}
                                price={item.price}
                                quantity={item.quantity} 
                                onAdd={()=>handleIncrements(item.id)}
                                onRemove={()=>handleDecrements(item.id)} />
                        })}
                    </ul>
                )}
                <div className={styles.total}>
                    <span>Total</span>
                    <span>{subtotal}</span>
                </div>
                <div className={styles.cartDivider}></div>
                <button className={styles.checkoutBtn}>Check Out</button>
            </div>
        </div>
    )
}

export default Cart;