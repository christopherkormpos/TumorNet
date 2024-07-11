import React from 'react'
import '../navbar.css';

export default function Navbar() {
    return (
        <div className="navbar" name="top">
            <div className='nav-img'>
                <a href="/">
                    <img src="images/logo_light.png" className="logo" alt="logo" />
                </a>
            </div>
            <div className='nav-content'>
                <a href="/" className='home'>Home</a>
                <a href="https://github.com/christopherkormpos" className="docs" target="_blank" rel="noopener noreferrer">
                    Documentation</a>
                <a href="/app" className="app"><button className="btn">
  Application
</button></a>
                
            </div>
        </div>
    )
}