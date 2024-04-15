import React from 'react';
import { useContext } from 'react';
import { useParams } from 'react-router-dom'
import CartContext from './cart-context';

const ProductDetails = () => {
    const params = useParams();
    const ctx = useContext(CartContext);

    if (params.productId === 'p1') {
        const addCartHandler = () => {
            ctx.onAddToCart(params.productId);
        }
        return (
            <div className="container mt-5">
                <div className="row">
                    <div className="col-md-5">
                        <img src={ctx.items[0].imageUrl} alt={ctx.items[0].title} className="img-fluid" />
                    </div>
                    <div className="col-md-7">
                        <h2>{ctx.items[0].title}</h2>
                        <p className="text-muted">Category: {ctx.items[0].category}</p>
                        <h3 className="text-primary">₹ {ctx.items[0].price}</h3>
                        <p className="text-muted">Stock: {ctx.items[0].stock}</p>
                        <hr />
                        <p>
                            {ctx.items[0].details}
                        </p>
                        <button type="button" className="btn btn-success" onClick={addCartHandler}>Add to cart</button>
                    </div>
                </div>
            </div>
        );
    }
    if (params.productId === 'p2') {
        const addCartHandler = () => {
            ctx.onAddToCart(params.productId);
        }
        return (
            <div className="container mt-5">
                <div className="row">
                    <div className="col-md-5">
                        <img src={ctx.items[1].imageUrl} alt={ctx.items[1].title} className="img-fluid" />
                    </div>
                    <div className="col-md-7">
                        <h2>{ctx.items[1].title}</h2>
                        <p className="text-muted">Category: {ctx.items[1].category}</p>
                        <h3 className="text-primary">₹ {ctx.items[1].price}</h3>
                        <p className="text-muted">Stock: {ctx.items[1].stock}</p>
                        <hr />
                        <p>
                            {ctx.items[1].details}
                        </p>
                        <button type="button" className="btn btn-success" onClick={addCartHandler}>Add to cart</button>
                    </div>
                </div>
            </div>
        );
    }
    if (params.productId === 'p3') {
        const addCartHandler = () => {
            ctx.onAddToCart(params.productId);
        }
        return (
            <div className="container mt-5">
                <div className="row">
                    <div className="col-md-5">
                        <img src={ctx.items[2].imageUrl} alt={ctx.items[2].title} className="img-fluid" />
                    </div>
                    <div className="col-md-7">
                        <h2>{ctx.items[2].title}</h2>
                        <p className="text-muted">Category: {ctx.items[2].category}</p>
                        <h3 className="text-primary">₹ {ctx.items[2].price}</h3>
                        <p className="text-muted">Stock: {ctx.items[2].stock}</p>
                        <hr />
                        <p>
                            {ctx.items[2].details}
                        </p>
                        <button type="button" className="btn btn-success" onClick={addCartHandler}>Add to cart</button>
                    </div>
                </div>
            </div>
        );
    }
    if (params.productId === 'p4') {
        const addCartHandler = () => {
            ctx.onAddToCart(params.productId);
        }
        return (
            <div className="container mt-5">
                <div className="row">
                    <div className="col-md-5">
                        <img src={ctx.items[3].imageUrl} alt={ctx.items[3].title} className="img-fluid" />
                    </div>
                    <div className="col-md-7">
                        <h2>{ctx.items[3].title}</h2>
                        <p className="text-muted">Category: {ctx.items[3].category}</p>
                        <h3 className="text-primary">₹ {ctx.items[3].price}</h3>
                        <p className="text-muted">Stock: {ctx.items[3].stock}</p>
                        <hr />
                        <p>
                            {ctx.items[3].details}
                        </p>
                        <button type="button" className="btn btn-success" onClick={addCartHandler}>Add to cart</button>
                    </div>
                </div>
            </div>
        );
    }

}

export default ProductDetails;
