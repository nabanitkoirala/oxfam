import React, { useState, useEffect, useRef } from 'react';
import ReactMapGl, { Marker } from 'react-map-gl';
import Axios from 'axios';
import useSupercluster from 'use-supercluster';
import './Mapbox.css';


function Map() {
    const [viewport, setviewPort] = useState({
        latitude: 27.001574082293832,
        longitude: 85.30233086363795,
        width: "100vw",
        height: "100vh",
        zoom: 6,
    })
    const mapRef = useRef();
    const [Covid, setCovid] = useState([]);
    const [isLoading, setIsloading] = useState(true);

    useEffect(() => {
        Axios.get('https://bipad.yilab.org.np/api/v1/covid19-case')
            .then(res => {
                setCovid(res.data.results)
                setIsloading(false)
            })
            .catch(err => {
                console.log(err);
            })
    }, [])
    console.log(isLoading);
    console.log(Covid);
    const points = Covid.map(item => ({


        type: "Feature",
        properties: {
            cluster: false,
            crimeId: item.id,
            category: item.district
        },
        geometry: { type: "Point", coordinates: [item.point.coordinates[0], item.point.coordinates[1]] }

    }))
    console.log("points", points);
    const bounds = mapRef.current
        ? mapRef.current
            .getMap()
            .getBounds()
            .toArray()
            .flat()
        : null;
    console.log("bounds", bounds);
    const { clusters } = useSupercluster({
        points,
        zoom: viewport.zoom,
        bounds,
        options: { radius: 75, maxZoom: 20 }
    })
    console.log("clusters", clusters);
    let FinalRender = isLoading ? <p>Isloading</p> :
        clusters.map(cluster => {
            const [longitude, latitude] = cluster.geometry.coordinates;
            const { cluster: isCluster, point_count: pointCount } = cluster.properties;
            if (isCluster) {
                return (
                    <Marker key={cluster.id} latitude={latitude} longitude={longitude}>
                        <div className="cluster-marker" style={{
                            width: `${10 + (pointCount / points.length) * 20}px`,
                            height: `${10 + (pointCount / points.length) * 20}px`
                        }}>
                            <button type="button" className="btn btn-primary btn-circle btn-sm">{pointCount}</button>
                        </div>
                    </Marker>
                )
            }
            return (
                <Marker key={cluster.properties.crimeId} latitude={latitude} longitude={longitude}>
                    <p>Case</p>
                </Marker>
            )
        })


    return (

        <div>
            <ReactMapGl className="map-react" {...viewport} mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_ACCESS_TOKEN} mapStyle='mapbox://styles/mapbox/light-v10'
                onViewportChange={(viewport) => setviewPort(viewport)} maxZoom={20} ref={mapRef}>
                {FinalRender}

            </ReactMapGl>
        </div >
    )



}


export default Map;