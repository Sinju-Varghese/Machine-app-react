import React, { useState } from 'react';
import './register.css'
import { useNavigate } from 'react-router-dom';

const Register = () => {
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: '',
        privilege: 'user'
    });

    const [errorMessage, setErrorMessage] = useState('');
    const navigate = useNavigate();

    const getLocalStorageData = (key) => JSON.parse(localStorage.getItem(key)) || [];
    const setLocalStorageData = (key, data) => localStorage.setItem(key, JSON.stringify(data));

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const validateForm = () => {
        const { username, email, password } = formData;
        if (!username.trim()) return 'Username is required.';
        if (!email.trim()) return 'Email is required.';
        if (!/\S+@\S+\.\S+/.test(email)) return 'Enter a valid email address.';
        if (password.length < 6) return 'Password must be at least 6 characters long.';
        return null;
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const error = validateForm();
        if (error) {
            setErrorMessage(error);
            return;
        }

        const users = getLocalStorageData('users');
        const userExists = users.some((user) => user.email === formData.email);
        if (userExists) {
            setErrorMessage('User with this email already exists.');
            return;
        }

        const newUser = {
            id: Date.now(),
            username: formData.username,
            email: formData.email,
            password: formData.password,
            privilege: formData.privilege,
            status: 'active'
        };

        users.push(newUser);
        setLocalStorageData('users', users);

        setFormData({ username: '', email: '', password: '', privilege: 'user' });
        setErrorMessage('');
        alert('User registered successfully!');
        navigate('/login');
    };

    return (
        <div className="register-container">
            <h1>Register</h1>
            {errorMessage && <p className="error-message">{errorMessage}</p>}
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="username">Username</label>
                    <input
                        type="text"
                        id="username"
                        name="username"
                        placeholder="Enter your username"
                        value={formData.username}
                        onChange={handleChange}
                        required
                    />
                </div>
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
                <div className="form-group">
                    <label htmlFor="privilege">Privilege</label>
                    <select
                        id="privilege"
                        name="privilege"
                        value={formData.privilege}
                        onChange={handleChange}
                    >
                        <option value="user">User</option>
                        <option value="admin">Admin</option>
                    </select>
                </div>
                <button type="submit" className="register-button">Register</button>
            </form>
            <div className="login-link">
                <p>Already have an account? <a href="/login">Log in here</a></p>
            </div>
        </div>
    );
};

export default Register;