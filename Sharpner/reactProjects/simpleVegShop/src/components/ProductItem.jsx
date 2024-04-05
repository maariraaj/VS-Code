import React, { useContext, useState } from 'react'
import Button from './Button';
import AuthContext from '../auth-context';

const ProductItem = (props) => {
    const ctx=useContext(AuthContext);

    const [buy, setBuy]=useState('');

    const deleteHandler=()=>{
        ctx.onDelete(props.id);
    }
    const submitHandler=(event)=>{
        event.preventDefault();
        ctx.onBuy(buy, props.id);
        setBuy('');
    }
    const buyQuantityHandler=(event)=>{
        setBuy(event.target.value);
    }
    return (
        <React.Fragment>
            <li style={{listStyle:'none'}}>
                <div>               
                    <form onSubmit={submitHandler}>
                        <label>{props.name} Rs: {props.price} {props.quantity}Kg.</label>
                        <input type='number' min="1" max={props.quantity} onChange={buyQuantityHandler} value={buy} />
                        <Button type='submit' >Buy</Button>
                        <Button type='button' onClick={deleteHandler} >Delete</Button>
                    </form>                
                </div>

            </li>
        </React.Fragment>
    )
};
export default ProductItem