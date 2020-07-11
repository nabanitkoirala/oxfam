import React, { useContext, useState } from 'react';
import Header from '../View-pannel/Header';
import { Link } from 'react-router-dom';
import Footer from '../View-pannel/Footer';
import Map from './../Mapbox';
import './../Mapbox.css';
import { DataContext } from '../Store';

export default function Province2() {
    const [Data, setData] = useContext(DataContext);

    const [survey_Dist, setSurvey_Dist] = useState([]);
    const [survey_Muni, setSurvey_Muni] = useState([]);
    const [survey_ward, setSurvey_ward] = useState([]);

    const [isdistrictselected, setIsdistrictselected] = useState(false);
    const [ismunicipalityselected, setIsmunicipalityselected] = useState(false);
    const [municipalityFinallychooosen, setMunicipalityFinallychoosen] = useState(false);
    const [isWardselected, setIsWardselected] = useState(false);
    const [wardFinallychoosen, setWardFinallychoosen] = useState(false);


    let Water_resource_available_final = municipalityFinallychooosen ? survey_Muni.filter((item) => item.water_resource === "व्यक्तिगत चापा कल (टयुबवेल)" || "सामुदायीक चापाकल (टयुबवेल)" || "अन्य" || "प्रणालीगत खानेपानी").length : isdistrictselected ? survey_Dist.filter((item) => item.water_resource === "व्यक्तिगत चापा कल (टयुबवेल)" || "सामुदायीक चापाकल (टयुबवेल)" || "अन्य" || "प्रणालीगत खानेपानी").length : Data.filter((item) => item.water_resource === "व्यक्तिगत चापा कल (टयुबवेल)" || "सामुदायीक चापाकल (टयुबवेल)" || "अन्य" || "प्रणालीगत खानेपानी").length;
    let water_resource_unavailable_final = municipalityFinallychooosen ? survey_Muni.length - Water_resource_available_final : isdistrictselected ? survey_Dist.length - Water_resource_available_final : Data.length - Water_resource_available_final;
    let Toilet_available_final = municipalityFinallychooosen ? survey_Muni.filter((item) => item.toilet === "छ").length : isdistrictselected ? survey_Dist.filter((item) => item.toilet === "छ").length : Data.filter((item) => item.toilet === "छ").length;
    let Toilet_unavailable_final = municipalityFinallychooosen ? survey_Muni.length - Toilet_available_final : isdistrictselected ? survey_Dist.length - Toilet_available_final : Data.length - Toilet_available_final;
    let Wash_facility_available_final = municipalityFinallychooosen ? survey_Muni.filter((item) => item.wash_facility === "छ").length : isdistrictselected ? survey_Dist.filter((item) => item.wash_facility === "छ").length : Data.filter((item) => item.wash_facility === "छ").length;
    let Wash_facility_unavailable_final = municipalityFinallychooosen ? survey_Muni.length - Wash_facility_available_final : isdistrictselected ? survey_Dist.length - Wash_facility_available_final : Data.length - Wash_facility_available_final;
    let Sanitary_pad_available_final = municipalityFinallychooosen ? survey_Muni.filter((item) => item.sanitary_pad_available === "छ").length : isdistrictselected ? survey_Dist.filter((item) => item.sanitary_pad_available === "छ").length : Data.filter((item) => item.sanitary_pad_available === "छ").length;
    let Sanitary_pad_unavailable_final = municipalityFinallychooosen ? survey_Muni.length - Sanitary_pad_available_final : isdistrictselected ? survey_Dist.length - Sanitary_pad_available_final : Data.length - Sanitary_pad_available_final;
    let Total_family_having_pregnant_mother_final = municipalityFinallychooosen ? survey_Muni.filter((item) => item.total_pregnant !== 0).length : isdistrictselected ? survey_Dist.filter((item) => item.total_pregnant !== 0).length : Data.filter((item) => item.total_pregnant !== 0).length;
    let Total_male_disabled_family_final = municipalityFinallychooosen ? survey_Muni.filter((item) => item.total_male_disabled !== 0).length : isdistrictselected ? survey_Dist.filter((item) => item.total_male_disabled !== 0).length : Data.filter((item) => item.total_male_disabled !== 0).length;
    let Total_female_disabled_family_final = municipalityFinallychooosen ? survey_Muni.filter((item) => item.total_female_disabled !== 0).length : isdistrictselected ? survey_Dist.filter((item) => item.total_female_disabled !== 0).length : Data.filter((item) => item.total_female_disabled !== 0).length;
    let Medical_checkup_available_final = municipalityFinallychooosen ? survey_Muni.filter((item) => item.medical_checkup === "छ").length : isdistrictselected ? survey_Dist.filter((item) => item.medical_checkup === "छ").length : Data.filter((item) => item.medical_checkup === "छ").length;
    let Medical_checkup_unavailable_final = municipalityFinallychooosen ? survey_Muni.length - Medical_checkup_available_final : isdistrictselected ? survey_Dist.length - Medical_checkup_available_final : Data.length - Medical_checkup_available_final;
    let Total_Family_in_Survey_final = municipalityFinallychooosen ? survey_Muni.length : isdistrictselected ? survey_Dist.length : Data.length;
    //total pregnant women in whole survey
    let Total_number_of_pregnant_women_final = municipalityFinallychooosen ? survey_Muni.reduce((prev, curr) => prev + curr.total_pregnant, 0) : isdistrictselected ? survey_Dist.reduce((prev, curr) => prev + curr.total_pregnant, 0) : Data.reduce((prev, curr) => prev + curr.total_pregnant, 0);
    let Total_male_disabled_final = municipalityFinallychooosen ? survey_Muni.reduce((prev, curr) => prev + curr.total_male_disabled, 0) : isdistrictselected ? survey_Dist.reduce((prev, curr) => prev + curr.total_male_disabled, 0) : Data.reduce((prev, curr) => prev + curr.total_male_disabled, 0);
    let Total_female_disabled_final = municipalityFinallychooosen ? survey_Muni.reduce((prev, curr) => prev + curr.total_female_disabled, 0) : isdistrictselected ? survey_Dist.reduce((prev, curr) => prev + curr.total_female_disabled, 0) : Data.reduce((prev, curr) => prev + curr.total_female_disabled, 0);



    //remove duplicate value by using set select district and municipality in sidebar
    let Select_District = Array.from(new Set(Data.filter((item) => item.province === "प्रदेश नं .२").map((item) => item.district))).map((district) => Data.find((item) => item.district === district));
    let Select_District_map = Select_District.map((item) => <option key={item.id} value={item.district}>{item.district}</option>)
    let select_Municipality = Array.from(new Set(survey_Dist.map((item) => item.palika))).map((palika) => survey_Dist.find((item) => item.palika === palika));



    console.log("municipality", survey_Muni);


    const handleDistrict = (e) => {
        if (e.target.value) {
            (setSurvey_Dist(Data.filter((item) => item.district === e.target.value)))
            setIsdistrictselected(true)
            setIsmunicipalityselected(true)
            setMunicipalityFinallychoosen(false)
        }

    }
    const handleMunicipality = (e) => {
        (setSurvey_Muni(survey_Dist.filter((item) => item.palika === e.target.value)))
        setMunicipalityFinallychoosen(true)
        setIsWardselected(true)
        setWardFinallychoosen(true)
    }

    const handleWard = (e) => {
        (setSurvey_ward(survey_Muni.filter((item) => item.ward === e.target.value)))
        setWardFinallychoosen(true)
    }

    let Demo = isdistrictselected ? survey_Dist.length : Data.length;
    let Demo2 = municipalityFinallychooosen ? survey_Muni.length : Data.length;
    let To = municipalityFinallychooosen ? Demo2 : Demo;
    let Tont = municipalityFinallychooosen ? survey_Muni.length : isdistrictselected ? survey_Dist.length : Data.length;
    let Wad = wardFinallychoosen ? survey_ward.length : '';

    let Data_header_final = municipalityFinallychooosen ? <h3 className="card-title">
        <i className="fas fa-text-width" />
        Municipality Data
      </h3>
        : isdistrictselected ? <h3 className="card-title">
            <i className="fas fa-text-width" />
        Province 2 District Data
      </h3>
            :
            <h3 className="card-title">
                <i className="fas fa-text-width" />
        Province 2 Data
      </h3>
    return (
        <div>
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
                                {/* Add icons to the links using the .nav-icon className
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
                                            <Link to="/province2" className="nav-link active" onClick={(e) => {
                                                setIsdistrictselected(false)
                                                setMunicipalityFinallychoosen(false)
                                                setIsmunicipalityselected(false)
                                                setIsWardselected(false)
                                                setWardFinallychoosen(false)
                                            }}>
                                                <i className="far fa-circle nav-icon" />
                                                <p>Province 2</p>
                                            </Link>
                                            {/* select */}
                                            <div className="form-group">
                                                <select className="form-control" onClick={handleDistrict}>
                                                    <option>Choose District</option>
                                                    {Select_District_map}
                                                </select>
                                            </div>
                                            {ismunicipalityselected ?
                                                < div className="form-group" >
                                                    <select className="form-control" onClick={handleMunicipality}>
                                                        <option>Choose Municipality</option>
                                                        {select_Municipality.map((item) => <option key={item.id} value={item.palika}>{item.palika}</option>)}
                                                    </select>
                                                </div >
                                                : ''
                                            }
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
                                            {Data_header_final}
                                        </div>
                                        {/* /.card-header */}
                                        <div className="card-body">
                                            <div className="info-box mb-3 bg-success">
                                                <div className="info-box-content">
                                                    <span className="info-box-text"><li>Water Resource Available: <span><b>{Water_resource_available_final}</b></span></li></span>
                                                    <span className="info-box-text"><li>Water Resource Unavailable: <span><b>{water_resource_unavailable_final}</b></span></li></span>
                                                    <span className="info-box-text"><li>Toilet Avaliable: <span><b>{Toilet_available_final}</b></span></li></span>
                                                    <span className="info-box-text"><li>Toilet Unavailable: <span><b>{Toilet_unavailable_final}</b></span></li></span>
                                                    <span className="info-box-text"><li>Wash Facility available: <span><b>{Wash_facility_available_final}</b></span></li></span>
                                                    <span className="info-box-text"><li>Wash Facility unavailable: <span><b>{Wash_facility_unavailable_final}</b></span></li></span>
                                                    <span className="info-box-text"><li>sanitary Pad Available: <span><b>{Sanitary_pad_available_final}</b></span></li></span>
                                                    <span className="info-box-text"><li>sanitary Pad Unavailable: <span><b>{Sanitary_pad_unavailable_final}</b></span></li></span>
                                                    <span className="info-box-text"><li>Total Pregnant Women: <span><b>{Total_number_of_pregnant_women_final}</b></span></li></span>
                                                    <span className="info-box-text"><li>Total Family having Pregnant Women: <span><b>{Total_family_having_pregnant_mother_final}</b></span></li></span>
                                                    <span className="info-box-text"><li>Total Disable Male: <span><b>{Total_male_disabled_final}</b></span></li></span>
                                                    <span className="info-box-text"><li>Total Male Disabled Family: <span><b>{Total_male_disabled_family_final}</b></span></li></span>
                                                    <span className="info-box-text"><li>Total Disable Female: <span><b>{Total_female_disabled_final}</b></span></li></span>
                                                    <span className="info-box-text"><li>Total Female Disabled Family: <span><b>{Total_female_disabled_family_final}</b></span></li></span>
                                                    <span className="info-box-text"><li>Medical Checkup available: <span><b>{Medical_checkup_available_final}</b></span></li></span>
                                                    <span className="info-box-text"><li>Medical Checkup unavailable: <span><b>{Medical_checkup_unavailable_final}</b></span></li></span>
                                                    <span className="info-box-text"><li>Total Family in survey: <span><b>{Total_Family_in_Survey_final}</b></span></li></span>
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
                                                    <span className="info-box-text"><li>Total Family Members inCOVID19 Survey:<span><b>1241</b></span></li></span>

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
            </div>

            <Footer />
        </div>
    )
}
