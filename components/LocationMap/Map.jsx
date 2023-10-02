import {
    MapContainer,
    Marker,
    Popup,
    TileLayer,
    ZoomControl
} from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
const icon = L.icon({
    iconUrl: 'leaflet/images/marker-icon.png'
});

const Map = ({ lat, long, title, description }) => {
    return (
        <div id="map" style={{ height: '250px', width: '100%' }}>
            {typeof window !== 'undefined' && (
                <MapContainer
                    center={[lat, long]}
                    zoom={13}
                    style={{ height: '100%', width: '100%' }}
                    zoomControl={false}
                >
                    <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
                    <Marker position={[lat, long]} icon={icon}>
                        <Popup>
                            {title} <br /> {description}.
                        </Popup>
                    </Marker>
                </MapContainer>
            )}
        </div>
    );
};

export default Map;
