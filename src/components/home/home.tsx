import React from 'react';
import { usePosition } from '../../services/geolocation'



export const Home = () => {

    const watch = true;
    const {
        latitude,
        longitude,
        speed,
        timestamp,
        accuracy,
        error,
    } = usePosition(watch);
    return (
        <>
            <h1>Home page</h1>
            <h1>Current location={latitude}</h1>
            <h1>Current location={longitude}</h1>
            <h1>Current location={speed}</h1>
            <h1>Current location={timestamp}</h1>
            <h1>Current location={accuracy}</h1>
            <h1>Current location={error}</h1>



        </>
    )
}

export default Home;