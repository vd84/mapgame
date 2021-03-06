import React, { useEffect } from 'react';
import Siderbar from '../../smallercomponents/header/header';
import { usePosition } from '../../services/geolocation'
import { Button } from '@material-ui/core';

export const Game = () => {

    const watch = true;
    const {
        latitude,
        longitude,
        speed,
        timestamp,
        accuracy,
        error,
    } = usePosition(watch);

    const sendCoordinates = () => {
        console.log("Sending coordinates, lat: " + latitude  + "lon: " + longitude )
    }

    useEffect(() => {
        const interval = setInterval(() => {
            sendCoordinates();
        }, 1000);
        return () => clearInterval(interval);
      }, []);
    return (
        <>
        <h1>Game</h1>
        <Button onClick={sendCoordinates}>Send Coordinates</Button>
        <h2>{latitude}</h2>
        <h2>{longitude}</h2>
        </>

    )
}

export default Game;