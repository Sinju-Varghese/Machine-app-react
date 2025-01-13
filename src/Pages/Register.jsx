import React, { useState } from 'react';
import './register.css'
import { useNavigate } from 'react-router-dom';

const Register = () => {
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: '',
    });

    const [errorMessage, setErrorMessage] = useState('');
    const navigate = useNavigate();
    // Utility function to get and set local storage data
    const getLocalStorageData = (key) => JSON.parse(localStorage.getItem(key)) || [];
    const setLocalStorageData = (key, data) => localStorage.setItem(key, JSON.stringify(data));

    // Handle form input changes
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    // Validate form fields
    const validateForm = () => {
        const { username, email, password } = formData;

        if (!username.trim()) return 'Username is required.';
        if (!email.trim()) return 'Email is required.';
        if (!/\S+@\S+\.\S+/.test(email)) return 'Enter a valid email address.';
        if (password.length < 6) return 'Password must be at least 6 characters long.';
        
        return null;
    };

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();

        // Validate the form
        const error = validateForm();
        if (error) {
            setErrorMessage(error);
            return;
        }

        // Get existing users from local storage
        const users = getLocalStorageData('users');

        // Check if the email already exists
        const userExists = users.some((user) => user.email === formData.email);
        if (userExists) {
            setErrorMessage('User with this email already exists.');
            return;
        }

        // Add the new user to local storage
        const newUser = {
            id: Date.now(), // Unique ID for the user
            username: formData.username,
            email: formData.email,
            password: formData.password,
        };

        users.push(newUser);
        setLocalStorageData('users', users);

        // Clear the form and error message
        setFormData({ username: '', email: '', password: '' });
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
                <button type="submit" className="register-button">Register</button>
            </form>
            <div className="login-link">
                <p>Already have an account? <a href="/login">Log in here</a></p>
            </div>
        </div>
    );
};

export default Register;
