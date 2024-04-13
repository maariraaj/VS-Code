import { Fragment, useContext } from "react";
import CartContext from "./cart-context";

const Cart = () => {
    const ctx = useContext(CartContext);

    const totalCartPrice = ctx.items.reduce((curNumber, item) => {
        return curNumber + (item.quantity * item.price);    
      }, 0);

    return (
        <Fragment>
            <div className="container">
                <button className="btn btn-warning" data-bs-toggle="modal" data-bs-target="#modal">Cart</button>
            </div>

            <div className="modal fade" id="modal">
                <div className="modal-dialog">
                    <div className="modal-content text-black bg-white">
                        <div className="modal-header">
                            <h1>Cart</h1>
                            <button className="btn-close" data-bs-dismiss="modal" data-bs-target="#modal"></button>
                        </div>
                        {ctx.items.map((item) => {
                            if (item.quantity > 0) {
                                return (
                                    <div className="modal-body" key={item.id}>
                                        <div className="row">
                                            <div className="col-md-6">
                                                <div className="product-card">
                                                    <img src={item.imageUrl} className="img-fluid img-thumbnail " style={{maxWidth: "150px", maxHeight: "100px"}} />
                                                    <h5>{item.title}</h5>
                                                    <p>Quantity: {item.quantity}</p>
                                                    <p>Price: ₹ {Math.floor(item.price * item.quantity)}</p>
                                                    <button className="btn btn-danger remove-btn">Remove</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )
                            }
                        })}
                        <div className="modal-footer">Total: ₹ {totalCartPrice}</div>
                        <button className="btn btn-primary mb-3 mx-3">Purchase</button>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default Cart