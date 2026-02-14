"use client";

import {
  GoogleMap,
  Marker,
  InfoWindow,
  useJsApiLoader,
} from "@react-google-maps/api";
import { useMemo, useState } from "react";
import { Apartment, apartments } from "@/data/apartments";

const containerStyle = {
  width: "100%",
  height: "500px",
};

export default function MapWithApartments() {
  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || "",
  });

  const [selected, setSelected] = useState<Apartment | null>(null);
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  const center = useMemo(
    () => ({
      lat: selected?.lat || apartments[0].lat,
      lng: selected?.lng || apartments[0].lng,
    }),
    [selected],
  );

  if (!isLoaded) return <p className="text-center py-10">Loading map...</p>;

  return (
    <div className="grid md:grid-cols-3 gap-6 p-6 text-black">
      {/* 🔹 LEFT: Apartment List */}
      <div className="space-y-4">
        <h2 className="text-xl font-bold">Apartments</h2>

        {apartments.map((apt) => {
          const isActive = selected?.id === apt.id;
          return (
            <div
              key={apt.id}
              onClick={() => setSelected(apt)}
              className={`p-4 rounded-2xl cursor-pointer border transition-all duration-200
                ${
                  isActive
                    ? "bg-yellow-400 text-black shadow-lg scale-[1.02]"
                    : "bg-white hover:bg-gray-100"
                }`}
            >
              <h3 className="font-semibold">{apt.name}</h3>
              <p className="text-sm">{apt.address}</p>
            </div>
          );
        })}
      </div>

      {/* 🔹 RIGHT: Map */}
      <div className="md:col-span-2 rounded-2xl overflow-hidden shadow-lg">
        <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={14}>
          {apartments.map((apt) => (
            <Marker
              key={apt.id}
              position={{ lat: apt.lat, lng: apt.lng }}
              onClick={() => setSelected(apt)}
              onMouseOver={() => setHoveredId(apt.id)}
              onMouseOut={() => setHoveredId(null)}
              icon={{
                url:
                  selected?.id === apt.id
                    ? "http://maps.google.com/mapfiles/ms/icons/yellow-dot.png"
                    : "http://maps.google.com/mapfiles/ms/icons/red-dot.png",
              }}
            >
              {hoveredId === apt.id && (
                <InfoWindow position={{ lat: apt.lat, lng: apt.lng }}>
                  <div className="font-semibold">{apt.name}</div>
                </InfoWindow>
              )}
            </Marker>
          ))}
        </GoogleMap>
      </div>
    </div>
  );
}
