import { NavLink } from 'react-router-dom';
import { useContext } from "react";
import Cart from "./Cart";
import CartContext from "./cart-context";

function MainNavigation() {
    const ctx = useContext(CartContext);
    const numberOfCartItems = ctx.items.reduce((curNumber, item) => {
        return curNumber + item.quantity;
    }, 0);
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">The Generics</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarText">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="#">Home</a>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/">Store</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/about">About</NavLink>
                        </li>
                    </ul>
                    <div className="cart-icon-container position-relative d-inline-block">
                        <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">{numberOfCartItems}</span>
                        <Cart />
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default MainNavigation