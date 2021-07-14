import React, { useContext, useEffect } from "react";
import { MapContainer, Marker, Popup, TileLayer, useMap } from "react-leaflet";
import { LatLngTuple } from 'leaflet';
import { useState } from "react";
import SearchControl from "../Map/searchControlMap"
import DrawPolyline from "./PathDraw";


const ActivityMap = () => {
    const [position, setPosition] = useState<any>([50.5, 30.5]);
    const mapStyles = {
        width: "60%",
        height: "60vh"
    }

    return (
        position.length ?

            <MapContainer center={position} zoom={13} style={mapStyles} scrollWheelZoom={false}>
                {<SearchControl />}
                <TileLayer
                    attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <DrawPolyline></DrawPolyline>
                <Marker position={position}>
                    <Popup>
                        not customizable pop up
                    </Popup>
                </Marker>
            </MapContainer> :
            <p>not loaded yet</p>
    )
};


export default ActivityMap;