import style from './QuantityController.module.css';
import { Fragment, forwardRef } from 'react';

const QuantityController = forwardRef((props, ref) => {
  return (
    <Fragment>
        <button onClick={props.onDecrease} className={style['quantity_btn']}>-</button>
        <input 
            type='number'
            min='1'
            ref={ref}
            value={props.quantityNumber}
            onChange={props.onChange}
            className={style['quantity_number']} />
        <button onClick={props.onIncrease} className={style['quantity_btn']}>+</button>
    </Fragment>
  )
})

export default QuantityController