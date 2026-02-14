export interface Apartment {
  id: number;
  name: string;
  address: string;
  lat: number;
  lng: number;
}

export const apartments: Apartment[] = [
  {
    id: 1,
    name: "Dhaka Heights",
    address: "Banani, Dhaka",
    lat: 23.7937,
    lng: 90.4066,
  },
  {
    id: 2,
    name: "Gulshan Tower",
    address: "Gulshan-1, Dhaka",
    lat: 23.7806,
    lng: 90.4162,
  },
  {
    id: 3,
    name: "Dhanmondi Residency",
    address: "Dhanmondi, Dhaka",
    lat: 23.7465,
    lng: 90.376,
  },
];
