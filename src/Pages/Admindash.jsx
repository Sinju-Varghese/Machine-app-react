import React, { useEffect, useState } from 'react';
import './adminDash.css';

const Admindash = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        // Fetch users from local storage
        const storedUsers = JSON.parse(localStorage.getItem('users')) || [];
        setUsers(storedUsers);
    }, []);

    return (
        <div className="admin-dash-container">
            <h1>Admin Dashboard</h1>
            <table className="user-table">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Username</th>
                        <th>Email</th>
                        <th>Last Login</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {users.length > 0 ? (
                        users.map((user) => (
                            <tr key={user.id}>
                                <td>{user.id}</td>
                                <td>{user.username}</td>
                                <td>{user.email}</td>
                                <td>{user.lastLogin ? new Date(user.lastLogin).toLocaleString() : 'N/A'}</td>
                                <td>
                                    <button>Edit</button>
                                </td>
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan="5">No users found.</td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    );
};

export default Admindash;
