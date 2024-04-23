import React, { useState } from "react";

const ExpenseContext = React.createContext({
    token: '',
    isLoggedIn: false,
    login: (token) => { },
    onLogout: ()=>{}
});

export const ExpenseContextProvider = (props) => {
    const initialToken = localStorage.getItem('token');

    const [token, setToken] = useState(initialToken);

    const userIsLoggedIn = !!token;

    const loginHandler = (token) => {
        setToken(token);
        localStorage.setItem("token", token);
    };
    const logoutHandler = () => {
        setToken('');
        localStorage.removeItem("token");
    };

    const contextValue = {
        token: token,
        isLoggedIn: userIsLoggedIn,
        login: loginHandler,
        onLogout: logoutHandler
    };

    return <ExpenseContext.Provider value={contextValue}>
        {props.children}
    </ExpenseContext.Provider>
};

export default ExpenseContext;