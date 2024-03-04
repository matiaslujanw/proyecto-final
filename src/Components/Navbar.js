import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { useRef } from 'react';
import {FaBars, FaTimes} from "react-icons/fa"
import "../styles/main.css"

function Navbar() {
    const navRef = useRef(); // creo funcion y le asigno navRef

    const showNavbar = () => {
        navRef.current.classList.toggle("responsive-nav")
    }

    return (
        <header>
            <h2> Logo </h2>
            <nav>
          <Link to="/">Home</Link>
          <Link to="/cotizacion">Cotizacion</Link>
        </nav>
            
            <button className='nav-btn' onClick={showNavbar}>
                <FaBars/>
            </button>

        </header>
    );
};

export default Navbar;