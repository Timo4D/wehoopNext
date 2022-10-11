import React from "react";
import { useState, useEffect } from "react";
import "leaflet/dist/leaflet.css";
import { MapContainer, TileLayer, Marker, useMap, Popup } from "react-leaflet";
import iconRetinaUrl from "leaflet/dist/images/marker-icon-2x.png";
import iconUrl from "leaflet/dist/images/marker-icon.png";
import shadowUrl from "leaflet/dist/images/marker-shadow.png";
import { useMapEvents } from "react-leaflet/hooks";
import { LatLng } from "leaflet";

export default function Map(props) {
    const [geoData, setGeoData] = useState({ lat: props.lat, lng: props.lng });

    const center = [geoData.lat, geoData.lng];

    function LocationMarker() {
        const initialMarkers = new LatLng(51.505, -0.09);
        const [marker, setMarker] = useState(initialMarkers);

        const map = useMap();

        useEffect(() => {
            map.locate().on("locationfound", function (e) {
                setMarker(e.latlng);
                map.flyTo(e.latlng, map.getZoom());
            });
        }, [map]);

    }

    useEffect(() => {
        (async function init() {
            delete L.Icon.Default.prototype._getIconUrl;

            L.Icon.Default.mergeOptions({
                iconRetinaUrl: iconRetinaUrl.src,
                iconUrl: iconUrl.src,
                shadowUrl: shadowUrl.src,
            });
        })();
    }, []);

    return (
        <MapContainer center={center} zoom={13} style={{ height: props.size }}>
            <TileLayer
                attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <LocationMarker />
        </MapContainer>
    );
}
