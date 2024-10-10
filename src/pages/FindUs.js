import { MapContainer, TileLayer, Marker } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
  iconUrl: require('leaflet/dist/images/marker-icon.png'),
  shadowUrl: require('leaflet/dist/images/marker-shadow.png'),
});

const FindUs = () => {
    const position = [10.17780, -64.68273];

    return (
        <>
            <div style={{textAlign: 'center', marginTop:'6em'}} className="about-us-title">TE ESPERAMOS
                <div style={{ textAlign: 'center',marginTop:'0.5em', marginBottom:'1em', }} className="about-us-heading">ENCUENTRANOS</div>
            </div>
            <div style={{display:'flex', justifyContent:'center'}}>
                <MapContainer center={position} zoom={18} style={{ height: '600px', width: '75%' }}>
                <TileLayer
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                />
                <Marker position={position}>
                </Marker>
                </MapContainer>
            </div>
            <div style={{fontFamily:'montserrat', marginTop:'2em', fontSize:'0.8rem', marginBottom:'6em'}}>C.C. EMPRESARIAL ATLÁNTICO, PISO #1, OFICINA # P1-22, LECHERÍA, ESTADO ANZOÁTEGUI, APARTADO POSTAL #6016.</div>
        </>
    );
};

export default FindUs;