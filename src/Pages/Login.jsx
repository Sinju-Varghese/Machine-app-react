// // Login.jsx
// import React, { useState } from 'react';
// import './Login.css';

// const Login = () => {
//     const [formData, setFormData] = useState({
//         email: '',
//         password: ''
//     });

//     const handleChange = (e) => {
//         const { name, value } = e.target;
//         setFormData({
//             ...formData,
//             [name]: value
//         });
//     };

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         console.log('Login submitted:', formData);
//         // Add login logic here
//     };

//     return (
//         <div className="login-container">
//             <h1>Login to Your Account</h1>
//             <form onSubmit={handleSubmit}>
//                 <div className="form-group">
//                     <label htmlFor="email">Email</label>
//                     <input
//                         type="email"
//                         id="email"
//                         name="email"
//                         placeholder="Enter your email"
//                         value={formData.email}
//                         onChange={handleChange}
//                         required
//                     />
//                 </div>
//                 <div className="form-group">
//                     <label htmlFor="password">Password</label>
//                     <input
//                         type="password"
//                         id="password"
//                         name="password"
//                         placeholder="Enter your password"
//                         value={formData.password}
//                         onChange={handleChange}
//                         required
//                     />
//                 </div>
//                 <button type="submit" className="login-button">Login</button>
//             </form>
//             <div className="register-link">
//                 <p>Don’t have an account? <a href="/register">Register here</a></p>
//             </div>
//         </div>
//     );
// };

// export default Login;

// import React, { useState } from 'react';
// import './login.css';

// const Login = () => {
//     const [formData, setFormData] = useState({
//         email: '',
//         password: '',
//     });
//     const [errorMessage, setErrorMessage] = useState('');
//     const [authenticatedUser, setAuthenticatedUser] = useState(null);

//     // Utility function to get data from localStorage
//     const getLocalStorageData = (key) => JSON.parse(localStorage.getItem(key)) || [];

//     const handleChange = (e) => {
//         const { name, value } = e.target;
//         setFormData({
//             ...formData,
//             [name]: value,
//         });
//     };

//     const handleSubmit = (e) => {
//         e.preventDefault();

//         // Fetch users from localStorage
//         const users = getLocalStorageData('users');

//         // Check if the user exists and credentials match
//         const user = users.find(
//             (user) => user.email === formData.email && user.password === formData.password
//         );

//         if (user) {
//             // Authentication successful
//             setAuthenticatedUser(user);
//             setErrorMessage('');
//         } else {
//             // Authentication failed
//             // setErrorMessage('Invalid email or password.');
//             alert("Invalid email or password.")
//             setAuthenticatedUser(null);
//         }
//     };

//     return (
//         <div className="login-container">
//             <h1>Login to Your Account</h1>
//             {errorMessage && <p className="error-message">{errorMessage}</p>}
//             {!authenticatedUser ? (
//                 <form onSubmit={handleSubmit}>
//                     <div className="form-group">
//                         <label htmlFor="email">Email</label>
//                         <input
//                             type="email"
//                             id="email"
//                             name="email"
//                             placeholder="Enter your email"
//                             value={formData.email}
//                             onChange={handleChange}
//                             required
//                         />
//                     </div>
//                     <div className="form-group">
//                         <label htmlFor="password">Password</label>
//                         <input
//                             type="password"
//                             id="password"
//                             name="password"
//                             placeholder="Enter your password"
//                             value={formData.password}
//                             onChange={handleChange}
//                             required
//                         />
//                     </div>
//                     <button type="submit" className="login-button">Login</button>
//                 </form>
//             ) : (
//                 <div className="user-list">
//                     <h2>Welcome, {authenticatedUser.username}!</h2>
//                     {/* <h3>User List:</h3> */}
//                     <ul>
//                         {getLocalStorageData('users').map((user) => (
//                             <li key={user.id}>
//                                 {user.username} ({user.email})
//                             </li>
//                         ))}
//                     </ul>
//                 </div>
//             )}
//         </div>
//     );
// };

// // export default Login;
// import React, { useState } from 'react';
// import './login.css';

// const Login = () => {
//     const [formData, setFormData] = useState({
//         email: '',
//         password: '',
//     });
//     const [errorMessage, setErrorMessage] = useState('');
//     const [authenticatedUser, setAuthenticatedUser] = useState(null);

//     // Utility function to get data from localStorage
//     const getLocalStorageData = (key) => JSON.parse(localStorage.getItem(key)) || [];

//     const handleChange = (e) => {
//         const { name, value } = e.target;
//         setFormData({
//             ...formData,
//             [name]: value,
//         });
//     };

//     const handleSubmit = (e) => {
//         e.preventDefault();

//         // Fetch users from localStorage
//         const users = getLocalStorageData('users');

//         // Check if the user exists and credentials match
//         const user = users.find(
//             (user) => user.email === formData.email && user.password === formData.password
//         );

//         if (user) {
//             // Authentication successful
//             setAuthenticatedUser(user);
//             setErrorMessage('');
//         } else {
//             // Authentication failed
//             alert("Invalid email or password.");
//             setAuthenticatedUser(null);
//         }
//     };

