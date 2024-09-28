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
                            {/* Main item link for About Me */}
                            <Link className="nav-link dropdown-toggle" to="/about" id="aboutDropdown" role="button" data-toggle="dropdown">
                                About Me
                            </Link>
                            <div className="dropdown-menu">
                                <Link className="dropdown-item" to="/about/WhoAmI">Who am I?</Link>
                                <Link className="dropdown-item" to="/about/Skills">Skills and Interests</Link>
                                <Link className="dropdown-item" to="/about/CV">My Curriculum Vitae</Link>
                            </div>
                        </li>
                        <li className="nav-item dropdown">
                            {/* Main item link for My Works */}
                            <Link className="nav-link dropdown-toggle" to="/works" id="worksDropdown" role="button" data-toggle="dropdown">
                                My Works
                            </Link>
                            <div className="dropdown-menu">
                                <Link className="dropdown-item" to="/works/Collaborative">Collaborative Projects</Link>
                                <Link className="dropdown-item" to="/works/Independent">Independent Works</Link>
                                <Link className="dropdown-item" to="/works/Research">Research</Link>
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
                    <form className="form-inline my-2 my-lg-0" style={{ marginLeft: '250px', width: '370px' }} >
                        <div className="input-group">
                            <input className="form-control" type="search" placeholder="Search anything within my website ..." aria-label="Search" />
                            <div className="input-group-append">
                                <span className="input-group-text"><i className="bi bi-search"></i></span>
                            </div>
                        </div>
                    </form>
                    <ul className="navbar-nav">
                        <li className="nav-item" style={{ marginLeft: '20px' }} >
                            <Link className="nav-link" to="/about/CV"><i className="bi bi-file-earmark-person"></i></Link>
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
