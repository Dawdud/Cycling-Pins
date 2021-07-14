import { TileLayer, FeatureGroup, Circle } from 'react-leaflet';
import { EditControl } from "react-leaflet-draw"

const _onEditPath = (e: any) => {
    console.log("write all log", e);

}

const _onCreate = (e: any) => {
    console.log("write all log", e);

}
const _onDeleted = (e: any) => {
    console.log("write all log", e);

}

const DrawPolyline = () => (
    <FeatureGroup>
        <EditControl
            position='topright'
            onEdited={_onEditPath}
            onCreated={_onCreate}
            onDeleted={_onDeleted}
            draw={{
                rectangle: false
            }}
        />

    </FeatureGroup>
);

export default DrawPolyline;