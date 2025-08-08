import React from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Container from "../Container/Container";

const flightsData = [
  {
    id: 1,
    airline: "AI",
    from: "DAC",
    to: "DEL",
    departure: "2025-08-09T21:00:00",
    arrival: "2025-08-09T23:20:00",
    duration: "PT28H",
    price: 707.56,
    currency: "EUR",
    featured: true,
  },
  {
    id: 2,
    airline: "AI",
    from: "DAC",
    to: "DEL",
    departure: "2025-08-09T15:00:00",
    arrival: "2025-08-09T17:15:00",
    duration: "PT34H",
    price: 707.56,
    currency: "EUR",
    featured: false,
  },
  {
    id: 3,
    airline: "RJ",
    from: "DAC",
    to: "DOH",
    departure: "2025-08-09T11:05:00",
    arrival: "2025-08-09T13:30:00",
    duration: "PT64H15M",
    price: 722.81,
    currency: "EUR",
    featured: true,
  },
  {
    id: 4,
    airline: "WY",
    from: "DAC",
    to: "MCT",
    departure: "2025-08-09T16:05:00",
    arrival: "2025-08-09T18:55:00",
    duration: "PT26H55M",
    price: 771.54,
    currency: "EUR",
    featured: false,
  },
  {
    id: 5,
    airline: "SV",
    from: "DAC",
    to: "JED",
    departure: "2025-08-09T12:50:00",
    arrival: "2025-08-09T16:45:00",
    duration: "PT30H10M",
    price: 809.21,
    currency: "EUR",
    featured: true,
  },
  {
    id: 6,
    airline: "EK",
    from: "DAC",
    to: "DXB",
    departure: "2025-08-10T08:00:00",
    arrival: "2025-08-10T11:20:00",
    duration: "PT5H20M",
    price: 690.0,
    currency: "EUR",
    featured: false,
  },
  {
    id: 7,
    airline: "QR",
    from: "DAC",
    to: "DOH",
    departure: "2025-08-10T14:30:00",
    arrival: "2025-08-10T17:45:00",
    duration: "PT5H15M",
    price: 715.99,
    currency: "EUR",
    featured: false,
  },
  {
    id: 8,
    airline: "TG",
    from: "DAC",
    to: "BKK",
    departure: "2025-08-11T10:00:00",
    arrival: "2025-08-11T14:30:00",
    duration: "PT4H30M",
    price: 655.45,
    currency: "EUR",
    featured: true,
  },
  {
    id: 9,
    airline: "MH",
    from: "DAC",
    to: "KUL",
    departure: "2025-08-11T20:15:00",
    arrival: "2025-08-12T02:45:00",
    duration: "PT6H30M",
    price: 642.75,
    currency: "EUR",
    featured: false,
  },
  {
    id: 10,
    airline: "CX",
    from: "DAC",
    to: "HKG",
    departure: "2025-08-12T06:50:00",
    arrival: "2025-08-12T13:15:00",
    duration: "PT6H25M",
    price: 789.99,
    currency: "EUR",
    featured: true,
  },
];

const OfferCards = () => {
  return (
    <Container>
  <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center text-gray-800">Exclusive Flight Offers</h2>
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
    {flightsData.map((flight) => (
  <FeatureCard
    key={flight.id}
    image={`https://source.unsplash.com/600x400/?airplane,${flight.to}`}
    title={`${flight.from} → ${flight.to}`}
    location={`${flight.airline} Airlines`}
    finalPrice={`${flight.price} ${flight.currency}`}
    price={flight.price + 50} // example old price
    discount={50}
    featured={flight.featured}
    onViewDetails={() => console.log("View flight", flight.id)}
  />
))}
  </div>
</Container>
  );
};

export default OfferCards;
