import { Fragment} from "react";

const Cart = () => {
    const cartElements = [
        {
            title: 'Colors',
            price: 100,
            imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%201.png',
            quantity: 2,
        },
        {
            title: 'Black and white Colors',
            price: 50,
            imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%202.png',
            quantity: 3,
        },
        {
            title: 'Yellow and Black Colors',
            price: 70,
            imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%203.png',
            quantity: 1,
        }];

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
                        {cartElements.map((item) => {
                            return (
                                <div className="modal-body" key={Math.random().toString()}>
                                    <div className="row">
                                        <div className="col-md-6">
                                            <div className="product-card">
                                                <img src={item.imageUrl} className="card-img" />
                                                <h5>{item.title}</h5>
                                                <p>Price: {Math.floor(item.price * item.quantity)}</p>
                                                <button className="btn btn-danger remove-btn">Remove</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                        <div className="modal-footer">Total:</div>
                        <button className="btn btn-primary mb-3 mx-3">Purchase</button>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default Cart