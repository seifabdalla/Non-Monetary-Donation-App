import React, { useRef, useState, useCallback } from 'react';
import { GoogleMap, Marker, useLoadScript } from '@react-google-maps/api';

const libraries = ['places'];
const smallMapContainerStyle = { width: '400px', height: '300px' };
const largeMapContainerStyle = { width: '100vw', height: '100vh' };
const center = { lat: 40.7128, lng: -74.0060 };

function MapDynamic() {
    const { isLoaded, loadError } = useLoadScript({
        googleMapsApiKey: 'AIzaSyCbIlhQ1f6fKT8r2rmQOi7zUaMzII0D-Us',
        libraries,
    });

    const mapRef = useRef();
    const [markerPosition, setMarkerPosition] = useState(null);
    const [isMapExpanded, setIsMapExpanded] = useState(false);

    const onMapLoad = useCallback((map) => {
        mapRef.current = map;
        navigator.geolocation.getCurrentPosition((position) => {
            const pos = {
                lat: position.coords.latitude,
                lng: position.coords.longitude,
            };
            setMarkerPosition(pos);
            mapRef.current.setCenter(pos);
        });
    }, []);

    const onMapClick = useCallback((event) => {
        const pos = {
            lat: event.latLng.lat(),
            lng: event.latLng.lng(),
        };
        setMarkerPosition(pos);

    }, [isMapExpanded]);

    if (loadError) return 'Error loading maps';
    if (!isLoaded) return 'Loading Maps';

    return (
        <div>
            <GoogleMap
                id='map'
                mapContainerStyle={isMapExpanded ? largeMapContainerStyle : smallMapContainerStyle}
                zoom={10}
                center={center}
                options={{ gestureHandling: 'cooperative', scrollwheel: true, draggable: true }}
                onClick={onMapClick}
                onLoad={onMapLoad}
            >
                {markerPosition && <Marker position={markerPosition} />}
            </GoogleMap>
        </div>
    );
}

export default MapDynamic;