"use client";

import dynamic from "next/dynamic";

const MapWithApartments = dynamic(
  () => import("@/components/MapWithApartments"),
  { ssr: false },
);

export default function HomePage() {
  return (
    <main>
      <h1 className="text-3xl font-bold text-center py-6">
        Apartment Location Map
      </h1>

      <MapWithApartments />
    </main>
  );
}
