import React from 'react';
import './Form.css';

export default function Form() {
    return (
        <div>
            <div className="full-screen-container">
                <div className="login-container">
                    <h1 className="login-title">Welcome</h1>
                    <form action="" className="form">
                        <div className="input-group success">
                            <label for="email">Email</label>
                            <input type="email" name="email" id="email" required />
                        </div>
                        <div className="input-group error">
                            <label for="email">Password</label>
                            <input type="password" name="password" id="password" required/>
                        </div>
                        <button type="submit" className="login-btn">Login</button>
                    </form>
                </div>
            </div>
        </div>
    )
}