//     return (
//         <div className="login-container">
//             <h1>Login to Your Account</h1>
//             {errorMessage && <p className="error-message">{errorMessage}</p>}
//             {!authenticatedUser ? (
//                 <form onSubmit={handleSubmit}>
//                     <div className="form-group">
//                         <label htmlFor="email">Email</label>
//                         <input
//                             type="email"
//                             id="email"
//                             name="email"
//                             placeholder="Enter your email"
//                             value={formData.email}
//                             onChange={handleChange}
//                             required
//                         />
//                     </div>
//                     <div className="form-group">
//                         <label htmlFor="password">Password</label>
//                         <input
//                             type="password"
//                             id="password"
//                             name="password"
//                             placeholder="Enter your password"
//                             value={formData.password}
//                             onChange={handleChange}
//                             required
//                         />
//                     </div>
//                     <button type="submit" className="login-button">Login</button>
//                 </form>
//             ) : (
//                 <div className="user-list">
//                     <h2>Welcome, {authenticatedUser.username}!</h2>
//                     <h3>Your Details:</h3>
//                     <ul>
//                         <li><strong>Username:</strong> {authenticatedUser.username}</li>
//                         <li><strong>Email:</strong> {authenticatedUser.email}</li>
//                     </ul>
//                 </div>
//             )}
//         </div>
//     );
// };

// // export default Login;
// import React, { useState } from 'react';
// import './login.css';

// const Login = () => {
//     const [formData, setFormData] = useState({
//         email: '',
//         password: '',
//     });
//     const [errorMessage, setErrorMessage] = useState('');
//     const [authenticatedUser, setAuthenticatedUser] = useState(null);

//     // Utility function to get data from localStorage
//     const getLocalStorageData = (key) => JSON.parse(localStorage.getItem(key)) || [];

//     const handleChange = (e) => {
//         const { name, value } = e.target;
//         setFormData({
//             ...formData,
//             [name]: value,
//         });
//     };

//     const handleSubmit = (e) => {
//         e.preventDefault();

//         // Fetch users from localStorage
//         const users = getLocalStorageData('users');

//         // Check if the user exists and credentials match
//         const user = users.find(
//             (user) => user.email === formData.email && user.password === formData.password
//         );

//         if (user) {
//             // Set the login date (current date and time)
//             user.lastLogin = new Date().toISOString(); // Store as ISO string

//             // Update the user in localStorage
//             const updatedUsers = users.map(u => u.id === user.id ? user : u);
//             localStorage.setItem('users', JSON.stringify(updatedUsers));

//             // Authentication successful
//             setAuthenticatedUser(user);
//             setErrorMessage('');
//         } else {
//             // Authentication failed
//             alert("Invalid email or password.");
//             setAuthenticatedUser(null);
//         }
//     };

//     return (
//         <div className="login-container">
//             <h1>Login to Your Account</h1>
//             {errorMessage && <p className="error-message">{errorMessage}</p>}
//             {!authenticatedUser ? (
//                 <form onSubmit={handleSubmit}>
//                     <div className="form-group">
//                         <label htmlFor="email">Email</label>
//                         <input
//                             type="email"
//                             id="email"
//                             name="email"
//                             placeholder="Enter your email"
//                             value={formData.email}
//                             onChange={handleChange}
//                             required
//                         />
//                     </div>
//                     <div className="form-group">
//                         <label htmlFor="password">Password</label>
//                         <input
//                             type="password"
//                             id="password"
//                             name="password"
//                             placeholder="Enter your password"
//                             value={formData.password}
//                             onChange={handleChange}
//                             required
//                         />
//                     </div>
//                     <button type="submit" className="login-button">Login</button>
//                 </form>
//             ) : (
//                 <div className="user-list">
//                     <h2>Welcome, {authenticatedUser.username}!</h2>
//                     <ul>
//                         <li><strong>Username:</strong> {authenticatedUser.username}</li>
//                         <li><strong>Email:</strong> {authenticatedUser.email}</li>
//                     </ul>
//                 </div>
//             )}
//         </div>
//     );
// };

// export default Login;
import React, { useState } from 'react';
import './login.css';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const [formData, setFormData] = useState({
        email: '',
        password: '',
    });
    const [errorMessage, setErrorMessage] = useState('');
    const [authenticatedUser, setAuthenticatedUser] = useState(null);

    // Admin credentials (hardcoded)
    const adminEmail = 'admin@gmail.com'; // Change this to your admin's email
    const adminPassword = 'admin'; // Change this to your admin's password

    const navigate = useNavigate();

    // Utility function to get data from localStorage
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

        // Fetch users from localStorage
        const users = getLocalStorageData('users');

        // Check if the entered credentials match the admin
        if (formData.email === adminEmail && formData.password === adminPassword) {
            // If admin, set admin user and navigate to AdminDash
            const adminUser = { email: adminEmail, username: 'Admin', isAdmin: true };
            setAuthenticatedUser(adminUser);
            setErrorMessage('');

            // Navigate to the Admin Dashboard after successful login
            navigate('/admindash');
        } else {
            // Otherwise, check if the user exists in the regular users list
            const user = users.find(
                (user) => user.email === formData.email && user.password === formData.password
            );

            if (user) {
                // Set the login date (current date and time)
                user.lastLogin = new Date().toISOString(); // Store as ISO string

                // Update the user in localStorage
                const updatedUsers = users.map(u => u.id === user.id ? user : u);
                localStorage.setItem('users', JSON.stringify(updatedUsers));

                // Authentication successful for regular user
                setAuthenticatedUser(user);
                setErrorMessage('');
            } else {
                // Authentication failed
                alert("Invalid email or password.");
                setAuthenticatedUser(null);
            }
        }
    };

    return (
        <div className="login-container">
            <h1>Login to Your Account</h1>
            {errorMessage && <p className="error-message">{errorMessage}</p>}
            {!authenticatedUser ? (
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
            ) : (
                <div className="user-list">
                    <h2>Welcome, {authenticatedUser.username}!</h2>
                    <ul>
                        <li><strong>Username:</strong> {authenticatedUser.username}</li>
                        <li><strong>Email:</strong> {authenticatedUser.email}</li>
                    </ul>
                </div>
            )}
        </div>
    );
};

export default Login;
