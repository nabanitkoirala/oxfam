import React, { useEffect, useState, useRef, useContext } from 'react';
import Axios from 'axios';
import './../src/oxfam data/Mapbox.css';
import Loader from 'react-loader';
import useSupercluster from 'use-supercluster';
import ReactMapGl, { Marker, FlyToInterpolator } from 'react-map-gl';
import { DistrictContext, DataContext, ProvinceContext, MunicipalityContext, WardContext } from './oxfam data/Store';


export default function Testmap() {
    //setting viewport for loading map
    const [viewport, setviewPort] = useState({

        latitude: 26.8999964,
        longitude: 87.9333296,
        width: "100vw",
        height: "100vh",
        zoom: 6
    })
    const mapRef = useRef();//this renders the current state of map


    const [Data, setData] = useContext(DataContext);
    const [District] = useContext(DistrictContext);
    const [Municipality] = useContext(MunicipalityContext);
    const [Province] = useContext(ProvinceContext);
    const [Ward] = useContext(WardContext);
    const [isLoading, setIsloading] = useState(true);
    const [ChooseDistrict, setChooseDistrict] = useState(true);
    const [ChooseProvince, setChooseProvince] = useState(true);
    const [ChooseMunicipality, setChooseMunicipality] = useState(false);
    const [ChooseWard, setChooseWard] = useState(false);





    let sarlahiCoordinates = District.filter((item) => item.title_ne === "सर्लाही").map((item) => item.centroid.coordinates);
    let rautahatCoordinates = District.filter((item) => item.title_ne === "रौतहट").map((item) => item.centroid.coordinates);


    let temp_ward = []
    for (let i = 0; i < Ward.length; i++) {
        let data = Ward[i]
        data.municipality_name = Municipality.filter((item) => item.id === data.municipality).map((item) => item.title_ne)
        temp_ward.push(data);
    }
    console.log("data>>>", Data);
    let Demo = [];
    let Total_drycough = 0;
    let total_data = [];
    for (let i = 0; i < Data.length; i++) {

        let data = Data[i]
        //console.log(data);

        data.testing = temp_ward.filter((item, i) => Number(item.title) === (data.palika === temp_ward[i].municipality[0] ? data.ward : '')).map((item) => item.centroid.coordinates);
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
    console.log("dry cough>>>", Total_drycough);
    console.log("data family>>>", total_data);

    let finale = total_data.filter((item) => item.dry_cough === "छ").length;
    console.log("finale>>>", finale);












    const points = Demo.map(item => ({
        type: "Feature",
        properties: {
            cluster: false,
            crimeId: item.id,
            category: item.district
        },
        geometry: { type: "Point", coordinates: item.provincecoordinate[0] }

    }))
    const Dist = Demo.map(item => ({
        type: "Feature",
        properties: {
            cluster: false,
            crimeId: item.id,
            category: item.district
        },
        geometry: { type: "Point", coordinates: item.districtcoordinate[0] }

    }))
    const Muni = Demo.map(item => ({
        type: "Feature",
        properties: {
            cluster: false,
            crimeId: item.id,
            category: item.district
        },
        geometry: { type: "Point", coordinates: item.municipalitycoordinate[0] }
    }))

    console.log("point", points);





    return (
        <div>
            <ReactMapGl className="map-react" {...viewport} mapboxApiAccessToken='pk.eyJ1IjoibmFiYW5pdCIsImEiOiJja2E4MXR3NDkwNGMxMzJzOWF4Zzk1cmRxIn0.PlAUDME-BUb9gV-DCutXzw' mapStyle='mapbox://styles/mapbox/light-v10'
                onViewportChange={(viewport) => setviewPort(viewport)} maxZoom={20} ref={mapRef}>


                {Dist.map((item, id) => (
                    <Marker key={id}
                        latitude={item.geometry.coordinates[1]}
                        longitude={item.geometry.coordinates[0]}
                    >
                        <button type="button" className="btn btn-warning btn-circle btn-sm">Y</button>
                    </Marker>
                ))}









            </ReactMapGl>
        </div >
    )
}