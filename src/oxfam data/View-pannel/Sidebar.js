import React from 'react'
import { Link } from 'react-router-dom'

export default function Sidebar() {
    return (

        <div>
            {/* Main Sidebar Container */}
            <aside className="main-sidebar sidebar-dark-primary elevation-4">
                {/* Brand Logo */}
                <a href="index3.html" className="brand-link">
                    <img src="dist/img/AdminLTELogo.png" alt="AdminLTE Logo" className="brand-image img-circle elevation-3" style={{ opacity: '.8' }} />
                    <span className="brand-text font-weight-light">Oxfam</span>
                </a>
                {/* Sidebar */}
                <div className="sidebar">
                    {/* Sidebar user panel (optional) */}
                    <div className="user-panel mt-3 pb-3 mb-3 d-flex">

                        <div className="info">
                            <a href="#" className="d-block">Field Research Data</a>
                        </div>
                    </div>
                    {/* Sidebar Menu */}
                    <nav className="mt-2">
                        <ul className="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
                            {/* Add icons to the links using the .nav-icon class
         with font-awesome or any other icon font library */}
                            <li className="nav-item has-treeview menu-open">
                                <a href="#" className="nav-link active">
                                    <i className="nav-icon fas fa-tachometer-alt" />
                                    <p>
                                        Province Level Data
                <i className="right fas fa-angle-left" />
                                    </p>
                                </a>
                                <ul className="nav nav-treeview">
                                    <li className="nav-item">
                                        <Link to="/overall-data" className="nav-link">
                                            <i className="far fa-circle nav-icon" />
                                            <p>Overall Data</p>
                                        </Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link to="/province1" className="nav-link">
                                            <i className="far fa-circle nav-icon" />
                                            <p>Province 1</p>
                                        </Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link to="/province2" href="./index2.html" className="nav-link">
                                            <i className="far fa-circle nav-icon" />
                                            <p>Province 2</p>
                                        </Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link to="/bagmati" className="nav-link">
                                            <i className="far fa-circle nav-icon" />
                                            <p>Bagmati</p>
                                        </Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link to="/gandaki" className="nav-link">
                                            <i className="far fa-circle nav-icon" />
                                            <p>Gandaki</p>
                                        </Link >
                                    </li>
                                    <li className="nav-item">
                                        <Link to="/province5" className="nav-link">
                                            <i className="far fa-circle nav-icon" />
                                            <p>Province 5</p>
                                        </Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link to="/karnali" href="./index2.html" className="nav-link">
                                            <i className="far fa-circle nav-icon" />
                                            <p>Karnali</p>
                                        </Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link to="/sudurpaschim" href="./index2.html" className="nav-link">
                                            <i className="far fa-circle nav-icon" />
                                            <p>Sudurpaschim</p>
                                        </Link>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </nav>
                    {/* /.sidebar-menu */}
                </div>
                {/* /.sidebar */}
            </aside>

            {/* Control Sidebar */}
            <aside className="control-sidebar control-sidebar-dark">
                {/* Control sidebar content goes here */}
            </aside>
            {/* /.control-sidebar */}
        </div>

    )
}
