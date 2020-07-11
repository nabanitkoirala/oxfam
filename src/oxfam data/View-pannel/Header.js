import React from 'react';

export default function Header() {
    return (
        <div>
            {/* Navbar */}
            <nav className="main-header navbar navbar-expand navbar-white navbar-light">
                {/* Left navbar links */}
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <a className="nav-link" data-widget="pushmenu" href="#" role="button"><i className="fas fa-bars" /></a>
                    </li>
                    <li className="nav-item d-none d-sm-inline-block">
                        <p className="nav-link"><b>Survey Data Collection</b></p>
                    </li>
                </ul>

            </nav>
            {/* /.navbar */}

        </div >
    )
}
