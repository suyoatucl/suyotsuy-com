// src/components/Footer.js
import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-light text-center py-4">
            <div className="container">
                <p className="d-inline"> Suyo© 2024 </p>
                <span className="mx-2"> | </span>
                <p className="d-inline"> Quick Links: </p>
                <span className="mx-2">·</span>
                <ul className="list-inline d-inline">
                    <li className="list-inline-item"><a href="https://suyoatucl.github.io/PIC">Pollution is Colonialism (Game)</a></li>
                    <span className="mx-2">·</span>
                    <li className="list-inline-item"><a href="https://suyoatucl.github.io/GooGan">The GooGan Project</a></li>
                    <span className="mx-2">·</span>
                    <li className="list-inline-item"><a href="/contact">Why not leave a comment? :)</a></li>
                </ul>
            </div>
        </footer>
    );
};

export default Footer;
