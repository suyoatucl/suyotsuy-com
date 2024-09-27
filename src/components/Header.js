// src/components/Header.js
import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header className="bg-light border-bottom mb-4">
            <nav className="navbar navbar-expand-lg navbar-light container">
                {/* Logo */}
                <Link className="navbar-brand" to="/">
                    <img src="/assets/images/logo.png" alt="Logo" style={{ marginRight: '20px', height: '40px' }} />
                </Link>
                
                {/* Toggler for mobile view */}
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav">
                    <span className="navbar-toggler-icon"></span>
                </button>

                {/* Navbar Menu */}
                <div className="collapse navbar-collapse" id="navbarNav">
                    {/* Left-aligned navigation */}
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item">
                            <Link className="nav-link" to="/">Home</Link>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="/pages/about.html" id="aboutDropdown" role="button" data-toggle="dropdown">
                                About Me
                            </a>
                            <div className="dropdown-menu">
                                <Link className="dropdown-item" to="#who-am-i">Who am I?</Link>
                                <Link className="dropdown-item" to="#skills">Skills and Interests</Link>
                                <Link className="dropdown-item" to="/sections/cv.html">My Curriculum Vitae</Link>
                            </div>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="/pages/works.html" id="worksDropdown" role="button" data-toggle="dropdown">
                                My Works
                            </a>
                            <div className="dropdown-menu">
                                <Link className="dropdown-item" to="#collaborative">Collaborative Projects</Link>
                                <Link className="dropdown-item" to="#independent">Independent Works</Link>
                                <Link className="dropdown-item" to="#research">Research</Link>
                            </div>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/blog">Blog</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/contact">Contact Me</Link>
                        </li>
                    </ul>

                    {/* Right-aligned Search and Icons */}
                    <form className="form-inline my-2 my-lg-0" style={{ marginLeft: '250px', width: '350px' }} >
                        <div className="input-group">
                            <input className="form-control" type="search" placeholder="Search anything within my website" aria-label="Search" />
                            <div className="input-group-append">
                                <span className="input-group-text"><i className="bi bi-search"></i></span>
                            </div>
                        </div>
                    </form>
                    <ul className="navbar-nav">
                        <li className="nav-item" style={{ marginLeft: '20px' }} >
                            <a className="nav-link" href="/sections/cv.html"><i className="bi bi-file-earmark-person"></i></a>
                        </li>
                        <li className="nav-item" style={{ marginLeft: '10px' }} >
                            <a className="nav-link" href="https://github.com/suyoatucl" target="_blank"><i className="bi bi-github"></i></a>
                        </li>
                        <li className="nav-item" style={{ marginLeft: '10px' }} >
                            <a className="nav-link" href="mailto:siyang.quan.23@ucl.ac.uk"><i className="bi bi-envelope"></i></a>
                        </li>
                    </ul>
                </div>
            </nav>
        </header>
    );
};

export default Header;
