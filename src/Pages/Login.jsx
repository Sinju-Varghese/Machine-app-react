import React, { useState } from 'react';
import './login.css';
import { Link, useNavigate } from 'react-router-dom';
Link
const Login = () => {
    const [formData, setFormData] = useState({
        email: '',
        password: '',
    });
    const [errorMessage, setErrorMessage] = useState('');
    const [authenticatedUser, setAuthenticatedUser] = useState(null);

    const navigate = useNavigate();
    const getLocalStorageData = (key) => JSON.parse(localStorage.getItem(key)) || [];

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const users = getLocalStorageData('users');
        const user = users.find(
            (user) => user.email === formData.email && user.password === formData.password
        );

        if (user) {
            if (user.status === 'blocked') {
                alert("Your account has been blocked. Please contact an administrator.");
                return;
            }

            user.lastLogin = new Date().toISOString();
            const updatedUsers = users.map(u => u.id === user.id ? user : u);
            localStorage.setItem('users', JSON.stringify(updatedUsers));
            localStorage.setItem('lastLoginEmail', user.email);
            setAuthenticatedUser(user);
            setErrorMessage('');
        } else {
            alert("Invalid email or password.");
            setAuthenticatedUser(null);
        }
    };

    return (
        <div className="login-container">
            <h1>Login to Your Account</h1>
            {errorMessage && <p className="error-message">{errorMessage}</p>}
            {!authenticatedUser ? (
                <>
                    <form onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                placeholder="Enter your email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="password">Password</label>
                            <input
                                type="password"
                                id="password"
                                name="password"
                                placeholder="Enter your password"
                                value={formData.password}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <button type="submit" className="login-button">Login</button>
                    </form>
                    <div className="register-link">
                        <p>Don't have an account? <Link to="/register">Register here</Link></p>
                    </div>
                </> 
            ) : (
                <div className="user-list">
                    <h2>Welcome, {authenticatedUser.username}!</h2>
                    <ul>
                        <li><strong>Username:</strong> {authenticatedUser.username}</li>
                        <li><strong>Email:</strong> {authenticatedUser.email}</li>
                        <li><strong>Privilege:</strong> {authenticatedUser.privilege}</li>
                    </ul>
                    
                        <button onClick={() => navigate('/admindash')} className="admin-button">
                            Go to Admin Dashboard
                        </button>
                
                </div>
            )}
        </div>
    );
};

export default Login;