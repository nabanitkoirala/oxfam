import React from 'react';

export default function Header() {
    return (
        <div>
            {/* Navbar */}
            <nav className="main-header navbar navbar-expand navbar-success navbar-light">
                {/* Left navbar links */}
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <a className="nav-link" data-widget="pushmenu" href="#" role="button"><i className="fas fa-bars" /></a>
                    </li>
                </ul>
            </nav>
            {/* /.navbar */}

        </div>
    )
}
