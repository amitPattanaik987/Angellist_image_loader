import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import "./Navbar.css";

function Navbar() {
    return (
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">
                    <img src="https://www.w3schools.com/bootstrap5/img_avatar1.png" style={{ width: '40px' }} className="rounded-pill" alt="Logo" />
                </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <div className="navbar-text ms-auto">
                        IMAGE SEARCH ENGINE
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
