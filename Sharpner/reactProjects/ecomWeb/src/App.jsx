import { Fragment, useContext } from "react"
import Products from "./components/Products"
import Cart from "./components/Cart";
import CartContext from "./components/cart-context";

function App() {
  const ctx = useContext(CartContext);
  const numberOfCartItems = ctx.items.reduce((curNumber, item) => {
    return curNumber + item.quantity;
  }, 0);

  return (
    <Fragment>
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
                <a className="nav-link" href="#">Store</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">About</a>
              </li>
            </ul>
            <div className="cart-icon-container position-relative d-inline-block">
              <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">{numberOfCartItems}</span>
              <Cart />
            </div>
          </div>
        </div>
      </nav>
      <div className="container">
        <div className="card-group">
          <Products />
        </div>
      </div>
    </Fragment>
  )
}

export default App
