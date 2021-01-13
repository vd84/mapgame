import { useState, useEffect } from 'react';

const defaultSettings = {
    enableHighAccuracy: true,
    timeout: Infinity,
    maximumAge: 0,
};

type Position = Readonly<{
    latitude: string,
    longitude: string,
    accuracy: string,
    speed: string,
    timestamp: string
  }>

export const usePosition = (watch = false, settings = defaultSettings) => {
    const [position, setPosition] = useState<Position>();
    const [error, setError] = useState(null);

    const onChange = ({ coords, timestamp }) => {
        setPosition({
            latitude: coords.latitude,
            longitude: coords.longitude,
            accuracy: coords.accuracy,
            speed: coords.speed,
            timestamp
        });
    };

    const onError = (error) => {
        setError(error.message);
    };

    useEffect(() => {
        if (!navigator || !navigator.geolocation) {
            setError('Geolocation is not supported');
            return;
        }

        let watcher = null;
        if (watch) {
            watcher =
                navigator.geolocation.watchPosition(onChange, onError, settings);
        } else {
            navigator.geolocation.getCurrentPosition(onChange, onError, settings);
        }

        return () => watcher && navigator.geolocation.clearWatch(watcher);
    }, [settings.enableHighAccuracy, settings.timeout, settings.maximumAge, watch, settings]);

    return { ...position, error };
};
