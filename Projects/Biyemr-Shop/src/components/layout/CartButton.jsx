import styles from './CartButton.module.css';
import CartIcon from '../cart/CartIcon';
import CartContext from '../../context/CartContext';
import { useContext } from 'react';

const CartButton = () => {
    const cartValue=useContext(CartContext);
    const totalQuantity=cartValue.items.reduce((total, item)=>{
        return total + item.quantity;
    }, 0)
  return (
    <button className={styles['cart-container']}>
        <span><CartIcon /></span>
        <span className={styles.badge}>{totalQuantity}</span>
    </button>
  )
}

export default CartButton