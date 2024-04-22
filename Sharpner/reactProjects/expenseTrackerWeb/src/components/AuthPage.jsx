import React, { useState, useRef } from 'react';

function AuthPage() {
    const emailRef = useRef(null);
    const passwordRef = useRef(null);
    const confirmPasswordRef = useRef(null);
    const [passwordsMatch, setPasswordsMatch] = useState(true);

    const submitHandler = (e) => {
        e.preventDefault();
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        const confirmPassword = confirmPasswordRef.current.value;

        if (password === confirmPassword) {
            setPasswordsMatch(true);

            fetch(
                'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyDQxqWAXQVnifXhqishJ95EfgRZb9DOkq0',
                {
                    method: 'POST',
                    body: JSON.stringify({
                        email: email,
                        password: confirmPassword,
                        returnSecureToken: true
                    }),
                    headers: {
                        'Content-Type': 'application/json'
                    }
                }
            ).then((response) => {
                if (response.ok) {
                    return response.json();
                } else {
                    return response.json().then((data) => {
                        let errorMessage = 'Authentication failed!';
                        if (data && data.error && data.error.message) {
                            errorMessage = data.error.message;
                        }
                        throw new Error(errorMessage);
                    });
                }
            }).then((data) => {
                //console.log(data.idToken);
                console.log("User has successfully signed up.")
            })
                .catch((error) => {
                    alert(error.message);
                });
            emailRef.current.value = '';
            passwordRef.current.value = '';
            confirmPasswordRef.current.value = '';
        } else {
            setPasswordsMatch(false);
        }
    };

    return (
        <div className="container mt-5">
            <div className="row justify-content-center">
                <div className="col-lg-6">
                    <div className="card shadow-lg">
                        <div className="card-body p-5">
                            <h3 className="card-title text-center mb-4">Sign Up</h3>
                            <form onSubmit={submitHandler}>
                                <div className="form-group mb-3">
                                    <label htmlFor="email">Email</label>
                                    <input
                                        type="email"
                                        className="form-control"
                                        id="email"
                                        placeholder="Enter email"
                                        ref={emailRef}
                                        required
                                    />
                                </div>
                                <div className="form-group mb-3">
                                    <label htmlFor="password">Password</label>
                                    <input
                                        type="password"
                                        className="form-control"
                                        id="password"
                                        placeholder="Enter password"
                                        ref={passwordRef}
                                        required
                                    />
                                </div>
                                <div className="form-group mb-3">
                                    <label htmlFor="confirmPassword">Confirm Password</label>
                                    <input
                                        type="password"
                                        className="form-control"
                                        id="confirmPassword"
                                        placeholder="Confirm password"
                                        ref={confirmPasswordRef}
                                        required
                                    />
                                    {!passwordsMatch && <p className="text-danger mt-2">Passwords do not match</p>}
                                </div>
                                <button type="submit" className="btn btn-primary btn-block">Sign Up</button>
                            </form>
                        </div>
                    </div>
                    <div className="card mt-3">
                        <div className="card-body text-center">
                            <p className="mb-3">Already have an account?</p>
                            <button className="btn btn-info">Login</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AuthPage;
