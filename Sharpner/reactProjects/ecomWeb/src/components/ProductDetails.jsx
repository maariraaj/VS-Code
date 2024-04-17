import React from 'react';
import { useContext } from 'react';
import { useParams } from 'react-router-dom'
import CartContext from './cart-context';

const ProductDetails = () => {
    const params = useParams();
    const ctx = useContext(CartContext);

    const addCartHandler = () => {
        ctx.onAddToCart(params.productId);
    }

    return (
        <>
            {ctx.items.map((item) => (
                params.productId === item.id && (
                    <div className="container mt-5" key={item.id}>
                        <div className="row">
                            <div className="col-md-5">
                                <img src={item.imageUrl} alt={item.title} className="img-fluid" />
                            </div>
                            <div className="col-md-7">
                                <h2>{item.title}</h2>
                                <p className="text-muted">Category: {item.category}</p>
                                <h3 className="text-primary">₹ {item.price}</h3>
                                <p className="text-muted">Stock: {item.stock}</p>
                                <hr />
                                <p>
                                    {item.details}
                                </p>
                                <button type="button" className="btn btn-success" onClick={addCartHandler}>Add to cart</button>
                            </div>
                        </div>
                    </div>
                )
            )
            )}
        </>
    )
}

export default ProductDetails;
