'use client';

import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import { useEffect } from 'react';

// Fix for default marker icon missing in production build
// delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
});

const locations = [
  { name: "La Serena", lat: -29.9027, lng: -71.2520 },
  { name: "San Felipe", lat: -32.7500, lng: -70.7333 },
  { name: "Los Andes", lat: -32.8333, lng: -70.6000 },
  { name: "Puchuncaví", lat: -32.7167, lng: -71.4167 },
  { name: "Quintero", lat: -32.7833, lng: -71.5333 },
  { name: "Viña del Mar", lat: -33.0245, lng: -71.5518 },
  { name: "Valparaíso", lat: -33.0472, lng: -71.6127 },
  { name: "Quilpué", lat: -33.0500, lng: -71.4500 },
  { name: "Villa Alemana", lat: -33.0417, lng: -71.3750 },
  { name: "Peñablanca", lat: -33.0333, lng: -71.3500 },
  { name: "Lampa", lat: -33.2833, lng: -70.8667 },
  { name: "Algarrobo", lat: -33.3667, lng: -71.6833 },
  { name: "Santo Domingo", lat: -33.6333, lng: -71.6167 },
  { name: "Yerbas Buenas", lat: -35.7500, lng: -71.5833 },
  { name: "Parral", lat: -36.1500, lng: -71.8333 },
];

export default function ProjectsMap() {
  return (
    <div className="h-[500px] w-full rounded-2xl overflow-hidden shadow-lg border border-slate-200 z-0">
      <MapContainer 
        center={[-33.0, -71.0]} 
        zoom={6} 
        scrollWheelZoom={false} 
        className="h-full w-full z-0"
        style={{ height: '100%', width: '100%' }}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {locations.map((loc, idx) => (
          <Marker key={idx} position={[loc.lat, loc.lng]}>
            <Popup>
              <strong>{loc.name}</strong>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
}
