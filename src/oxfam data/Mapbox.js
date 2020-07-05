import React, { useState, useEffect, useRef } from 'react';
import ReactMapGl, { Marker, FlyToInterpolator } from 'react-map-gl';
import Axios from 'axios';
import useSupercluster from 'use-supercluster';
import './Mapbox.css';
import Loader from 'react-loader';
//import httpBrowsing from './../utils/httpBrowsing';


function Map() {
    //setting viewport for loading map
    const [viewport, setviewPort] = useState({
        latitude: 27.001574082293832,
        longitude: 85.30233086363795,
        width: "100vw",
        height: "100vh",
        zoom: 6,
    })
    const mapRef = useRef();//this renders the current state of map
    const [Covid, setCovid] = useState([]);//fetched data
    const [isLoading, setIsloading] = useState(true);
    const [District, setDistrict] = useState([]);
    const [Test, setTest] = useState({
        district: '',
        data: ''
    }

    );





    useEffect(() => {
        //fetching data from api 
        Axios.get('https://bipad.gov.np/api/v1/district/')
            .then(res => {
                setDistrict(res.data.results)
                setTest({
                    district: res.data.results
                })
                setIsloading(false)

            })
            .catch(err => {
                console.log(err);
            })

        Axios.get('https://covid19wst.yilab.org.np/api/v1/form', { headers: { "Authorization": 'Token 44e2b23387334bcca310175463de768ee5c41743' } })
            // httpBrowsing.get('/form', true)
            .then(res => {
                setCovid(res.data)
                setIsloading(false)

            })
            .catch(err => {
                console.log(err);
            })

    }, [])




    console.log(isLoading);
    console.log("covid data", Covid);
    console.log("districts>>", District);
    console.log("test>>", Test);


    //Data from an external/remote source will most likely need to be 
    //massaged into the format required by the supercluster library.
    //We must produce an array of GeoJSON Feature objects, with the 
    //geometry of each object being a GeoJSON Point.



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
    //For supercluster to return the clusters based on the array of points we created below, we need to provide it with two additional pieces of information:

    //The map bounds: [westLng, southLat, eastLng, northLat]
    //The map zoom: In Mapbox this will come from our viewport.zoom state
    //The bounds can be gathered by accessing the mapRef.current property that we set up above


    const bounds = mapRef.current
        ? mapRef.current
            .getMap()
            .getBounds()
            .toArray()
            .flat()
        : null;
    console.log("bounds", bounds);
    //With our points in the correct order, and with the bounds and zoom accessible, 
    //it's time to retrieve the clusters. This will use the useSupercluster hook provided by the use-supercluster package.
    //It returns  through a destructured object an array of clusters and the supercluster instance variable */}

    const { clusters, supercluster } = useSupercluster({
        points,
        zoom: viewport.zoom,
        bounds,
        options: { radius: 75, maxZoom: 20 }
    })
    console.log("clusters", clusters);
    let FinalRender = isLoading ? <div className="loader">< Loader /><p className="load">Loading...</p></div> :
        clusters.map(cluster => {
            const [longitude, latitude] = cluster.geometry.coordinates;
            const { cluster: isCluster, point_count: pointCount } = cluster.properties;
            if (isCluster) {
                return (
                    <Marker key={cluster.id} latitude={latitude} longitude={longitude}>
                        <div>
                            <button type="button" className="btn btn-primary btn-circle btn-md"
                                onClick={() => {

                                    //We can always zoom into the map ourselves, but supercluster provides a function
                                    //called getClusterExpansionZoom, which when passed a cluster ID, it will return us
                                    //which zoom level we need to change the map to in order for the cluster to be broken
                                    //down into additional smaller clusters, or individual points.

                                    const expansionZoom = Math.min(supercluster.getClusterExpansionZoom(cluster.id), 20)

                                    //With the next zoom level provided to us by supercluster, we could simple update our Mapbox
                                    //viewport state, but it wouldn't be a smooth transition. react-map-gl provides a class called
                                    //FlyToInterpolator which animates the map to the new zoom and lat/lon rather than the change 
                                    //being instant.

                                    setviewPort({
                                        ...viewport,
                                        latitude,
                                        longitude,
                                        zoom: expansionZoom,
                                        transitionInterpolator: new FlyToInterpolator({ speed: 0.5 }),
                                        transitionDuration: 'auto'


                                    })
                                }}>{pointCount}</button>

                        </div>
                    </Marker>
                )
            }
            return (
                <Marker key={cluster.properties.crimeId} latitude={latitude} longitude={longitude}>
                    <button type="button" className="btn btn-warning btn-circle btn-sm">Y</button>
                </Marker>
            )
        })


    return (

        <div>
            <ReactMapGl className="map-react" {...viewport} mapboxApiAccessToken='pk.eyJ1IjoibmFiYW5pdCIsImEiOiJja2E4MXR3NDkwNGMxMzJzOWF4Zzk1cmRxIn0.PlAUDME-BUb9gV-DCutXzw' mapStyle='mapbox://styles/mapbox/light-v10'
                onViewportChange={(viewport) => setviewPort(viewport)} maxZoom={20} ref={mapRef}>
                {FinalRender}

            </ReactMapGl>
        </div >
    )



}


export default Map;