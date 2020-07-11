import React, { useContext, useState } from 'react';
import Header from '../View-pannel/Header';
import ReactMapGl, { Marker, Popup } from 'react-map-gl';
import { Link } from 'react-router-dom';
import Footer from '../View-pannel/Footer';
//import Map from './../Mapbox';
import './../Mapbox.css';
import { DataContext, DistrictContext, WardContext, MunicipalityContext, ProvinceContext, isLoadingContext } from '../Store';
import './design.css';

export default function Dashboard() {
    const [Municipality] = useContext(MunicipalityContext);
    const [Province] = useContext(ProvinceContext);
    const [District] = useContext(DistrictContext);
    const [Ward] = useContext(WardContext);
    const [Data, setData] = useContext(DataContext);//form data
    const [isloading, setIsloading] = useContext(isLoadingContext);
    const [survey_Province, setSurvey_Province] = useState([]);//if province is selected froom sidebar its value is changed and its total no of family from selected province
    const [survey_District, setSurvey_District] = useState([]);//if district is selected froom sidebar its value is changed and its total no of family from selected district
    const [survey_Muni, setSurvey_Muni] = useState([]);//if municipality is selected froom sidebar its value is changed and its total no of family from selected municipality
    const [isprovinceselected, setIsprovinceselected] = useState(false);
    const [isdistrictselected, setIsdistrictselected] = useState(false);//When a province is selected it gives option to show or hide district option in sidebar.
    const [isdistrictfinallychoosen, setIsdistrictfinallychoosen] = useState(false);//when a district is selected it helps to display value
    const [Covid_province, setCovid_province] = useState([]);
    const [Covid_district, setCovid_district] = useState([]);
    const [Covid_municipality, setCovid_Municipality] = useState([]);
    const [Map_demo_province, setMap_demo_province] = useState([]);//used to set the value of selected district to plot on the map
    const [Map_demo_district, setMap_demo_district] = useState([]);
    const [Map_demo_municipality, setMap_demo_municipality] = useState([]);
    const [ismunicipalityselected, setIsmunicipalityselected] = useState(false);
    const [ismunicipalityfinallychoosen, setIsmunicipalityfinallychoosen] = useState(false);
    const [selectedPerson, setselectedPerson] = useState(null);
    const [viewport, setviewPort] = useState({

        latitude: 26.4667,
        longitude: 87.2667,
        width: "100vw",
        height: "135vh",
        zoom: 7.5
    })
    // 26.930519228980092,
    // 85.68968070300077,

    let Water_resource_available_province = isprovinceselected ? survey_Province.filter((item) => item.water_resource === "व्यक्तिगत चापा कल (टयुबवेल)" || "सामुदायीक चापाकल (टयुबवेल)" || "अन्य" || "प्रणालीगत खानेपानी").length : Data.filter((item) => item.water_resource === "व्यक्तिगत चापा कल (टयुबवेल)" || "सामुदायीक चापाकल (टयुबवेल)" || "अन्य" || "प्रणालीगत खानेपानी").length;
    let Water_resource_available_district = isdistrictfinallychoosen ? survey_District.filter((item) => item.water_resource === "व्यक्तिगत चापा कल (टयुबवेल)" || "सामुदायीक चापाकल (टयुबवेल)" || "अन्य" || "प्रणालीगत खानेपानी").length : Data.filter((item) => item.water_resource === "व्यक्तिगत चापा कल (टयुबवेल)" || "सामुदायीक चापाकल (टयुबवेल)" || "अन्य" || "प्रणालीगत खानेपानी").length;
    let water_resource_available_municipality = ismunicipalityfinallychoosen ? survey_Muni.filter((item) => item.water_resource === "व्यक्तिगत चापा कल (टयुबवेल)" || "सामुदायीक चापाकल (टयुबवेल)" || "अन्य" || "प्रणालीगत खानेपानी").length : Data.filter((item) => item.water_resource === "व्यक्तिगत चापा कल (टयुबवेल)" || "सामुदायीक चापाकल (टयुबवेल)" || "अन्य" || "प्रणालीगत खानेपानी").length;
    let Water_resource_available_final = ismunicipalityfinallychoosen ? water_resource_available_municipality : isdistrictfinallychoosen ? Water_resource_available_district : Water_resource_available_province;
    let Water_resource_available = isloading ? <div class="spinner-border text-info bolder"></div> : Water_resource_available_final;
    let water_resource_unavailable = isloading ? <div class="spinner-border text-info bolder"></div> : ismunicipalityfinallychoosen ? survey_Muni.length - Water_resource_available_final : isdistrictfinallychoosen ? survey_District.length - Water_resource_available_final : Data.length - Water_resource_available_final;
    // let water_resource_unavailable = isloading ? <div class="spinner-border text-info bolder"></div> : water_resource_unavailable_final;
    //let water_resource_unavailable = ismunicipalityfinallychoosen ? survey_Muni.length - Water_resource_available_final : isdistrictfinallychoosen ? survey_District.length - Water_resource_available_final : Data.length - Water_resource_available_final;

    let Toilet_available_province = isprovinceselected ? survey_Province.filter((item) => item.toilet === "छ").length : Data.filter((item) => item.toilet === "छ").length;
    let Toilet_available_district = isdistrictfinallychoosen ? survey_District.filter((item) => item.toilet === "छ").length : Data.filter((item) => item.toilet === "छ").length;
    let Toilet_available_municipality = ismunicipalityfinallychoosen ? survey_Muni.filter((item) => item.toilet === "छ").length : Data.filter((item) => item.toilet === "छ").length;
    let Toilet_available_final = ismunicipalityfinallychoosen ? Toilet_available_municipality : isdistrictfinallychoosen ? Toilet_available_district : Toilet_available_province;
    let Toilet_available = isloading ? <div class="spinner-border text-info bolder"></div> : Toilet_available_final;

    let Toilet_unavailable_province = isprovinceselected ? survey_Province.filter((item) => item.toilet === "छैन").length : Data.filter((item) => item.toilet === "छैन").length;
    let Toilet_unavailable_district = isdistrictfinallychoosen ? survey_District.filter((item) => item.toilet === "छैन").length : Data.filter((item) => item.toilet === "छैन").length;
    let Toilet_unavailable_municipality = ismunicipalityfinallychoosen ? survey_Muni.filter((item) => item.toilet === "छैन").length : Data.filter((item) => item.toilet === "छैन").length;
    let Toilet_unavailable_final = ismunicipalityfinallychoosen ? Toilet_unavailable_municipality : isdistrictfinallychoosen ? Toilet_unavailable_district : Toilet_unavailable_province;
    let Toilet_unavailable = isloading ? <div class="spinner-border text-info bolder"></div> : Toilet_available_final;




    let Wash_facility_available_province = isprovinceselected ? survey_Province.filter((item) => item.wash_facility === "छ").length : Data.filter((item) => item.wash_facility === "छ").length;
    let Wash_facility_available_district = isdistrictfinallychoosen ? survey_District.filter((item) => item.wash_facility === "छ").length : Data.filter((item) => item.wash_facility === "छ").length;
    let Wash_facility_available_municipality = ismunicipalityfinallychoosen ? survey_Muni.filter((item) => item.wash_facility === "छ").length : Data.filter((item) => item.wash_facility === "छ").length;
    let Wash_facility_available_final = ismunicipalityfinallychoosen ? Wash_facility_available_municipality : isdistrictfinallychoosen ? Wash_facility_available_district : Wash_facility_available_province;
    let Wash_facility_available = isloading ? <div class="spinner-border text-info bolder"></div> : Wash_facility_available_final;

    let Wash_facility_unavailable_province = isprovinceselected ? survey_Province.filter((item) => item.wash_facility === "छैन").length : Data.filter((item) => item.wash_facility === "छैन").length;
    let Wash_facility_unavailable_district = isdistrictfinallychoosen ? survey_District.filter((item) => item.wash_facility === "छैन").length : Data.filter((item) => item.wash_facility === "छैन").length;
    let Wash_facility_unavailable_municipality = ismunicipalityfinallychoosen ? survey_Muni.filter((item) => item.wash_facility === "छैन").length : Data.filter((item) => item.wash_facility === "छैन").length;
    let Wash_facility_unavailable_final = ismunicipalityfinallychoosen ? Wash_facility_unavailable_municipality : isdistrictfinallychoosen ? Wash_facility_unavailable_district : Wash_facility_unavailable_province;
    let Wash_facility_unavailable = isloading ? <div class="spinner-border text-info bolder"></div> : Wash_facility_unavailable_final;


    let Demo = [];
    let Total_drycough = 0;
    let total_data = [];
    for (let i = 0; i < Data.length; i++) {

        let data = Data[i]
        //console.log(data);


        data.wardcoordinate = Ward.filter((item) => Number(item.title) === data.ward).map((item) => item.centroid.coordinates);
        data.provincecoordinate = Province.filter((item) => item.title_ne === data.province).map((item) => item.centroid.coordinates);
        data.districtcoordinate = District.filter((item) => item.title_ne === data.district).map((item) => item.centroid.coordinates);
        data.municipalitycoordinate = Municipality.filter((item) => item.title_ne === data.palika).map((item) => item.centroid.coordinates);
        Demo.push(data)

        for (let i = 0; i < data.family.length; i++) {
            let data_family = data.family[i]
            total_data.push(data_family);
            if (data_family.dry_cough === "छ") {
                Total_drycough += 1


            }
        }

    }

    let total_family_covid_data = [];//total family members in survey
    for (let i = 0; i < Data.length; i++) {
        let data = Data[i];

        for (let i = 0; i < data.family.length; i++) {
            let fam_data = data.family[i];
            fam_data.province = Demo.filter((item) => item.id === fam_data.form).map((item) => item.province);
            fam_data.district = Demo.filter((item) => item.id === fam_data.form).map((item) => item.district);
            fam_data.municipality = Demo.filter((item) => item.id === fam_data.form).map((item) => item.palika);

            total_family_covid_data.push(fam_data);
        }
    }

    let Normal_fever_province = isprovinceselected ? Covid_province.filter((item) => item.temperature === "सामान्य (९६-९८.६ )").length : total_family_covid_data.filter((item) => item.temperature === "सामान्य (९६-९८.६ )").length;
    let Normal_fever_District = isdistrictfinallychoosen ? Covid_district.filter((item) => item.temperature === "सामान्य (९६-९८.६ )").length : total_family_covid_data.filter((item) => item.temperature === "सामान्य (९६-९८.६ )").length;
    let Normal_fever_municipality = ismunicipalityfinallychoosen ? Covid_municipality.filter((item) => item.temperature === "सामान्य (९६-९८.६ )").length : total_family_covid_data.filter((item) => item.temperature === "सामान्य (९६-९८.६ )").length;
    let Normal_fever = ismunicipalityfinallychoosen ? Normal_fever_municipality : isdistrictfinallychoosen ? Normal_fever_District : Normal_fever_province;
    let Normal_fever_final = isloading ? <div class="spinner-border text-info bolder"></div> : Normal_fever;
    let Fever_province = isprovinceselected ? Covid_province.filter((item) => item.temperature === "ज्वरो (९८.६ -१०२ )").length : total_family_covid_data.filter((item) => item.temperature === "ज्वरो (९८.६ -१०२ )").length;
    let Fever_District = isdistrictfinallychoosen ? Covid_district.filter((item) => item.temperature === "ज्वरो (९८.६ -१०२ )").length : total_family_covid_data.filter((item) => item.temperature === "ज्वरो (९८.६ -१०२ )").length;
    let Fever_municipality = ismunicipalityfinallychoosen ? Covid_municipality.filter((item) => item.temperature === "ज्वरो (९८.६ -१०२ )").length : total_family_covid_data.filter((item) => item.temperature === "ज्वरो (९८.६ -१०२ )").length;
    let Fever = ismunicipalityfinallychoosen ? Fever_municipality : isdistrictfinallychoosen ? Fever_District : Fever_province;
    let Fever_final = isloading ? <div class="spinner-border text-info bolder"></div> : Fever;

    let High_fever_province = isprovinceselected ? Covid_province.filter((item) => item.temperature === "उच्च ज्वरो (१०२+)").length : total_family_covid_data.filter((item) => item.temperature === "उच्च ज्वरो (१०२+)").length;
    let High_fever_district = isdistrictfinallychoosen ? Covid_district.filter((item) => item.temperature === "उच्च ज्वरो (१०२+)").length : total_family_covid_data.filter((item) => item.temperature === "उच्च ज्वरो (१०२+)").length;
    let High_fever_municipality = ismunicipalityfinallychoosen ? Covid_municipality.filter((item) => item.temperature === "उच्च ज्वरो (१०२+)").length : total_family_covid_data.filter((item) => item.temperature === "उच्च ज्वरो (१०२+)").length;
    let High_fever = ismunicipalityfinallychoosen ? High_fever_municipality : isdistrictfinallychoosen ? High_fever_district : High_fever_province;
    let High_fever_final = isloading ? <div class="spinner-border text-info bolder"></div> : High_fever;

    let Dry_Cough_province = isprovinceselected ? Covid_province.filter((item) => item.dry_cough === "छ").length : total_family_covid_data.filter((item) => item.dry_cough === "छ").length;
    let Dry_Cough_district = isdistrictfinallychoosen ? Covid_district.filter((item) => item.dry_cough === "छ").length : total_family_covid_data.filter((item) => item.dry_cough === "छ").length;
    let Dry_Cough_municipality = ismunicipalityfinallychoosen ? Covid_municipality.filter((item) => item.dry_cough === "छ").length : total_family_covid_data.filter((item) => item.dry_cough === "छ").length;
    let Dry_Cough = ismunicipalityfinallychoosen ? Dry_Cough_municipality : isdistrictfinallychoosen ? Dry_Cough_district : Dry_Cough_province;
    let Dry_Cough_final = isloading ? <div class="spinner-border text-info bolder"></div> : Dry_Cough;

    let Breathing_problem_province = isprovinceselected ? Covid_province.filter((item) => item.breath_problem === "छ").length : total_family_covid_data.filter((item) => item.breath_problem === "छ").length;
    let Breathing_problem_district = isdistrictfinallychoosen ? Covid_district.filter((item) => item.breath_problem === "छ").length : total_family_covid_data.filter((item) => item.breath_problem === "छ").length;
    let Breathing_problem_municipality = ismunicipalityfinallychoosen ? Covid_municipality.filter((item) => item.breath_problem === "छ").length : total_family_covid_data.filter((item) => item.breath_problem === "छ").length;
    let Breathing_problem = ismunicipalityfinallychoosen ? Breathing_problem_municipality : isdistrictfinallychoosen ? Breathing_problem_district : Breathing_problem_province;
    let Breathing_problem_final = isloading ? <div class="spinner-border text-info bolder"></div> : Breathing_problem;

    let Tiredness_province = isprovinceselected ? Covid_province.filter((item) => item.tiredness === "छ").length : total_family_covid_data.filter((item) => item.tiredness === "छ").length;
    let Tiredness_district = isdistrictfinallychoosen ? Covid_district.filter((item) => item.tiredness === "छ").length : total_family_covid_data.filter((item) => item.tiredness === "छ").length;
    let Tiredness_municipality = ismunicipalityfinallychoosen ? Covid_municipality.filter((item) => item.tiredness === "छ").length : total_family_covid_data.filter((item) => item.tiredness === "छ").length;
    let Tiredness = ismunicipalityfinallychoosen ? Tiredness_municipality : isdistrictfinallychoosen ? Tiredness_district : Tiredness_province;
    let Tiredness_final = isloading ? <div class="spinner-border text-info bolder"></div> : Tiredness;

    //selects all province and removes dublicate province 
    let Select_province = Array.from(new Set(Data.filter((item) => item.province).map((item) => item.province))).map((province) => Data.find((item) => item.province === province));
    let Select_district = Array.from(new Set(survey_Province.filter((item) => item.district).map((item) => item.district))).map((district) => survey_Province.find((item) => item.district === district));
    let Select_municipality = Array.from(new Set(survey_District.filter((item) => item.palika).map((item) => item.palika))).map((palika) => survey_District.find((item) => item.palika === palika));

    const handleProvince = (e) => {
        if (e.target.value === "Showing Overall Data") {
            setSurvey_Province(Data.filter((item) => item.province))
            setIsdistrictselected(false)
            setIsmunicipalityselected(false)
            setIsprovinceselected(false)
        }
        else if (e.target.value !== "Showing Overall Data") {

            setSurvey_Province(Data.filter((item) => item.province === e.target.value))
            setCovid_province(total_family_covid_data.filter((item) => item.province[0] === e.target.value))
            setMap_demo_province(Demo.filter((item) => item.province === e.target.value))
            setIsprovinceselected(true);
            setIsdistrictselected(true);
            setIsdistrictfinallychoosen(false);
            setIsmunicipalityfinallychoosen(false);

        }

        console.log("target value>>>", e.target.value);
        console.log("elements>>>", survey_Province);
    }

    console.log("value>>>>>", survey_Province);
    const handleDistrict = (e) => {

        if (e.target.value) {
            setSurvey_District(survey_Province.filter((item) => item.district === e.target.value))
            setCovid_district(total_family_covid_data.filter((item) => item.district[0] === e.target.value))
            setIsdistrictfinallychoosen(true);
            setMap_demo_district(Map_demo_province.filter((item) => item.district === e.target.value))
            setIsmunicipalityfinallychoosen(false)
            setIsmunicipalityselected(true)

        }

    }
    console.log("demo district map>>>", Map_demo_district);
    const handleMunicipality = (e) => {
        if (e.target.value) {
            setSurvey_Muni(survey_District.filter((item) => item.palika === e.target.value))
            setCovid_Municipality(Covid_district.filter((item) => item.municipality[0] === e.target.value))
            setMap_demo_municipality(Map_demo_district.filter((item) => item.palika === e.target.value))
            setIsmunicipalityfinallychoosen(true);


        }
    }


    const points = Demo.map(item => ({
        type: "Feature",
        properties: {
            cluster: false,
            crimeId: item.id,
            category: item.district
        },
        geometry: { type: "Point", coordinates: item.districtcoordinate[0] }

    }))

    let Map_province = isprovinceselected ? Map_demo_province.map(item => ({
        type: "Feature",
        properties: {
            cluster: false,
            crimeId: item.id,
            category: item.district
        },
        geometry: { type: "Point", coordinates: item.provincecoordinate[0] }

    })) : Demo.map(item => ({
        type: "Feature",
        properties: {
            cluster: false,
            crimeId: item.id,
            category: item.district
        },
        geometry: { type: "Point", coordinates: item.provincecoordinate[0] }

    }))
    let Map_district = isdistrictfinallychoosen ? Map_demo_district.map(item => ({
        type: "Feature",
        properties: {
            cluster: false,
            crimeId: item.id,
            category: item.district
        },
        geometry: { type: "Point", coordinates: item.districtcoordinate[0] }

    })) : Demo.map(item => ({
        type: "Feature",
        properties: {
            cluster: false,
            crimeId: item.id,
            category: item.district
        },
        geometry: { type: "Point", coordinates: item.provincecoordinate[0] }

    }))
    let Map_municipality = ismunicipalityfinallychoosen ? Map_demo_municipality.map(item => ({
        type: "Feature",
        properties: {
            cluster: false,
            crimeId: item.id,
            category: item.district
        },
        geometry: { type: "Point", coordinates: item.municipalitycoordinate[0] }

    })) : Demo.map(item => ({
        type: "Feature",
        properties: {
            cluster: false,
            crimeId: item.id,
            category: item.district
        },
        geometry: { type: "Point", coordinates: item.provincecoordinate[0] }

    }))
    let Map = ismunicipalityfinallychoosen ? Map_municipality : isdistrictfinallychoosen ? Map_district : Map_province;


    console.log("finaltest>>>>", Map);
    console.log("demo", Demo);

    return (
        <div>
            <Header />
            {/* Main Sidebar Container */}
            < aside className="main-sidebar sidebar-grey-primary elevation-4 test" >
                {/* Brand Logo */}
                < a href="index3.html" className="brand-link" >
                    <img src="oxfam.jpg" alt="oxfam Logo" className="brand-image img-circle elevation-3" style={{ opacity: '.8' }} />
                    <span className="brand-text font-weight-light">Oxfam</span>
                </a >

                {/* Sidebar */}
                < div className="sidebar" >
                    {/* Sidebar Menu */}

                    < nav className="mt-2" >


                        <ul className="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
                            {/* Add icons to the links using the .nav-icon class
         with font-awesome or any other icon font library */}
                            <div className="radio">
                                <label> <input type="radio" defaultChecked /> Province Level Data</label>
                            </div>

                            <li className="nav-item has-treeview menu-open">
                                <select className="form-control" onClick={handleProvince}>
                                    <option value="Showing Overall Data">Showing Overall Data</option>
                                    {Select_province.map((item, id) => <option key={id} value={item.province}>Province 2</option>)}

                                </select>
                            </li>
                            <br />
                            {isdistrictselected ? <li className="nav-item has-treeview menu-open">
                                <select className="form-control" onClick={handleDistrict}>
                                    <option value="select district">Select District</option>
                                    {Select_district.map((item, id) => <option key={id} value={item.district}>{item.district}</option>)}

                                </select>
                            </li>
                                : ''

                            }
                            <br />
                            {ismunicipalityselected ?
                                <li className="nav-item has-treeview menu-open">
                                    <select className="form-control" onClick={handleMunicipality}>
                                        <option>Select Municipality</option>
                                        {Select_municipality.map((item, id) => <option key={id} value={item.palika}>{item.palika}</option>)}
                                    </select>
                                </li>
                                : ''
                            }

                        </ul>
                    </nav >
                    {/* /.sidebar-menu */}
                </div >
                {/* /.sidebar */}
            </aside >

            {/* Control Sidebar */}
            < aside className="control-sidebar control-sidebar-dark" >
                {/* Control sidebar content goes here */}
            </aside >
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
                            <div className="col-md-4">

                                <div className="card">
                                    <div className="card-header">
                                        {ismunicipalityfinallychoosen ? <h3 className="card-title text-muted"><b>Province-2:Municipality Detail</b></h3> : isdistrictfinallychoosen ? <h3 className="card-title text-muted"><b>Province-2 District Detail</b></h3>
                                            : isprovinceselected ? <h3 className="card-title text-muted"><b>Province-2 Detail</b></h3> : <h3 className="card-title text-muted"><b>Showing Overall Data</b></h3>}

                                    </div>
                                    {/* /.card-header */}
                                    <div className="card-body">
                                        <div id="accordion" >
                                            {/* we are adding the .class so bootstrap.js collapse plugin detects it */}


                                            <p className="text-success"><b>Water Resources</b></p>
                                            <hr />
                                            <div className="row">
                                                <p className="survey-data">Available</p>
                                                <p className="number">{Water_resource_available}</p>
                                            </div>
                                            <div className="row">
                                                <p className="survey-data">Unavailable</p>
                                                <p className="number">{water_resource_unavailable}</p>
                                            </div>

                                            <hr />
                                            <p className="text-success"><b>Toilet</b></p>
                                            <hr />
                                            <div className="row">
                                                <p className="survey-data">Available</p>
                                                <p className="number">{Toilet_available}</p>
                                            </div>
                                            <div className="row">
                                                <p className="survey-data">Unavailable</p>
                                                <p className="number">{Toilet_unavailable}</p>
                                            </div>
                                            <hr />
                                            <p className="text-success"><b>Wash Facility</b></p>
                                            <hr />
                                            <div className="row">
                                                <p className="survey-data">Available</p>
                                                <p className="number">{Wash_facility_available}</p>
                                            </div>
                                            <div className="row">
                                                <p className="survey-data">Unavailable</p>
                                                <p className="number">{Wash_facility_unavailable}</p>
                                            </div>
                                            <hr />
                                            <p className="text-success"><b>COVID Details</b></p>

                                            <hr />
                                            <div className="row">
                                                <p className="survey-data">Normal Fever</p>
                                                <p className="number">{Normal_fever_final}</p>
                                            </div>
                                            <div className="row">
                                                <p className="survey-data">Fever</p>
                                                <p className="number">{Fever_final}</p>
                                            </div>
                                            <div className="row">
                                                <p className="survey-data">High Fever</p>
                                                <p className="number">{High_fever_final}</p>
                                            </div>
                                            <div className="row">
                                                <p className="survey-data">Dry Cough</p>
                                                <p className="number">{Dry_Cough_final}</p>
                                            </div>
                                            <div className="row">
                                                <p className="survey-data">Breathing Problem</p>
                                                <p className="number">{Breathing_problem_final}</p>
                                            </div>
                                            <div className="row">
                                                <p className="survey-data">Tiredness</p>
                                                <p className="number">{Tiredness_final}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-8">
                                {/* MAP & BOX PANE */}
                                <div className="card">
                                    <div className="card-header">
                                        {ismunicipalityfinallychoosen ? <h3 className="card-title"><b>Province-2: Municipality Survey Data</b></h3> : isdistrictfinallychoosen ? <h3 className="card-title"><b>Province-2: District Survey Data</b></h3>
                                            : isprovinceselected ? <h3 className="card-title"><b>Province-2: Survey Data</b></h3> : <h3 className="card-title"><b>Showing Overall Survey Data</b></h3>}
                                    </div>
                                    {/* /.card-header */}
                                    <div className="card-body p-0">
                                        <div className="d-md-flex">
                                            <div className="p-1 flex-fill" style={{ overflow: 'hidden' }}>
                                                {/* Map will be created here */}
                                                <div id="world-map-markers" style={{ height: 840, overflow: 'hidden' }}>
                                                    <div className="map" />
                                                    <ReactMapGl className="map-react" {...viewport} mapboxApiAccessToken='pk.eyJ1IjoibmFiYW5pdCIsImEiOiJja2E4MXR3NDkwNGMxMzJzOWF4Zzk1cmRxIn0.PlAUDME-BUb9gV-DCutXzw' mapStyle='mapbox://styles/mapbox/light-v10'
                                                        onViewportChange={(viewport) => setviewPort(viewport)} maxZoom={20} >


                                                        {Map.map((item, id) => (
                                                            <Marker key={id}
                                                                latitude={item.geometry.coordinates[1]}
                                                                longitude={item.geometry.coordinates[0]}
                                                            >
                                                                <button type="button" className="btn btn-primary btn-circle btn-sm" onClick={(e) => {
                                                                    e.preventDefault();
                                                                    setselectedPerson(item);
                                                                    console.log("Person selected>>>", selectedPerson);
                                                                }}>{ismunicipalityfinallychoosen ? Map_demo_municipality.length : isdistrictfinallychoosen ? Map_demo_district.length : Data.length}</button>
                                                            </Marker>
                                                        ))}
                                                        {/** {selectedPerson ? (
                                                            <Popup latitude={selectedPerson.geometry.coordinates} longitude={selectedPerson.geometry.coordinates}
                                                                onClose={() => (setselectedPerson(null))}>



                                                                <div className="btn btn-success popup">

                                                                    <p>Age={selectedPerson.properties.category}</p>
                                                                    <p>Gender={selectedPerson.properties.crimeId}</p>

                                                                </div>
                                                            </Popup>
                                                        ) : null}
                            */}                             </ReactMapGl>
                                                </div>
                                            </div>

                                        </div>{/* /.d-md-flex */}
                                    </div>
                                    {/* /.card-body */}
                                </div>
                            </div>
                        </div>
                        {/* /.row */}
                    </div>{/*/. container-fluid */}
                </section>
                {/* /.content */}
            </div>
            {/* /.content-wrapper */}

            <Footer />
        </div >
    )
}
