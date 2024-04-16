import React, { useState, useEffect } from "react";

const AuthContext = React.createContext({
    token: '',
    isLoggedIn: false,
    login: (token) => { },
    logout: () => { }
});

export const AuthContextProvider = (props) => {
    const initialToken = localStorage.getItem('token');

    const initialExpirationTime = localStorage.getItem('expirationTime');

    const [token, setToken] = useState(initialToken);

    const [expirationTime, setExpirationTime] = useState(initialExpirationTime);

    const [tokenExpirationTimer, setTokenExpirationTimer] = useState(null);

    const userIsLoggedIn = !!token;

    const loginHandler = (token) => {
        const expirationTime = new Date().getTime() + 5 * 60 * 1000;
        setToken(token);
        setExpirationTime(expirationTime);
        localStorage.setItem("token", token);
        localStorage.setItem("expirationTime", expirationTime);
        const remainingTime = expirationTime - Date.now();
        setTokenExpirationTimer(setTimeout(logoutHandler, remainingTime));
    };

    const logoutHandler = () => {
        setToken(null);
        setExpirationTime(null);
        localStorage.removeItem("token");
        localStorage.removeItem("expirationTime");
        clearTimeout(tokenExpirationTimer);
    };

    useEffect(() => {
        if (expirationTime) {
            const remainingTime = expirationTime - Date.now();
            if (remainingTime > 0) {
                setTokenExpirationTimer(setTimeout(() => {
                    alert("Your session has expired. Please log in again.");
                    logoutHandler();
                }, remainingTime));
            } else {
                logoutHandler();
            }
        }
    }, [expirationTime]);

    const contextValue = {
        token: token,
        isLoggedIn: userIsLoggedIn,
        login: loginHandler,
        logout: logoutHandler
    };

    return <AuthContext.Provider value={contextValue}>{props.children}</AuthContext.Provider>;
};

export default AuthContext;