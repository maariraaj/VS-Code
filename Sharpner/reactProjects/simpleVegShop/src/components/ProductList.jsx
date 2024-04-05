import React, { useContext } from 'react'
import ProductItem from './ProductItem'
import authContext from '../auth-context'

const ProductList = () => {
    const  ctx=useContext(authContext);
  return (
    <React.Fragment>
        <ul>
            {ctx.data.map((item) => (
                <ProductItem
                    key={item.id}
                    id={item.id}
                    name={item.name}
                    price={item.price}
                    quantity={item.quantity}
                    />
            ))}
        </ul>
    </React.Fragment>
  )
}

export default ProductList