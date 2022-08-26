import React from 'react';
import '../Navbar.css';

export default function Navbar(){
    return(
        <div className = "nav">
            <img src = "../img/earth.svg" alt = "an icon of the world" className = "nav--icon"></img>
            <p>my travel journal.</p>
        </div>
    )
}