import React, { useContext } from 'react';
import Header from '../View-pannel/Header';
import { Link } from 'react-router-dom';
import Footer from '../View-pannel/Footer';
import Map from './../Mapbox';
import './../Mapbox.css';
import { DataContext } from '../Store';

export default function Dashboard() {
    const [Data, setData] = useContext(DataContext);
    let Water_resource_available = Data.filter((item) => item.water_resource === "व्यक्तिगत चापा कल (टयुबवेल)" || "सामुदायीक चापाकल (टयुबवेल)" || "अन्य" || "प्रणालीगत खानेपानी").length;
    let Water_resource_unavailable = Data.length - Water_resource_available;
    let Toilet_available = Data.filter((item) => item.toilet === "छ").length;
    let Toilet_unavailable = Data.length - Toilet_available;
    let Wash_facility_available = Data.filter((item) => item.wash_facility === "छ").length;
    let Wash_facility_unavailable = Data.length - Wash_facility_available;
    let Sanitary_pad_available = Data.filter((item) => item.sanitary_pad_available === "छ").length;
    let Sanitary_pad_unavailable = Data.length - Sanitary_pad_available;
    let Total_family_having_pregnant_mother = Data.filter((item) => item.total_pregnant !== 0).length;
    let Total_male_disabled_family = Data.filter((item) => item.total_male_disabled !== 0).length;
    let Total_female_disabled_family = Data.filter((item) => item.total_female_disabled !== 0).length;
    let Medical_checkup_available = Data.filter((item) => item.medical_checkup === "छ").length;
    let Medical_checkup_unavailable = Data.length - Medical_checkup_available;
    let Total_Family_in_Survey = Data.length;
    //total pregnant women in whole survey
    let Total_number_of_pregnant_women = Data.reduce((prev, curr) => prev + curr.total_pregnant, 0);
    let Total_male_disabled = Data.reduce((prev, curr) => prev + curr.total_male_disabled, 0);
    let Total_female_disabled = Data.reduce((prev, curr) => prev + curr.total_female_disabled, 0);

    console.log("Dataa>>>", Data);
    console.log("Water Resource available>>>", Water_resource_available);
    console.log("Water Resource Unavailable>>>", Water_resource_unavailable);
    console.log("Toilet available>>", Toilet_available);
    console.log("toilet unavailable>>>", Toilet_unavailable);
    console.log("wash facility available>>>", Wash_facility_available);
    console.log("wash facility unavailable>>>", Wash_facility_unavailable);
    console.log("sanitary pad available>>>", Sanitary_pad_available);
    console.log("sanitary pad uavailable>>>", Sanitary_pad_unavailable);
    console.log("total Pregnant>>>", Total_family_having_pregnant_mother);
    console.log("Total male disabled family>>>", Total_male_disabled_family);
    console.log("Total female disabled family>>>", Total_female_disabled_family);
    console.log("Medical checkup available>>>", Medical_checkup_available);
    console.log("medical checkup unavailable>>>", Medical_checkup_unavailable);
    console.log("Total family in survey>>>", Total_Family_in_Survey);
    console.log("total pregnant>>>", Total_number_of_pregnant_women);
    console.log("total male disabled>>>", Total_male_disabled);
    console.log("total female disabled>>>", Total_female_disabled);


    return (
        <div>
            <Header />
            {/* Main Sidebar Container */}
            <aside className="main-sidebar sidebar-dark-primary elevation-4">
                {/* Brand Logo */}
                <a href="index3.html" className="brand-link">
                    <img src="oxfam.jpg" alt="AdminLTE Logo" className="brand-image img-circle elevation-3" style={{ opacity: '.8' }} />
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
                                        <Link to="/overall-data" className="nav-link active">
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

                            <div className="col-md-7">
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
                                                <div id="world-map-markers" style={{ height: 600, overflow: 'hidden' }}>
                                                    <div className="map" />
                                                    <Map />
                                                </div>
                                            </div>

                                        </div>{/* /.d-md-flex */}
                                    </div>
                                    {/* /.card-body */}
                                </div>


                            </div>
                            <div className="col-md-5">
                                <div className="card">
                                    <div className="card-header">
                                        <h3 className="card-title">
                                            <i className="fas fa-text-width" />
        Overall Country Data
      </h3>
                                    </div>
                                    {/* /.card-header */}
                                    <div className="card-body">
                                        <div className="info-box mb-3 bg-success">
                                            <div className="info-box-content">
                                                <span className="info-box-text"><li>Water Resource Available: <span><b>{Water_resource_available}</b></span></li></span>
                                                <span className="info-box-text"><li>Water Resource Unavailable: <span><b>{Water_resource_unavailable}</b></span></li></span>
                                                <span className="info-box-text"><li>Toilet Avaliable: <span><b>{Toilet_available}</b></span></li></span>
                                                <span className="info-box-text"><li>Toilet Unavailable: <span><b>{Toilet_unavailable}</b></span></li></span>
                                                <span className="info-box-text"><li>Wash Facility available: <span><b>{Wash_facility_available}</b></span></li></span>
                                                <span className="info-box-text"><li>Wash Facility unavailable: <span><b>{Wash_facility_unavailable}</b></span></li></span>
                                                <span className="info-box-text"><li>sanitary Pad Available: <span><b>{Sanitary_pad_available}</b></span></li></span>
                                                <span className="info-box-text"><li>sanitary Pad Unavailable: <span><b>{Sanitary_pad_unavailable}</b></span></li></span>
                                                <span className="info-box-text"><li>Total Pregnant Women: <span><b>{Total_number_of_pregnant_women}</b></span></li></span>
                                                <span className="info-box-text"><li>Total Family having Pregnant Women: <span><b>{Total_family_having_pregnant_mother}</b></span></li></span>
                                                <span className="info-box-text"><li>Total Disable Male: <span><b>{Total_male_disabled}</b></span></li></span>
                                                <span className="info-box-text"><li>Total Male Disabled Family: <span><b>{Total_male_disabled_family}</b></span></li></span>
                                                <span className="info-box-text"><li>Total Disable Female: <span><b>{Total_female_disabled}</b></span></li></span>
                                                <span className="info-box-text"><li>Total Female Disabled Family: <span><b>{Total_female_disabled_family}</b></span></li></span>
                                                <span className="info-box-text"><li>Medical Checkup available: <span><b>{Medical_checkup_available}</b></span></li></span>
                                                <span className="info-box-text"><li>Medical Checkup unavailable: <span><b>{Medical_checkup_unavailable}</b></span></li></span>
                                                <span className="info-box-text"><li>Total Family in survey: <span><b>{Total_Family_in_Survey}</b></span></li></span>
                                                <span className="info-box-text"><b><u>COVID CASES DETAILS</u></b></span>
                                                <span className="info-box-text"><li>Total Normal Fever सामान्य (९६-९८.६ ): <span><b>1228</b></span></li></span>
                                                <span className="info-box-text"><li>Total Fever ज्वरो (९८.६ -१०२ ): <span><b>12</b></span></li></span>
                                                <span className="info-box-text"><li>Total High Fever उच्च ज्वरो (१०२+): <span><b>1</b></span></li></span>
                                                <span className="info-box-text"><li>Total People Having Drycough: <span><b>32</b></span></li></span>
                                                <span className="info-box-text"><li>Total People not having Drycough: <span><b>1209</b></span></li></span>
                                                <span className="info-box-text"><li>Total People having Breathe Problem: <span><b>25</b></span></li></span>
                                                <span className="info-box-text"><li>Total People not having Breathe Problem:<span><b>1216</b></span></li></span>
                                                <span className="info-box-text"><li>Total People having Tiredness:<span><b>219</b></span></li></span>
                                                <span className="info-box-text"><li>Total People not having Tiredness:<span><b>1022</b></span></li></span>
                                                <span className="info-box-text"><li>Total Family Members in COVID19 Survey:<span><b>1241</b></span></li></span>

                                            </div>

                                        </div>

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

            <Footer />
        </div>
    )
}
