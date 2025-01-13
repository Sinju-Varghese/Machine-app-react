import React from 'react';
import './Home.css';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="container">
      <div className="card">
        <h1>Welcome to Dashboard</h1>
        
        <div className="button-group">
          <button className="btn register-btn">
            {/* <a href="./register">Register New User</a> */}
           <Link to="./register">Register New User</Link>
          </button>
          
          <button className="btn admin-btn">
            {/* <a href="./admindash">Admin Dashboard</a> */}
            <Link to="./admindash">Admin Dashboard</Link>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Home;