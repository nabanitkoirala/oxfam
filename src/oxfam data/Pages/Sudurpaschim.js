import React, { useContext } from 'react';
import Header from '../View-pannel/Header';
import { Link } from 'react-router-dom';
import Footer from '../View-pannel/Footer';
import Map from './../Mapbox';
import './../Mapbox.css';
import { DataContext } from '../Store';

export default function Sudurpaschim() {
    const [Data, setData] = useContext(DataContext);
    return (
        <div>
            <div>
                <Header />
                {/* Main Sidebar Container */}
                <aside className="main-sidebar sidebar-dark-primary elevation-4">
                    {/* Brand Logo */}
                    <a href="index3.html" className="brand-link">
                        <img src="dist/img/AdminLTELogo.png" alt="AdminLTE Logo" className="brand-image img-circle elevation-3" style={{ opacity: '.8' }} />
                        <span className="brand-text font-weight-light">Oxfam</span>
                    </a>
                    {/* Sidebar */}
                    <div className="sidebar">
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
                                            <Link to="/province1" className="nav-link ">
                                                <i className="far fa-circle nav-icon" />
                                                <p>Province 1</p>
                                            </Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link to="/province2" className="nav-link">
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
                                            <Link to="/sudurpaschim" href="./index2.html" className="nav-link active">
                                                <i className="far fa-circle nav-icon" />
                                                <p>Sudurpaschim</p>
                                            </Link>
                                            {/* select */}
                                            <div className="form-group">
                                                <select className="form-control">
                                                    <option>Choose District</option>
                                                    {Data.filter((item) => item.province !== "प्रदेश नं .२").map((item, id) => <option key={id} value={item.district}>{item.district}</option>)}
                                                </select>
                                            </div>
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
                {/* Content Wrapper. Contains page content */}
                <div className="content-wrapper">
                    {/* Content Header (Page header) */}
                    <div className="content-header">
                        <div className="container-fluid">
                        </div>{/* /.container-fluid */}
                    </div>
                    {/* /.content-header */}
                    {/* Main content */}
                    <section className="content">
                        <div className="container-fluid">
                            <div className="row">
                                {/* Left col */}

                                <div className="col-md-8">
                                    {/* MAP & BOX PANE */}
                                    <div className="card">
                                        <div className="card-header">
                                            <h3 className="card-title">Overall Country Data</h3>
                                        </div>
                                        {/* /.card-header */}
                                        <div className="card-body p-0">
                                            <div className="d-md-flex">
                                                <div className="p-1 flex-fill" style={{ overflow: 'hidden' }}>
                                                    {/* Map will be created here */}
                                                    <div id="world-map-markers" style={{ height: 400, overflow: 'hidden' }}>
                                                        <div className="map" />
                                                        <Map />
                                                    </div>
                                                </div>

                                            </div>{/* /.d-md-flex */}
                                        </div>
                                        {/* /.card-body */}
                                    </div>


                                </div>
                                <div className="col-md-4">
                                    <div className="card">
                                        <div className="card-header">
                                            <h3 className="card-title">
                                                <i className="fas fa-text-width" />
        Overall Country Data
      </h3>
                                        </div>
                                        {/* /.card-header */}
                                        <div className="card-body">
                                            <ul>
                                                <li><b>Water Resource Available    :0</b></li>
                                                <li><b>Water Resource Unavailable:0</b></li>
                                                <li><b>Toilet Avaliable:0</b></li>
                                                <li><b>Toilet Unavailable:0</b></li>
                                                <li><b>Wash Facility available:0</b></li>
                                                <li><b>Wash Facility unavailable:0</b></li>
                                                <li><b>sanitary Pad Available:0</b></li>
                                                <li><b>sanitary Pad Unavailable:0</b></li>
                                                <li><b>Total Pregnant:0</b></li>
                                                <li><b>Total Male Disabled:0</b></li>
                                                <li><b>Total Female Disabled:0</b></li>
                                                <li><b>Total Medical Checkup available:0</b></li>
                                                <li><b>Total Family Members:0</b></li>
                                                <li><b>Total Family Members:0</b></li>

                                            </ul>
                                        </div>
                                        {/* /.card-body */}
                                    </div>
                                    {/* /.card */}
                                </div>
                                {/* ./col */}

                                {/* /.col */}
                            </div>
                            {/* /.row */}
                        </div>{/*/. container-fluid */}
                    </section>
                    {/* /.content */}
                </div>
                {/* /.content-wrapper */}
            </div>

            <Footer />
        </div>
    )
}
