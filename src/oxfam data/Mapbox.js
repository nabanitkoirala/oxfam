import React, { useState, useEffect, useRef, useContext } from 'react';
import ReactMapGl, { Marker, FlyToInterpolator } from 'react-map-gl';
import Axios from 'axios';
import useSupercluster from 'use-supercluster';
import './Mapbox.css';
import Loader from 'react-loader';
import { CovidContext, isLoadingContext, DataContext, MunicipalityContext, ProvinceContext, DistrictContext, WardContext } from './Store';



function Map() {

    const [viewport, setviewPort] = useState({

        latitude: 26.8999964,
        longitude: 87.9333296,
        width: "100vw",
        height: "100vh",
        zoom: 7
    })
    const [Data, setData] = useContext(DataContext);
    const [Municipality] = useContext(MunicipalityContext);
    const [Province] = useContext(ProvinceContext);
    const [District] = useContext(DistrictContext);
    const [Ward] = useContext(WardContext);
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

    const points = Demo.map(item => ({
        type: "Feature",
        properties: {
            cluster: false,
            crimeId: item.id,
            category: item.district
        },
        geometry: { type: "Point", coordinates: item.provincecoordinate[0] }

    }))





    return (
        <div>
            <ReactMapGl className="map-react" {...viewport} mapboxApiAccessToken='pk.eyJ1IjoibmFiYW5pdCIsImEiOiJja2E4MXR3NDkwNGMxMzJzOWF4Zzk1cmRxIn0.PlAUDME-BUb9gV-DCutXzw' mapStyle='mapbox://styles/mapbox/light-v10'
                onViewportChange={(viewport) => setviewPort(viewport)} maxZoom={20} >


                {points.map((item, id) => (
                    <Marker key={id}
                        latitude={item.geometry.coordinates[1]}
                        longitude={item.geometry.coordinates[0]}
                    >
                        <button type="button" className="btn btn-primary btn-circle btn-sm">{Data.length}</button>
                    </Marker>
                ))}
            </ReactMapGl>
        </div >

    )
}

export default Map;