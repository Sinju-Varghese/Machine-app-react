import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './adminDash.css';

const Admindash = () => {
    const [users, setUsers] = useState([]);
    const [selectedUser, setSelectedUser] = useState(null);
    const [showModal, setShowModal] = useState(false);
    const [currentUser, setCurrentUser] = useState(null);
    const [editData, setEditData] = useState({
        username: '',
        email: '',
        privilege: '',
        status: ''
    });

    const navigate = useNavigate();

    useEffect(() => {
        const storedUsers = JSON.parse(localStorage.getItem('users')) || [];
        const lastLoginEmail = localStorage.getItem('lastLoginEmail');
        const loggedInUser = storedUsers.find(user => user.email === lastLoginEmail);
        setCurrentUser(loggedInUser);
        setUsers(storedUsers);
    }, []);

    const handleEdit = (user) => {
        setSelectedUser(user);
        setEditData({
            username: user.username,
            email: user.email,
            privilege: user.privilege,
            status: user.status
        });
        setShowModal(true);
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setEditData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleLogout = () => {
        localStorage.removeItem('lastLoginEmail');
        navigate('/login');
    };

    const handleSave = () => {
        if (currentUser?.privilege !== 'admin') {
            alert('Only administrators can save changes.');
            return;
        }

        const updatedUsers = users.map(user => {
            if (user.id === selectedUser.id) {
                return {
                    ...user,
                    ...editData
                };
            }
            return user;
        });

        localStorage.setItem('users', JSON.stringify(updatedUsers));
        setUsers(updatedUsers);
        setShowModal(false);
    };

    const Modal = () => (
        <div className="modal">
            <div className="modal-content">
                <h2>Edit User</h2>
                <div className="form-group">
                    <label>Username</label>
                    <input
                        type="text"
                        name="username"
                        value={editData.username}
                        onChange={handleChange}
                    />
                </div>
                <div className="form-group">
                    <label>Email</label>
                    <input
                        type="email"
                        name="email"
                        value={editData.email}
                        onChange={handleChange}
                    />
                </div>
                <div className="form-group">
                    <label>Privilege</label>
                    <select
                        name="privilege"
                        value={editData.privilege}
                        onChange={handleChange}
                    >
                        <option value="user">User</option>
                        <option value="admin">Admin</option>
                    </select>
                </div>
                <div className="form-group">
                    <label>Status</label>
                    <select
                        name="status"
                        value={editData.status}
                        onChange={handleChange}
                    >
                        <option value="active">Active</option>
                        <option value="blocked">Blocked</option>
                    </select>
                </div>
                <div className="modal-buttons">
                    <button onClick={handleSave}>Save</button>
                    <button onClick={() => setShowModal(false)}>Cancel</button>
                </div>
            </div>
        </div>
    );

    return (
        <div className="admin-dash-container">
            {currentUser && (
                <div className="current-user-info">
                    <div className="user-details">
                        <h2>Current User: {currentUser.username}</h2>
                        <p>Email: {currentUser.email}</p>
                        <p>Privilege: {currentUser.privilege}</p>
                    </div>
                    <button onClick={handleLogout} className="logout-button">
                        Logout
                    </button>
                </div>
            )}
            <h1>Admin Dashboard</h1>
            <table className="user-table">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Username</th>
                        <th>Email</th>
                        <th>Privilege</th>
                        <th>Status</th>
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
                                <td>{user.privilege}</td>
                                <td>{user.status}</td>
                                <td>{user.lastLogin ? new Date(user.lastLogin).toLocaleString() : 'N/A'}</td>
                                <td>
                                    <button onClick={() => handleEdit(user)}>Edit</button>
                                </td>
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan="7">No users found.</td>
                        </tr>
                    )}
                </tbody>
            </table>
            {showModal && <Modal />}
        </div>
    );
};

export default Admindash;