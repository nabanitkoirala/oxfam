import React from 'react';
import Header from '../View-pannel/Header';
import Sidebar from '../View-pannel/Sidebar';
import Footer from '../View-pannel/Footer';
import Map from './../Mapbox';

export default function Dashboard() {
    return (
        <div>
            <Header />
            <Sidebar />
            {/* Content Wrapper. Contains page content */}
            <div className="content-wrapper">
                {/* Content Header (Page header) */}
                <div className="content-header">
                    <div className="container-fluid">
                        <div className="row mb-2">
                            <div className="col-sm-6">
                                <h1 className="m-0 text-dark">Dashboard v2</h1>
                            </div>{/* /.col */}

                        </div>{/* /.row */}
                    </div>{/* /.container-fluid */}
                </div>
                {/* /.content-header */}
                {/* Main content */}
                <section className="content">
                    <div className="container-fluid">
                        {/* Info boxes */}
                        <div className="row">
                            <div className="col-12 col-sm-6 col-md-3">
                                <div className="info-box">
                                    <span className="info-box-icon bg-info elevation-1"><i className="fas fa-cog" /></span>
                                    <div className="info-box-content">
                                        <span className="info-box-text">CPU Traffic</span>
                                        <span className="info-box-number">
                                            10
                <small>%</small>
                                        </span>
                                    </div>
                                    {/* /.info-box-content */}
                                </div>
                                {/* /.info-box */}
                            </div>
                            {/* /.col */}
                            <div className="col-12 col-sm-6 col-md-3">
                                <div className="info-box mb-3">
                                    <span className="info-box-icon bg-danger elevation-1"><i className="fas fa-thumbs-up" /></span>
                                    <div className="info-box-content">
                                        <span className="info-box-text">Likes</span>
                                        <span className="info-box-number">41,410</span>
                                    </div>
                                    {/* /.info-box-content */}
                                </div>
                                {/* /.info-box */}
                            </div>
                            {/* /.col */}
                            {/* fix for small devices only */}
                            <div className="clearfix hidden-md-up" />
                            <div className="col-12 col-sm-6 col-md-3">
                                <div className="info-box mb-3">
                                    <span className="info-box-icon bg-success elevation-1"><i className="fas fa-shopping-cart" /></span>
                                    <div className="info-box-content">
                                        <span className="info-box-text">Sales</span>
                                        <span className="info-box-number">760</span>
                                    </div>
                                    {/* /.info-box-content */}
                                </div>
                                {/* /.info-box */}
                            </div>
                            {/* /.col */}
                            <div className="col-12 col-sm-6 col-md-3">
                                <div className="info-box mb-3">
                                    <span className="info-box-icon bg-warning elevation-1"><i className="fas fa-users" /></span>
                                    <div className="info-box-content">
                                        <span className="info-box-text">New Members</span>
                                        <span className="info-box-number">2,000</span>
                                    </div>
                                    {/* /.info-box-content */}
                                </div>
                                {/* /.info-box */}
                            </div>
                            {/* /.col */}
                        </div>

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
                                                <div id="world-map-markers" style={{ height: 325, overflow: 'hidden' }}>
                                                    <div className="map" />

                                                    <Map />
                                                </div>
                                            </div>

                                        </div>{/* /.d-md-flex */}
                                    </div>
                                    {/* /.card-body */}
                                </div>
                                {/* /.card */}
                                <div className="row">
                                    <div className="col-md-6">
                                        {/* DIRECT CHAT */}
                                        <div className="card direct-chat direct-chat-warning">



                                        </div>
                                        {/*/.direct-chat */}
                                    </div>

                                </div>


                            </div>
                            {/* /.col */}
                            <div className="col-md-4">
                                {/* Info Boxes Style 2 */}
                                <div className="info-box mb-3 bg-warning">
                                    <span className="info-box-icon"><i className="fas fa-tag" /></span>
                                    <div className="info-box-content">
                                        <span className="info-box-text">Inventory</span>
                                        <span className="info-box-number">5,200</span>
                                    </div>
                                    {/* /.info-box-content */}
                                </div>
                                {/* /.info-box */}
                                <div className="info-box mb-3 bg-success">
                                    <span className="info-box-icon"><i className="far fa-heart" /></span>
                                    <div className="info-box-content">
                                        <span className="info-box-text">Mentions</span>
                                        <span className="info-box-number">92,050</span>
                                    </div>
                                    {/* /.info-box-content */}
                                </div>
                                {/* /.info-box */}
                                <div className="info-box mb-3 bg-danger">
                                    <span className="info-box-icon"><i className="fas fa-cloud-download-alt" /></span>
                                    <div className="info-box-content">
                                        <span className="info-box-text">Downloads</span>
                                        <span className="info-box-number">114,381</span>
                                    </div>
                                    {/* /.info-box-content */}
                                </div>
                                {/* /.info-box */}
                                <div className="info-box mb-3 bg-info">
                                    <span className="info-box-icon"><i className="far fa-comment" /></span>
                                    <div className="info-box-content">
                                        <span className="info-box-text">Direct Messages</span>
                                        <span className="info-box-number">163,921</span>
                                    </div>
                                    {/* /.info-box-content */}
                                </div>


                            </div>
                            {/* /.col */}
                        </div>
                        {/* /.row */}
                    </div>{/*/. container-fluid */}
                </section>
                {/* /.content */}
            </div>
            {/* /.content-wrapper */}

            <Footer />
        </div>
    )
}
