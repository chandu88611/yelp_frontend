"use client";
import dynamic from "next/dynamic";
import { useEffect, useState } from "react";
import "leaflet/dist/leaflet.css";

// Dynamically import react-leaflet components only on client
const MapContainer = dynamic(
  () => import("react-leaflet").then((mod) => mod.MapContainer),
  { ssr: false }
);
const TileLayer = dynamic(
  () => import("react-leaflet").then((mod) => mod.TileLayer),
  { ssr: false }
);
const Marker = dynamic(
  () => import("react-leaflet").then((mod) => mod.Marker),
  { ssr: false }
);
const Popup = dynamic(() => import("react-leaflet").then((mod) => mod.Popup), {
  ssr: false,
});
const Tooltip = dynamic(
  () => import("react-leaflet").then((mod) => mod.Tooltip),
  { ssr: false }
);

const locations = [
  {
    type: "restaurant",
    name: "Sunset Dine",
    position: [12.9718, 77.5946],
    address: "MG Road, Bengaluru",
    image: "https://via.placeholder.com/100x60?text=Sunset+Dine",
  },
  {
    type: "restaurant",
    name: "Green Bistro",
    position: [12.975, 77.605],
    address: "Brigade Road, Bengaluru",
    image: "https://via.placeholder.com/100x60?text=Green+Bistro",
  },
  {
    type: "restaurant",
    name: "Skyline Grill",
    position: [12.968, 77.58],
    address: "Indiranagar, Bengaluru",
    image: "https://via.placeholder.com/100x60?text=Skyline+Grill",
  },
  {
    type: "restaurant",
    name: "The Urban Eatery",
    position: [12.961, 77.6],
    address: "Koramangala, Bengaluru",
    image: "https://via.placeholder.com/100x60?text=Urban+Eatery",
  },
  {
    type: "restaurant",
    name: "City Lights Café",
    position: [12.955, 77.59],
    address: "Jayanagar, Bengaluru",
    image: "https://via.placeholder.com/100x60?text=City+Lights",
  },
  {
    type: "spa",
    name: "Relax & Glow Spa",
    position: [12.9725, 77.5955],
    address: "MG Road, Bengaluru",
    image: "https://via.placeholder.com/100x60?text=Relax+Spa",
  },
  {
    type: "spa",
    name: "Zen Garden Spa",
    position: [12.977, 77.606],
    address: "Brigade Road, Bengaluru",
    image: "https://via.placeholder.com/100x60?text=Zen+Spa",
  },
  {
    type: "spa",
    name: "Tranquil Moments",
    position: [12.969, 77.581],
    address: "Indiranagar, Bengaluru",
    image: "https://via.placeholder.com/100x60?text=Tranquil+Spa",
  },
  {
    type: "spa",
    name: "Oasis Wellness",
    position: [12.962, 77.602],
    address: "Koramangala, Bengaluru",
    image: "https://via.placeholder.com/100x60?text=Oasis+Spa",
  },
  {
    type: "spa",
    name: "Serenity Spa",
    position: [12.956, 77.592],
    address: "Jayanagar, Bengaluru",
    image: "https://via.placeholder.com/100x60?text=Serenity+Spa",
  },
];
const BusinessMap = () => {
  const [mapReady, setMapReady] = useState(false);
  const [L, setL] = useState(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const leaflet = require("leaflet");
      setL(leaflet);
      setMapReady(true);
    }
  }, []);

  if (!mapReady || !L) return null; // Avoid SSR issue

  const getCustomIcon = (type) =>
    L.icon({
      iconUrl:
        type === "restaurant"
          ? "/images/icon/restaurant.png"
          : "/images/icon/location.png",
      iconSize: [38, 38],
      iconAnchor: [19, 38],
      popupAnchor: [0, -35],
    });

  return (
    <MapContainer
      center={[12.9718, 77.5946]}
      zoom={13}
      scrollWheelZoom={true}
      className="w-full h-full"
      style={{ minHeight: "100%", width: "100%" }}
    >
      {/* Google-like tiles */}
      <TileLayer
        url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png"
        attribution='&copy; <a href="https://carto.com/">CARTO</a> contributors'
      />

      {/* Markers */}
      {locations?.map((loc, idx) => (
        <Marker
          key={idx}
          position={loc.position}
          icon={getCustomIcon(loc.type)}
        >
          <Tooltip direction="top" offset={[0, -10]}>
            {loc.name}
          </Tooltip>
          <Popup>
            <div className="p-2 rounded-md shadow-lg bg-white w-[180px] space-y-1">
              <img
                src={loc.image}
                alt={loc.name}
                className="rounded w-full h-20 object-cover mb-1"
              />
              <h3 className="font-semibold text-sm text-gray-800">
                {loc.name}
              </h3>
              <p className="text-xs text-gray-600">{loc.address}</p>
            </div>
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
};

export default BusinessMap;
