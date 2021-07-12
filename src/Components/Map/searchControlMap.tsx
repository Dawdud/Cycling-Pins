import { GeoSearchControl, OpenStreetMapProvider } from "leaflet-geosearch";
import { useEffect } from "react";
import { useMap } from "react-leaflet";

const SearchControl = () => {
    const provider = new OpenStreetMapProvider();
    // @ts-ignore
    const searchControl = new GeoSearchControl({
        provider: provider,
        style: 'Bar',
    });

    const map = useMap()
    useEffect((): any => {
        map.addControl(searchControl);

    }, [])
    console.log('map center:', map.getCenter())
    return null
}
export default SearchControl;