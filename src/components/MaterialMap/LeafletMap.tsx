'use client';

// This component is only rendered client-side (no SSR) via dynamic import
import { MapContainer, TileLayer, CircleMarker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import type { MaterialSource } from './MaterialMap';
import { MATERIAL_COLORS, MATERIAL_LABELS, MATERIAL_ICONS } from './MaterialMap';
import styles from './MaterialMap.module.css';

interface Props {
  sources: MaterialSource[];
}

export default function LeafletMap({ sources }: Props) {
  // Centred on South Tyrol
  const center: [number, number] = [46.67, 11.12];

  return (
    <MapContainer
      center={center}
      zoom={9}
      style={{ height: '100%', width: '100%' }}
      scrollWheelZoom={false}
      className={styles.leafletMap}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      {sources.map(source => (
        <CircleMarker
          key={source.id}
          center={[source.lat, source.lng]}
          radius={9}
          pathOptions={{
            fillColor: MATERIAL_COLORS[source.material],
            color: '#fff',
            weight: 2,
            opacity: 1,
            fillOpacity: 0.92,
          }}
        >
          <Popup className={styles.popup}>
            <div className={styles.popupInner}>
              <span className={styles.popupIcon}>{MATERIAL_ICONS[source.material]}</span>
              <div>
                <div className={styles.popupTag}>{MATERIAL_LABELS[source.material]}</div>
                <div className={styles.popupName}>{source.name}</div>
                <div className={styles.popupLoc}>📍 {source.location}</div>
                <div className={styles.popupDetail}>{source.detail}</div>
              </div>
            </div>
          </Popup>
        </CircleMarker>
      ))}
    </MapContainer>
  );
}
