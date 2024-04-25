import { useContext } from "react"
import { NavLink } from "react-router-dom"
import ExpenseContext from "../../exp-context/expense-context"

const MainNavigation = () => {
    const ctx = useContext(ExpenseContext);

    return (
        <div className="card shadow mb-5">
            <nav className="navbar navbar-expand-lg  p-3" style={{ backgroundColor: '#e3f2fd' }}>
                <div className="container-fluid">
                    <NavLink className="navbar-brand" to='/'>
                        <img src="/finance-svgrepo-com.svg" alt="Logo" width="30" height="24" className="d-inline-block align-text-top" />
                        <strong>Expense Tracker</strong>
                    </NavLink>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarText">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/expenses">Home</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/profile">Profile</NavLink>
                            </li>
                        </ul>
                        <div className="cart-icon-container position-relative d-inline-block">
                            <button type="button" className="btn btn-danger" onClick={ctx.onLogout}>Logout</button>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default MainNavigation